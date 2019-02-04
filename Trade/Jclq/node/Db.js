var mssql = require('mssql');  
var db = {}; 
var config = {  
  user: 'sa',  
  password: 'Abc789456123',  
  server: 'localhost',   
  database: 'vipcp',  
  //port:54687,  
 /* options: {  
    encrypt: true   
  },  
  pool: {  
    min: 0,  
    max: 10,  
    idleTimeoutMillis: 3000  
  }  */
};   
db.sql = function (sql, callBack) {  
  var connection = new mssql.Connection(config, function (err) {  
    if (err) {  
      console.log(err);  
      return;  
    }  
    var ps = new mssql.PreparedStatement(connection);  
    ps.prepare(sql, function (err) {  
      if (err){  
        console.log(err);  
        return;  
      }  
      ps.execute('', function (err, result) {  
        if (err){  
          console.log(err);  
          return;  
        }  
  
        ps.unprepare(function (err) {  
          if (err){  
            console.log(err);  
            callback(err,null);  
            return;  
          }  
            callBack(err, result);  
        });  
      });  
    });  
  });  
};  
module.exports = db;