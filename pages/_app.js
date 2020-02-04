import React from 'react';

import '../lib/css/NanumGothic.css';
import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// library.add(faBars, faUser, faTwitter, faFacebook);

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
