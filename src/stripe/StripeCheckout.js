import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckoutBtn from 'react-stripe-checkout';
import { payment_call } from '../redux/features/payment/action';
import { remove_all } from '../redux/features/cart/action';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function StripeCheckout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedItems, totalToCharge } = useSelector((state) => state.cart);
  const [usertoken, setUserToken] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const stripePriceConversion = totalToCharge * 100;
  const key = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    setUserToken(localStorage.getItem('store_user_token'));
    setUserEmail(localStorage.getItem('store_user_email'));
  };

  const onToken = (token) => {
    let date = new Date();
    let filteredToken = usertoken.replace(/"/g, '');
    let filteredEmail = userEmail.replace(/"/g, '');
    const purchasedItems = [...selectedItems, date.toISOString()];

    dispatch(
      payment_call({
        amount: stripePriceConversion,
        token,
      })
    );

    // TO REFACTOR TO PASS THROUGH REDUX
    axios
      .all([
        axios.post(
          `https://clean-pumps-tick.cyclic.app/api/v1/confirmation/message`,
          {
            clientMail: userEmail,
            order: selectedItems,
            total: Number(totalToCharge),
          },
          {
            headers: {
              authorization: filteredToken,
            },
          }
        ),
        axios.post(
          `https://clean-pumps-tick.cyclic.app/api/v1/order/userHistory/${filteredEmail}`,
          {
            shoppingCart: purchasedItems,
          },
          {
            headers: {
              authorization: filteredToken,
            },
          }
        ),
      ])
      .then(
        axios.spread((confirmation, history) => {
          console.log(confirmation);
          console.log(history);
        })
      )
      .catch((err) => console.log(err));

    dispatch(remove_all());

    setTimeout(() => {
      history.push('/dashboard');
    }, 500);
  };

  return (
    <StripeCheckoutBtn
      label="Pay Now"
      name="Faouzi Commerce Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${totalToCharge}`}
      amount={stripePriceConversion}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  );
}

export default StripeCheckout;
