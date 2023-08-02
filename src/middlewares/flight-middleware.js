const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId  ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.price ||
        !req.body.arrivalTime ||
        !req.body.departureTime

    ){
        return res.status(400).json({
            data:{},
            success:false,
            message:"invalid request body for create flight",
            error:"missing mandantory properties for create flight"

        })
    }
    next();
}
module.exports={
    validateCreateFlight
}