// import formidable from "formidable";
// export default async (req, res) => {
//     const form = new formidable.IncomingForm();
//
//     console.log(form);
//
//     form.parse(req, function(err, fields, files) {
//         console.log(files);
//         // res.end();
//     });
//     form.on('img', function (name, file) {{
//         console.log(name);
//         console.log(file);
//         console.log(file.name);
//     }
//
//     })
//
// };
// export const config = {
//     api: {
//         bodyParser: false,
//     }
// };

import multer from "multer";
// const upload = multer({ dest: "public/img/upload" });

export default async (req, res) => {
    console.log('#1');

    const upload = multer({ dest: "public/img/upload" });

    if (req.method === 'POST') {
        console.log('#2');
        // console.log(req.body); // undefined
        upload.single("img")(req, {}, (err) => {
            console.log('#3');
            // console.log(req);
            // console.log(req.body);
            console.log(req.file);
            res.end();
        });
        console.log('#4');
    }
}

export const config = {
    api: {
        bodyParser: false,
    }
};
