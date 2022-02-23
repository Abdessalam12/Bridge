import React, { useState } from "react";
import Authentification from "./Authentification";
import Menu from "./Menu";

function Afficher(props) {
  const [valid, setValid] = useState(false);
  const changeValid = (val) => {
    setValid(val);
  };
  return (
    <>
      <Menu onClick={changeValid} />
      <Authentification valid={valid} />
    </>
  );
}

export default Afficher;
