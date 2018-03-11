
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    "id": 0,
    "usuario": "",
    "email": "",
    "permiso_email": "",
    "nacimiento_dia": "",
    "nacimiento_mes": "",
    "permiso_nacimiento_dia": "",
    "nacimiento_ano": "",
    "permiso_nacimiento_ano": "",
    "sexo": "",
    "permiso_sexo": "",
    "nacimiento_pais": "",
    "permiso_nacimiento_pais": "",
    "nacimiento_ciudad": "",
    "permiso_nacimiento_ciudad": "",
    "residencia_pais": "",
    "permiso_residencia_pais": "",
    "residencia_ciudad": "",
    "permiso_residencia_ciudad": "",
    "direccion": "",
    "permiso_direccion": "",
    "telefono": "",
    "permiso_telefono": "",
    "celular": "",
    "permiso_celular": "",
    "personalidad": "",
    "permiso_personalidad": "",
    "intereses": "",
    "permiso_intereses": "",
    "series": "",
    "permiso_series": "",
    "musica": "",
    "permiso_musica": "",
    "creencias_religiosas": "",
    "permiso_creencias_religiosas": "",
    "creencias_politicas": "",
    "permiso_creencias_politicas": "",
    "legenda": "",
    "descripcion": "",
    "precio_hora": "",
    "create_at": "",
    "update_at": ""
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.profileSet:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};