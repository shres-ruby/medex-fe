import axios from 'axios';

import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('127.0.0.1:8000/api/login/',{
            email: email,
            password: password
        })
        .then(res => {
            console.log("from login", res);
            const token =  res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}
// export const authLogin = (email, password) => {
//     return dispatch => {
//         dispatch(authStart());
//         axios.post('http://127.0.0.1:8000/rest-auth/login/',{
//             user:{
//             email: email,
//             password: password
//          }
//         },
//         { withCredentials: true }
//         )
//         .then(res => {
//             console.log("from login", res);
//             const token =  res.data.key;
//             const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//             localStorage.setItem('token',token);
//             localStorage.setItem('expirationDate',expirationDate);
//             dispatch(authSuccess(token));
//             dispatch(checkAuthTimeout(3600));
//         })
//         .catch(err => {
//             dispatch(authFail(err))
//         })
//     }
// }


export const authSignup = (email, password1, password2, firstname, lastname, dob, address, phone) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api/patientsignup/',{
            email: email,
            password1: password1,
            password2: password2,
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            address: address,
            phone: phone
        })
        .then(res => {
            const token =  res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined){
            dispatch(logout()); 
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ){
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) /1000) );
            }
        }
    }
}