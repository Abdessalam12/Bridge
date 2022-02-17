import React from 'react';
import '../css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function Acceuil(props) {
 
  return (
  <h1 className='lmj-banner'>{props.name}</h1>
  );
}

export default Acceuil;
