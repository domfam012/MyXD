import { loadDB, firestore } from './../../../lib/js/db';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from "firebase";

export default async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    let resData;

    console.log(req.body.email);
    console.log(req.body.password);

    if (req.method === 'POST'){
        const db = await loadDB();

        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
            .then(() => {
                console.log("SUCCESS");
                res.status(450).json({today:'monday'});
            })
            .catch(err => {
                alert("Login Failed")
                console.log(err);
            });
    }
}


// export const signIn = credentials => {
//     return(dispatch, getState) => {
//         firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
//             .then(() => {
//                 dispatch({ type: 'LOGIN_SUCCCESS'})
//             })
//             .catch(err => {
//                 dispatch({ type: 'LOGIN_ERROR', err })
//             });
//     };
// };
