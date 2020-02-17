const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev });
const handle = app.getRequestHandler();

const express = require('express')();
const helmet = require('helmet');
const bodyParser = require('body-parser');

const config = require('./config.js');
const cookieSession = require('cookie-session');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? config.port.dev : config.port.production;
const ip = dev ? config.ip.dev : config.ip.production;

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);
        const {pathname, query} = parsedUrl;

        express.set('trust proxy', 1);
        express.use(
            helmet(),
            cookieSession(config.option.cookie),
            bodyParser.urlencoded({extended: true}),
            bodyParser.json()
        );

        if (pathname === '/admin') {
            res.writeHead(302, { Location: '/admin/login' });
            res.end();
        } else {
            handle(req, res, parsedUrl);
        }

    }).listen(port, err => {
        if (err) throw err;

        console.log(`> NODE_ENV: ${process.env.NODE_ENV}`);
        console.log(`> Ready on http://${ip}`);
        console.log(`>>> __IP: [${ip}] __PORT: [${port}]`);
        console.log(`\n\n\n`);
    });
});
