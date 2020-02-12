const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const express = require('express')();
const helmet = require('helmet');
const bodyParser = require('body-parser');

const config = require('./config.js');
const cookieSession = require('cookie-session');

const multer = require('multer');

// console.log('__dirname');
// console.log(__dirname);

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        express.set('trust proxy', 1);
        express.use(
            helmet(),
            cookieSession(config.option.cookie),
            bodyParser.urlencoded({extended: true}),
            bodyParser.json()
        );

        express.use(multer({dest:'./public/uploads/'}).any());

        // api -> set.. -> next

        // const apiRegTest = /^\/api((\/[^\s/\/]+)*)?$/;
        // if (apiRegTest.test(pathname)) {
        //     // return res.json({a:1});
        //     // require('./api.js')(req, res);
        //     console.log('here?');
        // } else

        // express.post('/upload/board/create', (req, res, next) => {
        //     console.log('#1');
        //     console.log(req.body)
        // });

        // const mdw = () => {
        //
        // };
        // express.use(mdw);

        // console.log(pathname);
        // if (pathname === '/upload/board/create') {
        //     /**
        //      *  nextjs req
        //      */
        //     console.log('#2')
        // }

        if (pathname === '/admin') {
            res.writeHead(302, { Location: '/admin/login' });
            res.end();
        } else {
            handle(req, res, parsedUrl);
        }

    }).listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
