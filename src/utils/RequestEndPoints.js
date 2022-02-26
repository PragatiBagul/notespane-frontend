import request from "./Request";

export const userSignJWTVerification = (user) => {
    const body = {
        "Name": user.displayName,
        "Email": user.email,
        "PhotoURL": user.photoURL,
        "id":user.uid
    }
    const requestUrl = 'http://localhost:8080/api/user';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const response = request(requestUrl, options);
    return response;
};