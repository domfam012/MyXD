import formidable from "formidable";
import fs from "fs";

export default async (req, res) => {
    const form = new formidable.IncomingForm();

    form.uploadDir = "./public/img/upload";
    form.keepExtensions = true;

    form.parse(req, function(err, fields, files) {
        console.log(`fields: ${JSON.stringify(fields)}`);
        console.log(`files: ${JSON.stringify(files)}`);
    });

    form.on('file', function (name, file) {
        console.log(`file: ${JSON.stringify(file)}`);
        console.log(`file.name: ${file.name}`);

        // 변경하는 이름 -> moment()+'-'+pid+file.name

        fs.rename(file.path, form.uploadDir + "/" + file.name,function (err) {
            if (err) {
                fs.unlink(form.uploadDir + "/" + file.name);
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
