const zipper = require('zip-local');
const fs = require('fs');

const fileName = `${require('./package.json').name}.zip`;

if(fs.existsSync(fileName)){
    fs.unlink(fileName, (err) => {
        if (err) throw err;
        zipper.sync.zip("./_next/").compress().save(fileName);
        console.log("update");
    });
}else{
    zipper.sync.zip("./_next/").compress().save(fileName);
    console.log("create");
}

