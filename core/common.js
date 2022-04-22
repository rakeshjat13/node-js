const bcrypt = require('bcryptjs');


exports.genHash = async (string, callback) => {
    // let password = "rakesh";
    var hashString = await bcrypt.genSalt(10, function (err, Salt) {
         bcrypt.hash(string, Salt, callback)
    })
}

exports.cmprEncryString = (password, hashedPassword, callback) => {
    bcrypt.compare(password, hashedPassword, callback)
}

// -------- Example -------------
// var aa = genHash('rakesh');
// console.log("password", aa);
// cmprEncryString('rakesh', '$2a$10$DRWfQ6ixhfd/qPf1loyma.7AIUah9zd7.MeAS3pbGWG26xpIXHSghh');
// $2a$10$H6lY.0MKyalxfcIR1EsOYOPob2iES/OwJf2MxHy5BUlklgc53sgKG