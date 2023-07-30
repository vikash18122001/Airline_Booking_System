const {city}=require('../models/index');

class cityRepository{
    async createCity({name}){
        try{
            const City= await city.create({ name });
            return City;
        }
        catch(error){
             throw {error};
        }
    }
    async deleteCity(cityId)
    {
        try{
            await city.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        }
        catch(error){
            throw {error};
        }
    }
    async updateCity(cityId,data)
    {
        try {
            const City=await city.update(data,{
                where :{
                    id:cityId
                }
            });
            return City;
            
        } catch (error) {
            console.log("something went wrong in city-repository");
            throw {error};
        }
    }

    async getCity(cityId)
    {
        try {
            const  City = await city.findByPk(cityId);
            return City;
            
        } catch (error) {
            console.log("something went wrong in city-repository");
            throw {error};
        }
    }
}

module.exports=cityRepository; 
