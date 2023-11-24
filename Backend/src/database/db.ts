const Sequelize = require('sequelize');

const DB_NAME = 'GRUPO6';

const DB_USER = 'root';

const DB_PASS = '12345678';   



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306                      //1433 mssql,  oracle 1521 
    }

);


async function generateDb() {
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();