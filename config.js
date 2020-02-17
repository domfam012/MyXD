const option = {
    firestore: {
        apiKey: "AIzaSyDyYie0HBPkZslWwib3DNBCIXM9VBMtL3s",
        authDomain: "myxd-247f4.firebaseapp.com",
        databaseURL: "https://myxd-247f4.firebaseio.com",
        projectId: "myxd-247f4",
        storageBucket: "myxd-247f4.appspot.com",
        messagingSenderId: "575641093519",
        appId: "1:575641093519:web:56035054fbaa244dfe37fa"
    },
    cookie: {
        name: 'MyXD',
        keys: ['MyXD12!#', 'DomFAM3$'],
        maxAge: 1000 * 60 * 60 * 10 // 10 hours
    },
    assetPrefix: {
        dev: 'http://localhost:3000',
        aws: 'http://myxd.co.kr',
        ghp: 'https://pyungwook-domfam.github.io/domfam012'
    },
    ip: {
        dev: "127.0.0.1",
        production: "13.209.55.219"
    },
    port: {
        dev: 3000,
        production: 80
    },
    GA_TRACKING_ID: 'UA-158587547-1'
};

module.exports = {
    option
};
