import formidable from "formidable";
import fs from "fs";
import moment from "moment";

export default async (req, res) => {
    const form = new formidable.IncomingForm();

    form.uploadDir = "./public/img/upload";
    form.keepExtensions = true;

    let pid = "";
    form.parse(req, function(err, fields, files) {
        pid = fields.pid;

        console.log(`fields: ${JSON.stringify(fields)}`)
    });

    console.log(`req.body: ${req.body}`);

    form.on('file', function (name, file) {
        console.log(`file: ${JSON.stringify(file)}`);
        console.log(`file.name: ${file.name}`);

        // imgSaveName = pid + "-" + moment.format('YYYYMMDDHHmmss')
        // imgPath = "/img/upload/" + imgSaveName

        console.log(`pid: ${pid}`);

        const fileExtension = file.name.split('.')[file.name.split('.').length - 1];
        const imgName = pid + "-" + moment().format('YYYYMMDDHHmmss') + "." + fileExtension;

        fs.rename(file.path, form.uploadDir + "/" + imgName,function (err) {
            if (err) {
                fs.unlink(form.uploadDir + "/" + imgName);
            }
        });
    });

    res.status(200).end();
};

export const config = {
    api: {
        bodyParser: false,
    }
};

// export default withUploader(handler);




// import formidable from "formidable";
//
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
//
// export const config = {
//     api: {
//         bodyParser: false,
//     }
// };


import multer from "multer";
// const upload = multer({ dest: "public/img/upload" });

// export default async (req, res) => {
//     console.log('#1');
//
//     const upload = multer({ dest: "public/img/upload" });
//
//     if (req.method === 'POST') {
//         console.log('#2');
//         // console.log(req.body); // undefined
//         upload.single("img")(req, {}, (err) => {
//             console.log('#3');
//             // console.log(req);
//             // console.log(req.body);
//             console.log(req.file);
//
//             res.end();
//         });
//         console.log('#4');
//     }
// }
//
// export const config = {
//     api: {
//         bodyParser: false,
//     }
// };
