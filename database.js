var mysql = require('mysql');
const saltRounds = 10;
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Monkeydluffy1@',
    database : 'prefer',
    insecureAuth : true
});

function connectDB(){
    connection.connect();
}

send=(data,cb)=>{
    connection.query(`insert into contact (first,last,email,message,date) values ('${data.firstName}','${data.lastName}','${data.email}','${data.message}','${data.date}')`,(err,result)=>{
        if(err)throw err;
        cb(result);
    })
}

getContact=(cb)=>{
    connection.query(`select * from contact`,(err,result)=>{
        if(err)throw err;
        cb(result);
    })
}

module.exports={
    connectDB,
    send,
    getContact,
}
