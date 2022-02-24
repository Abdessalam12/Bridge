import React, { useState } from "react";
import Authentification from "./Authentification";
import Menu from "./Menu";
import Newaccount from "./Newaccount";
function Afficher(props) {
  const [valid, setValid] = useState(false);
  const changeValid = (val) => {
    setValid(val);
  };
  return (
    <>
      <Menu onClick={changeValid} />
      {valid ? <Authentification /> : <Newaccount />}
    </>
  );
}

export default Afficher;
