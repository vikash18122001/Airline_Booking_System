const express=require('express');

const {PORT}=require('./config/serverConfig');

const apiRoutes=require('./routes/index');

const bodyParser=require('body-parser');

const setupAndStartServer= async ()=>{
    // create express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`Server is starting on Port : ${PORT}`);
        
    })
}
setupAndStartServer();