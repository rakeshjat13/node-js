const User = require('../models/user.model');

exports.getAllUser = (req, res) => {
  User.getAllUsers(req, (err, data) => {
    console.log("err", err);
    console.log("data", data);
    if(err){
      return res.json({status: 500, error:err})
    }

    return res.json({data:data, status:200});
  })
}

exports.filterUser = (req, res) => {
  User.filterUser(req, (err, data) => {
    if(err){
      return res.json({status:500, error: err});
    }

    return res.json({data:data, status:200})
  })
}

exports.createUser = (req, res) => {
    const {name,email, dept, address, password} = req.body;
    
    if(!name || !email || !dept || !address || !password) return res.json({status:400, message:'Bad Request'});

    User.createUser(req, (err, data) => {
      if(err) return res.json({status:500, error:err})

      return res.json({status:200, data:data});

    })
}