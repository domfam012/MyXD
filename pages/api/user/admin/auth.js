import { loadDB } from './../../../../lib/js/db';
import { useSession } from 'next-session';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    const sessions = await useSession(req, res);

    if (req.method === 'GET') {

        console.log(`req.session: ${req.session}`);
        console.log(`req.session.user: ${req.session.user}`);

        if (!req.session.user) {
            return res.status(401).end();
        }
        return res.status(200).end();
    } else {
        //
        res.json( { status: 401, msg: '' } );
    }


}

