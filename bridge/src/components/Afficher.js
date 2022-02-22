import React, { useState } from "react";
import Authentification from "./Authentification";
import Menu from "./Menu";

function Afficher() {
  const [valid, setValid] = useState(true);
  function test(value) {
    setValid(value);
  }
  return (
    <>
      <Menu onClick={test} valid={valid} />
      <Authentification valid={valid} />
    </>
  );
}

export default Afficher;
