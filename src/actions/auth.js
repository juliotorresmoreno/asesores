
import * as actionsTypes from './actionsTypes';
import { api } from '../config';

export const actionsCreators = {
    register: (data) => (dispatchEvent) => {
        return new Promise(function(resolve, reject) {
            fetch(`${api}/auth/registrar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                response.json()
                    .then(function(data) {
                        if (response.ok) {
                            dispatchEvent(({
                                type: actionsTypes.authRegister
                            }));
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
    }
}