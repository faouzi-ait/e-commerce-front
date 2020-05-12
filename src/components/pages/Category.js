import React from "react";
import { useParams } from "react-router-dom";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";

export default function Category() {
  let { id } = useParams();
  console.log(id);

  return (
    <>
      {" "}
      <Header />
      <HeaderMobile />
      <div style={{ background: "transparent", height: "100vh" }}>{id}</div>
    </>
  );
}
