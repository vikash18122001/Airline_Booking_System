const {Flights}=require('../models/index');
const {Op}=require('sequelize');

class flightRepository{
    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId)
        {
            filter.departureAirportId=data.departureAirportId;
        }
        if(data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}}); 
        }
        if(data.maxPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}}); 
        }
        if(data.minPrice && data.maxPrice)
        {
            Object.assign(filter,{
                [Op.and]:[
                    {price:{[Op.lte]:data.maxPrice}},
                   { price:{[Op.gte]:data.minPrice}}
                ]
            })
        }
        return filter;
    }
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
       async getFlight(flightId){
        try{
            const flight= await Flights.findByPk(flightId);
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer")
             throw {error};
        }
       }
       async getFlight(flightId){
        try{
            const flight= await Flights.findByPk(flightId);
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer")
             throw {error};
        }
       }
       async getAllFlights(filter){
        try{
            const filterObject=await this.#createFilter(filter)
            const flights= await Flights.findAll({
                where:filterObject
            });
            return flights;
        }
        catch(error){
            console.log("something went wrong at repository layer")
             throw {error};
        }
       }
       async update(data,flightId){
        try{
           const response= await Flights.update(data,{
            where :{
                id:flightId
            }
           })
           return response;
        }
        catch(error){
            console.log("something went wrong at repository layer")
             throw {error};
        }
       }

}
module.exports=flightRepository;