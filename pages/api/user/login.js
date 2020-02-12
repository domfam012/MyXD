import { loadDB, firestore } from './../../../lib/js/db';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from "firebase";
import {error} from "next/dist/build/output/log";
import { useSession } from 'next-session';

export default async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    const sessions = await useSession(req, res);
    // req.session.destroy(); // logout


    // console.log(req.body.email);
    // console.log(req.body.password);

    if (req.method === 'POST'){
        const db = await loadDB();

        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
            .then(cred => {

                // console.log(cred.user.email);

                //로그인이 성공한 경우
                if(cred.user.email){

                    sessions.user = req.body.email;

                    res.status(200).json({
                        msg:"succsss",
                    });
                    console.log("SUCCESS");
                }

            })
            .catch(error => {

                //유저가 존재하지 않는 경우
                if(error.code === 'auth/user-not-found'){
                    res.status(400).json({
                        msg:'유저가 존재하지 않습니다.',
                    })
                }

                //비밀번호가 틀린 경우
                if(error.code === 'auth/wrong-password'){
                    res.status(600).json({
                        msg:'비밀번호를 정확하게 입력하세요.',
                    })
                }

                return res.end();

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
