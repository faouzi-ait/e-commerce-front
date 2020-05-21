import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import DashboardProfile from "../ui-elements/DashboardProfile";
import { profile } from "../../redux/features/user_profile/action";

function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile.profile);

  useEffect(() => {
    const userEmail = localStorage.getItem("store_user_email");
    dispatch(profile(userEmail.replace(/"/g, "")));
  }, []);

  console.log(user);

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div style={{ width: "75%", margin: "5rem auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          Quick Profile Overview
        </h1>
        {user && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
              <div style={{ justifySelf: "center" }}>
                <img
                  src={
                    user.avatar !== "" ? user.avatar : "./icons/no-avatar.png"
                  }
                  alt="user"
                  style={{
                    display: "block",
                    marginBottom: "2rem",
                    height: "10rem",
                    width: "10rem",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <DashboardProfile user={user} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
