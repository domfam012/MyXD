import formidable from "formidable";
import fs from "fs";
import moment from "moment";

export default async (req, res) => {
    const form = new formidable.IncomingForm();

    form.uploadDir = "./public/img/upload";
    form.keepExtensions = true;

    const pid = req.cookies.pid;
    form.parse(req);
    form.on('file', function (name, file) {
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

