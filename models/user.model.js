const knex = require('../bin/dbConnection');

exports.getAllUsers = (req, callback) => {
  console.log("model req", req.body);
  const tt = knex.select('*').from('users_tbl').then((data, err) => {
    console.log("query data", data);
    console.log("query err", err);
    callback(null, data);
  }).catch((err) => {
    console.log("catch error", err);
    callback(err.code, null);
  });
}

exports.filterUser = (req, callback) => {
  console.log('request', req);
  const filter = {email, address} = req;
  console.log("email is ", filter);
  console.log("email", email);
  if(!email) callback('invalid request', null);

  const tt = knex.select('*')
            .from('users_tbl')
            .where(filter)
            .then((data, err) => {
        console.log("query data", data);
        console.log("query err", err);
        callback(null, data);
      }).catch((err)=> {
        callback(err.code, null);
      })
}

exports.createUser = (req, callback) => {
    knex.insert(req.body).into('users_tbl').then((data, err)=> {
      console.log("query data", data);
        console.log("query err", err);
        callback(null, data);
    }).catch((err) => {
      callback(err, null);
    })
}