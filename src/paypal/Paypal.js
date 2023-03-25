import React, { useState, useEffect } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useSelector, useDispatch } from 'react-redux';
import { remove_all } from '../redux/features/cart/action';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const MyApp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedItems, totalToCharge } = useSelector((state) => state.cart);
  const [usertoken, setUserToken] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    setUserToken(localStorage.getItem('store_user_token'));
    setUserEmail(localStorage.getItem('store_user_email'));
  };

  const onSuccess = (payment) => {
    let filteredToken = usertoken.replace(/"/g, '');
    let filteredEmail = userEmail.replace(/"/g, '');
    let date = new Date();
    const purchasedItems = [...selectedItems, date.toISOString()];

    // TO REFACTOR TO PASS THROUGH REDUX
    axios
      .all([
        axios.post(
          `http://localhost:5000/api/v1/confirmation/message`,
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
          `http://localhost:5000/api/v1/order/userHistory/${filteredEmail}`,
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

  const onCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log('Error!', err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  let env = 'sandbox'; // you can set here to 'production' for production
  let currency = 'USD'; // or you can set this value from your props or state
  let total = Number(totalToCharge); // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  const client = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID,
    production: 'YOUR_PRODUCTION_APP_ID',
  };

  // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
  //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // For production app-ID:
  //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

  // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
};

export default MyApp;
