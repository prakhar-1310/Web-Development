import express from 'express';
// const express = require('express');
const app = express();
const port = 8080;


app.listen(port,(req,res)=>{
    console.log(`connected at port ${port}`);
})