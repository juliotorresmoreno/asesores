

import axios from "axios";


export const request = ({
    url, method, data, token, headers = {},
    callback = () => { },
    failure = () => { }
}) => {
    return new Promise(function (resolve, reject) {
        var _headers, body;
        if (data && data.__proto__.constructor === window.FormData) {
            _headers = { ...headers };
            body = data;
        } else {
            _headers = { ...headers, "Content-Type": 'application/json' };
            body = JSON.stringify(data); 
        }

        axios(url, {
            method: method.toString().toLowerCase(),
            mode: 'cors',
            withCredentials: true,
            headers: _headers,
            data: body
        })
            .then(({ status, data, headers, error }) => {
                if (status >= 200 && status < 400) {
                    if (headers["content-type"] === "application/json") {
                        callback(data);
                        resolve(data);
                        return;
                    }
                    callback();
                    resolve();
                    return;
                } else if(error) {
                    throw new Error(error);
                }
                throw new Error("Error desconocido");
            })
            .catch(function (err) {
                failure(err);
                reject(err);
            });
    });
};