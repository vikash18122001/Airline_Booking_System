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
const getAll=async (req,res)=>{
    try {
        const getAllFlights=await FlightService.getAllFlight(req.query);
        return res.status(201).json({
            data: getAllFlights,
            success:true,
            message:"flights fetched successfully"
 
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"flights not fetched",
            error: error

        })
    }
}
module.exports={
    create,
    getAll
}