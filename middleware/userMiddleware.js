myEncryp = require('../core/common');

exports.encryptPwd = (req, res, next) =>{
    console.log("middleware", req.body)
    myEncryp.genHash(req.body.password, async (err, hash) => {
        if (err) {
            console.log('Cannot encrypt');
            next();return;
        }
        req.body.password = hash;
        next();
    });
}