# Welcome to Flight Services
## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the download
project
- create a `.env` file on the root directory and add the following environment
variable 
  - `PORT=3000`
- Inside the `src/config` create a new file `config.json` and then add the following peice of json
```
{
  "development": {
    "username": "root",
    "password": "your_db_password",
    "database": "flight_search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

``` 
- Once you have added you db config as listed above ,go to the `src` folder from
terminal and executes command `npx sequelize db:create`.  

## db design
 - Airplane Table
 - Flight Table
 - Airport
 - City

 - A flight belongs to an airplane but an airplane has many flights.
 - A city has many airport but an airport belongs to a city.
 - One airport can have many flights but a flight belongs to one airport.

## Table design

### City -> id,name ,createdAt,updatedAt
### Airpot -> id,name,address,City_id,createdAt,updatedAt
    RelationShip -> City has many airport and airport belongs to a city(one to many)
 