const { crudRepository}=require('../repository/index');


class crudService{
    constructor(repository){
        this.repository=repository;
    }
    async create(data){
        try {
            const response=await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw {error};
        }
             
    }
    async destroy(id){
          try {
            const response=await this.repository.destroy(id);
            return response;
          } catch (error) {
            console.log("something went wrong in crud service");
            throw {error};
          }
    }
    async get(id){
            try {
                const response=await this.repository.get(id);
                return response;
            } catch (error) {
                console.log("something went wrong in crud service");
                throw {error};
            }
    }
    async getAll(){
            try {
                const response=await this.repository.getAll(id);
                return response;
            } catch (error) {
                console.log("something went wrong in crud service");
               throw {error};
            }
    }
    async update(data,id){
           try {
            const response=await this.repository.destroy(data,id);
            return response;
           } catch (error) {
                 console.log("something went wrong in crud service");
                throw {error};
           }
    }
}
module.exports=crudService;