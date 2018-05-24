let config = require('config');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host:  config.get('mysql.host'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password'),
    database: config.get('mysql.database'),
});

function getConnection() {
    if (!connection) {
        connection.connect();
    }
    return connection;
}
module.exports = {
    getConnection: getConnection
}