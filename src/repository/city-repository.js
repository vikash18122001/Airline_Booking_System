const {city}=require('../models/index');
const { Op}=require('sequelize');

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
            const City=await city.findByPk(cityId);
            City.name=data.name;
            await City.save();
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
    async getAllCities(filter)
    {
        try {
            if(filter){
                const Cities=await city.findAll({
                     where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                     }
                });
                return Cities;
            }
            const  Cities = await city.findAll();
            return Cities;
            
        } catch (error) {
            console.log("something went wrong in city-repository");
            throw {error};
        }
    }

}

module.exports=cityRepository; 
