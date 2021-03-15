module.exports = {
    "type": "mysql",
    "host": process.env.BASE_URL,
    "port": 3306,
    "username": process.env.USERDB,
    "password": process.env.PASSWORD,
    "database": process.env.DBA,
    "synchronize": true,
    "logging": false,
    "timezone": "+0",
    "entities": [
        "./dist/modules/**/typeorm/entities/*.js"
     ],
    "migrations":[
        "./dist/shared/typeorm/migrations/*.js"
    ],
    "cli":{
        "migrationsDir": "./dist/shared/typeorm/migrations"
    }
}
