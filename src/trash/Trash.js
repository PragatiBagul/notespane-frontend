import React from 'react'

//import trash image

import trashImage from "./trash.gif";

//react router dom

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Trash
  = () => {

    return (
      <div>

        <h1>Trash</h1>

        <p>Whatever you dump, lives here</p>
        <img src={trashImage} height="500" width="500" alt="not found" />
      </div>

    )

  }

export default Trash
  ;