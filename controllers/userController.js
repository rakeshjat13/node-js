const express = require('express');
const router = express.Router();
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