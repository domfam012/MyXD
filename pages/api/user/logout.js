import 'firebase/auth';
import 'firebase/database';
import * as firebase from "firebase";

export default async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET'){
        firebase.auth().signOut().then(() => {
            console.log('user logout');
            res.status(200).end();
        });
    }
}
