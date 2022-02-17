import React from 'react';
import ReactDOM from 'react-dom';

import Acceuil from './components/Acceuil';
import Test   from './components/Test'

ReactDOM.render(
    <div>
       <Acceuil name="test" />
       <Test/>
    </div>
   
  ,
  document.getElementById('root')
);
