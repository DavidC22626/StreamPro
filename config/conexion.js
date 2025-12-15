const mysql = require("mysql2");


const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stream_pro"
});

conexion.connect((err) => {
    if(err){
        console.error("conexion fallida", err);
        return;
    }
    console.log("conexion exitosa");
});

module.exports = conexion;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "stream_pro",
//     port: 3306,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// module.exports = pool.promise();