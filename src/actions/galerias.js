
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    upload: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/galery/upload`,
            method: "POST",
            data: data,
            callback: function () {
                
            },
            token: getState().auth.session.token
        });
    },
    read: (galeria) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/galery/${galeria}`,
            method: "GET",
            callback: function ({data}) {
                dispatchEvent({
                    type: actionsTypes.galeriaSet,
                    data: data.sort((a, b) => a.modified > b.modified)
                });
            },
            token: getState().auth.session.token
        });
    }
}