import { loadDB, firestore } from './../../../lib/js/db';
import 'firebase/auth';
import 'firebase/database';



export const signIn = credentials => {
    return(dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCCESS'})
            })
            .catch(err => {
                dispatch({ type: 'LOGIN_ERROR', err })
            });
    };
};
