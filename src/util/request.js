

export const request = ({
    url, method, data, token, headers = {},
    callback = () => { },
    failure = () => { }
}) => {
    return new Promise(function (resolve, reject) {
        const newUrl = url.toString().indexOf("?") >= 0 ?
                (token ? `${url}&token=${token}` : url) :
                (token ? `${url}?token=${token}` : url);
        var _headers;
        var body;
        if (data && data.__proto__.constructor === window.FormData) {
            _headers = { ...headers };
            body = data;
        } else {
            _headers = { ...headers, "Content-Type": 'application/json' };
            body = JSON.stringify(data);
        }

        fetch(newUrl, {
            method: method,
            headers: _headers,
            body: body
        })
            .then((response) => {
                if (response.headers.get("Content-Type") === "application/json") {
                    response.json()
                        .then(function (data) {
                            if (response.ok) {
                                callback(data);
                                resolve(data);
                                return;
                            }
                            throw new Error(data.error);
                        })
                        .catch(function (err) {
                            failure(err);
                            reject(err);
                        });
                    return;
                }
                if (response.ok) {
                    callback();
                    resolve();
                    return;
                }
                throw new Error("Error desconocido");
            })
            .catch(function (err) {
                failure(err);
                reject(err);
            });
    });
};