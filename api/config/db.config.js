const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');
const pg = require('pg');

const connect = () => {

    /*const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });*/
    
    //const hostName = "34.74.94.155"; // GCP
    const hostName = "10.10.10.57";  //AHEAD
    const userName = "postgres";
    //const password = "arul-2202"; //GCP
    const password = "Psql@2202@";
    const database = "postgres";
    const dialect = "postgres";

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

//    console.log('process.env.PG_CONNECTION_STR ', process.env.PG_CONNECTION_STR)

/*    const sequelize = new Sequelize(process.env.PG_CONNECTION_STR, {
        dialectModule: pg
    });*/

    const db = {};
    
    db.sequelize = sequelize;
    db.tasks = require("../model/task.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}