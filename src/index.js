const express=require('express');

const {PORT}=require('./config/serverConfig');

const apiRoutes=require('./routes/index');

const bodyParser=require('body-parser');
const db=require('./models/index')

const setupAndStartServer= async ()=>{
    // create express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`Server is starting on Port : ${PORT}`);
        //for sync db
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
        
    })
}
setupAndStartServer();