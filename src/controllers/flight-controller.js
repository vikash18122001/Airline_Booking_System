const { flightService }=require('../services/index');

const FlightService=new flightService();


const create= async (req,res)=>{
    try {
        const flight= await FlightService.createFlight(req.body);
        return res.status(201).json({
           data: flight,
           success:true,
           message:"flight created successfully"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"flight not created",
            error: error

        })
        
    }
}
module.exports={
    create
}