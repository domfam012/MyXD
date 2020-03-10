const zipper = require('zip-local');
const fs = require('fs');

const fileName = `${require('./package.json').name}.zip`;

if(fs.existsSync(fileName)){
    fs.unlink(fileName, (err) => {
        if (err) throw err;
        console.log("update");
        zipper.sync.zip("./").compress().save(fileName);
    });
}else{
    console.log("create");
    zipper.sync.zip("./").compress().save(fileName);
}

