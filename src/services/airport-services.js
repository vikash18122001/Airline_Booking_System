const crudService=require('./crud-services');
const {airportRepository}=require('../repository/index');


class airportService extends crudService{
    constructor(){
        const AirportRepository=new airportRepository();
        super(AirportRepository);
    }
}
module.exports=airportService;