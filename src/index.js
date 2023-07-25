const express=require('express');
const {PORT}=require('./config/serverConfig');

const setupAndStartServer= async ()=>{
    // create express object
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server is starting on Port : ${PORT}`);
    })
}
setupAndStartServer();