import React from 'react'

//import pagenotfound image

import pagenotfoundImage from "./pagenotfound.jpg";

//react router dom

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Error404Page
    = () => {

        return (


            <div className="pageNotFound">

                <h1>Oops..! 404 Page Not Found</h1>

                <p>Looks like you came to a wrong page on our server</p>

                <img src={pagenotfoundImage} height="500" width="500" alt="not found" />

            </div>

        )

    }

export default Error404Page
    ;