const mysql = require('mysql')
const dbConfig = require('../config').dbConfig

const pool = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database,
    user: dbConfig.user,
    password: dbConfig.password,
})

module.exports = function(sql, values = []) {
    return  new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err)
                rej(err)
            else {
                connection.query(sql, values, (err, result, fields) => {
                    if(err)
                        rej(err)
                    else {
                        res(result)
                    }

                    connection.release()
                })
            }
        })
    })
}