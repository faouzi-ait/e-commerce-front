import React from "react";
import Header from "../../ui-elements/HeaderDesktop";
import HeaderMobile from "../../ui-elements/HeaderMobile";

export default function Error404() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <HeaderMobile />
      The page you asked for was not found
    </div>
  );
}
