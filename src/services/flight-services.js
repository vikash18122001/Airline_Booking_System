const {flightRepository,airplaneRepository}=require('../repository/index');
const { compareTime}=require('../utils/helper')

class flightService{
    constructor(){
        this.airplaneRepository=new airplaneRepository();
        this.flightRepository=new flightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error: "departure time does not greater than arrival time"}
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity,
            });
            return flight;
        } catch (error) {
            console.log("something went wrong at Service layer")
            throw {error};
        }
    }
}
module.exports=flightService;