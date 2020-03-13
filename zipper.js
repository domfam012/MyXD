const zip = require('file-zip');
const fs = require('fs');

const fileName = `${require('./package.json').name}.zip`;

if(fs.existsSync(fileName)){
    fs.unlink(fileName, (err) => {
        if (err) throw err;
        zip.zipFolder(['./_next','./components','./pages','./public'],`${fileName}`,function(err){
            if(err){
                console.log('zip error',err)
            }else{
                console.log('zip success');
            }
        })
    });
}else{
    zip.zipFolder(['./_next','./components','./pages','./public'],`${fileName}`,function(err){
        if(err){
            console.log('zip error',err)
        }else{
            console.log('zip success');
        }
    })
}

