const {response} = require('express');

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

const usersPost = (req,res,next) => {

    const body = req.body;

    res.json({
        msg: 'post API - Controller',
        body
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