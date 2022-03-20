import request from "./Request";
import { useState } from "react";
export const userSignJWTVerification = (user) => {
    const body = {
        "Name": user.displayName,
        "Email": user.email,
        "PhotoURL": user.photoURL,
        "id":user.uid
    }
    const requestUrl = 'http://localhost:8080/user';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
};

export const fetchUserProfile = (user) => {
    const requestUrl = 'http://localhost:8080/user/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}