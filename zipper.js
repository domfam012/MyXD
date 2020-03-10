var zipper = require('zip-local');
zipper.sync.zip("./_next/").compress().save("pack.zip");