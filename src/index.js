const express=require('express');

const {PORT}=require('./config/serverConfig');

const cityRepository=require('./repository/city-repository');

const bodyParser=require('body-parser');

const setupAndStartServer= async ()=>{
    // create express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,async ()=>{
        console.log(`Server is starting on Port : ${PORT}`);
        const repo=new cityRepository();
        repo.deleteCity(1);
    })
}
setupAndStartServer();