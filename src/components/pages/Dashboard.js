import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profile } from "../../redux/features/user_profile/action";
import { update_profile } from "../../redux/features/update_avatar/action";
import { storage } from "../../config/firebase_config";

import LoginHeader from "../ui-elements/LoginHeader";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import DashboardProfile from "../ui-elements/DashboardProfile";
import DashboardOrderTable from "../ui-elements/DashboardOrderTable";

function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile.profile);
  const { loading } = useSelector((state) => state.profile);
  const [progress, setProgress] = useState(0);
  const [photoUpdate, setPhotoUpdate] = useState(false);
  const [file, setFile] = useState("");
  const userEmail = localStorage.getItem("store_user_email");

  useEffect(() => {
    console.log(userEmail);
    dispatch(profile(userEmail.replace(/"/g, "")));
  }, [userEmail, dispatch]);

  const uploadPhoto = (e) => {
    const id = userEmail.replace(/"/g, "");

    if (!file.name) return alert("Please select an image");

    const uploadTask = storage
      .ref(`${id}/avatar/${file.name.substring(0, 40)}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref(`${id}/avatar`)
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            dispatch(
              update_profile(userEmail.replace(/"/g, ""), { avatarLink: url })
            );
          });
      }
    );
    setPhotoUpdate(false);
  };

  const getFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const shwoUploadCompletedMsg = (_) => {
    setTimeout(() => {
      setProgress(0);
    }, 2000);

    return <div style={{ color: "red" }}>Upload Complete</div>;
  };

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
              {!loading ? (
                <>
                  <div style={{ justifySelf: "center" }}>
                    <img
                      src={
                        user.avatar !== ""
                          ? user.avatar
                          : "./icons/no-avatar.png"
                      }
                      alt="user"
                      style={{
                        display: "block",
                        height: "10rem",
                        width: "10rem",
                        marginBottom: "1rem",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  {photoUpdate ? (
                    <div
                      style={{
                        textAlign: "center",
                        width: "32%",
                        margin: "0 auto",
                      }}
                    >
                      <input
                        type="file"
                        name="upload"
                        id="upload"
                        style={{ border: "0", marginBottom: "-2rem" }}
                        onChange={getFile}
                        accept="image/x-png,image/gif,image/jpeg"
                      />
                      <button
                        style={{
                          padding: "5px 10px",
                          display: "inline-block",
                          textAlign: "center",
                          margin: "1rem",
                        }}
                        onClick={uploadPhoto}
                      >
                        update
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{
                        textAlign: "center",
                        width: "32%",
                        margin: "0 auto",
                        cursor: "pointer",
                      }}
                      onClick={() => setPhotoUpdate(!photoUpdate)}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          marginBottom: ".25rem",
                          textAlign: "center",
                          border: "1px solid #000",
                          padding: "4px 10px",
                          borderRadius: "3px",
                        }}
                      >
                        Upload a new photo
                      </span>
                      {progress === 100 && shwoUploadCompletedMsg()}
                    </div>
                  )}
                  <DashboardProfile user={user} loading={loading} />
                  {user.history.length > 0 && (
                    <>
                      <div style={{ marginBottom: "1.5rem" }}></div>
                      <LoginHeader msg="Order History" />
                      <DashboardOrderTable user={user} />
                    </>
                  )}
                </>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "1.6rem",
                    padding: "5rem 0",
                  }}
                >
                  Loading profile...
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
