const {CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }
    async createCity(cityId){
        try {
            const city=await this.CityRepository.createCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try {
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try {
            const city=await this.CityRepository.deleteCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try {
            const city=await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    

}
module.exports=CityService;