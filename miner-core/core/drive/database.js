let mysql = require('mysql');

class MySql{
    constructor(){
        this.connection = null
        this.data = 123
    }
    open(host, port, user, password, database){
        this.connection = mysql.createConnection({
            host     : host,
            port     : port,
            user     : user,
            password : password,
            database : database
        });
        this.connection.connect();
    }
    close(){
        this.connection.end();
    }
    exec(sql, params, callback){
        if(params == null){
            this.connection.query(sql,callback);
        }else{
            this.connection.query(sql,params,callback);
        }
    }
}
let db = new MySql();
module.exports = db;
