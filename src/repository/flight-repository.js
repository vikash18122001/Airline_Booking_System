const {Flights}=require('../models/index');

class flightRepository{
       async createFlight(data){
        try{
            const flight= await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer")
             throw {error};
        }
       }
}
module.exports=flightRepository;