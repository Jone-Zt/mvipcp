//采集数据写入数据库
var sql = require("mssql");
var conn = function(mssqlConn,callback){
    var conn = new sql.Connection(mssqlConn, function(err) {
        callback(err,conn);
    });
}
exports.conn = conn;