// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import config from '../../config'

const firebase = require('firebase/app');
require('firebase/firestore');
const config = '../../config';

module.loadDB = () => {
    try {
        firebase.initializeApp(config.option.firestore);
    } catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
    }

    return firebase.firestore();
}
