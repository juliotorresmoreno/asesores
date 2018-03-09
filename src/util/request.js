

export const request = (url, method, data, callback, token) => {
    if (typeof data === "function") {
        token = callback;
        callback = data;
    }
    return new Promise(function (resolve, reject) {
        fetch(token ? `${url}?token=${token}` : url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
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
                            reject(new Error(data.error));
                        });
                    return;
                }
                callback();
                resolve();
            })
            .catch(function (err) {
                reject(err);
            });
    });
};