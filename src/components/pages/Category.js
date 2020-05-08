import React from "react";
import { useParams } from "react-router-dom";
import Header from "../ui-elements/Header";

export default function Category() {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <Header />
      {id}
    </div>
  );
}
