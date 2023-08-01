const {airportService}=require('../services/index');

const AirportService  =  new airportService();

const create=async (req,res)=>{
    try{
    const response=await AirportService.create(req.body);
    return res.status(201).json({
        message: 'successfully created the airport',
        err:{},
        data:response,
        success:true
    })
}
catch(error){
    console.log(error);
    return res.status(500).json({
        data:{},
        err:{error},
        success:false,
        message: "cannot create a new message"
    })
}
}
module.exports={
    create,
}