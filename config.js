const option = {
    firestore: {
        apiKey: "Your-Firebase-apiKey",
        authDomain: "Your-Firebase-authDomain",
        databaseURL: "Your-Firebase-databaseURL",
        projectId: "Your-Firebase-projectId",
        storageBucket: "Your-Firebase-storageBucket",
        messagingSenderId: "Your-Firebase-messagingSenderId",
        appId: "Your-Firebase-appId"
    },
    assetPrefix: {
        dev: 'http://localhost:3000',
        aws: 'http://your-domain',
        ghp: 'http://your-github-page'
    },
    ip: {
        dev: "127.0.0.1",
        production: "production-ip"
    },
    port: {
        dev: 3000,
        production: 80
    },
    GA_TRACKING_ID: 'Your-GA_TRACKING_ID'
};

module.exports = {
    option
};
