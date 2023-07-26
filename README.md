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