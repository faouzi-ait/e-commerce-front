import React from "react";
import { Tabs } from "@yazanaabed/react-tabs";
import Header from "./Header";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function UserAuth({ history }) {
  return (
    <>
      <Header />
      <div className="login__screen">
        {/* DESKTOP DISPLAY */}
        <div className="login__screen--current-user">
          <Login history={history} />
        </div>
        <div className="login__screen--new-user">
          <Register history={history} />
        </div>

        {/* RESPONSIVE DISPLAY */}
        <div
          style={{ textAlign: "center" }}
          className="login__user--responsive"
        >
          <Tabs
            activeTab={{
              id: "tab1",
            }}
            tabsProps={{
              style: {
                textAlign: "center",
                border: "0px solid pink",
              },
            }}
          >
            <Tabs.Tab id="tab1" title="EXISTING USER">
              <div className="login__screen--current-user-res">
                <Login history={history} />
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="NEW USER">
              <div className="login__screen--new-user-res">
                <Register history={history} />
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
