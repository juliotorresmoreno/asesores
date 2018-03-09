

export const request = (url, method, data, callback) => {
    if (typeof data === "function") callback = data;
    return new Promise(function(resolve, reject) {
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            response.json()
                .then(function(data) {
                    if (response.ok) {
                        callback(data);
                        resolve(data);
                        return;
                    }
                    reject(new Error(data.error));
                });
        })
        .catch(function(err) {
            reject(err);
        });
    });
};