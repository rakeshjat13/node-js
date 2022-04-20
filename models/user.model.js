const knex = require('../bin/dbConnection');

exports.getAllUsers = (req, callback) => {
  console.log("model req", req.body);
  const tt = knex.select('*').from('user_tbl').then((data, err) => {
    console.log("query data", data);
    console.log("query err", err);
    callback(null, data);
  }).catch((err) => {
    console.log("catch error", err);
    callback(err.code, null);
  });
}

exports.filterUser = (req, callback) => {
  const filter = {email} = req.body;
  knex.setect('*')
      .from('user_tbl')
      .where(filter)
      .then((data, err) => {
        console.log("query data", data);
        console.log("query err", err);
        callback(null, data);
      }).catch((err)=> {
        callback(err, null);
      })
}