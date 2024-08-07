const {response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const usersGet = (req,res,next) => {

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
        query
    })}; 

const usersPut = (req,res,next) => {

    const {id} = req.params

    res.json({
        msg: 'put API - Controller',
        id
    })}; 

const usersPost = async(req,res,next) => {

    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //validacion de correo
    

    //encriptar password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        msg: 'post API - Controller',
        user
    })}; 

const usersDelete = (req,res,next) => {
    res.json({
        msg: 'delete API - Controller'
    })}; 

const usersPatch = (req,res,next) => {
    res.json({
        msg: 'patch API - Controller'
    })}; 

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch,
}