import React from "react";
import Header from "../../ui-elements/HeaderDesktop";
import HeaderMobile from "../../ui-elements/HeaderMobile";

export default function Error403() {
  return (
    <div>
      <Header />
      <HeaderMobile />
      Unauthorized Access{" "}
    </div>
  );
}
