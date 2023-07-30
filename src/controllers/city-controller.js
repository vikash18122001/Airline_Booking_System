const {CityService}=require('../services/index');

const cityService=new CityService();


const create= async (req,res)=>{
    try {
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
           data: city,
           success:true,
           message:"city created successfully"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"city not created",
            error: error

        })
        
    }
}
const destroy= async (req,res)=>{
    try {
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
           data: response,
           success:true,
           message:"city deleted successfully"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"city not able to delete",
            error: error

        })
        
    }
}
const get= async (req,res)=>{
    try {
        const city= await cityService.getCity(req.params.id);
        return res.status(201).json({
           data: city,
           success:true,
           message:"city get successfully"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"city not able to fetch",
            error: error

        })
        
    }
}
const update = async (req,res)=>{
    try {
        const city= await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
           data: city,
           success:true,
           message:"city created successfully"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"city not created",
            error: error

        })
        
    }
}
module.exports={
    create,
    destroy,
    update,
    get
}