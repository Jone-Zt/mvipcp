<!--#include file="JSON2.asp"-->
<script language="jscript" runat="server">
var M = {
    forEach:function(obj,func) {
        for(var item in obj){
            func(item,obj[item]);
        }
    },
    indexOf:function(arr,e) {
        for(var i=0,j; j=arr[i]; i++){
            if(j==e){return i;}
        }
      return -1;
    },
    toInsert:function(_insert){
        var insert = _insert;
        var sql = "INSERT INTO "+insert.from;
        sql += "("+insert.name.join(",")+")";
        sql += "VALUES";
        var arro = [];
        for(var p in insert.value){
            var _this = insert.value[p];
            var arr = [];
            for(var q in _this) arr.push("'"+_this[q]+"'");
            arro.push("("+arr.join(",")+")");
        }
        sql += arro.join(",");
        return sql;
    },
    someObj:function(x,y){
        // If both x and y are null or undefined and exactly the same 
        if ( x === y ) { 
         return true; 
        }

          
        for ( var p in x ) { 
         //Inherited properties were tested using x.constructor === y.constructor
         if ( x.hasOwnProperty( p ) ) { 
             // Allows comparing x[ p ] and y[ p ] when set to undefined 
             if ( ! y.hasOwnProperty( p ) ) { 
              return false; 
             } 
             
             // If they have the same strict value or identity then they are equal 
             if ( x[ p ] === y[ p ] ) { 
              continue; 
             } 
             
             // Numbers, Strings, Functions, Booleans must be strictly equal 
             if ( typeof( x[ p ] ) !== "object" ) { 
              return false; 
             } 
             
             // Objects and Arrays must be tested recursively 
             // if ( ! Object.equals( x[ p ], y[ p ] ) ) { 
             //  return false; 
             // } 
         } 
        } 
         
        for ( p in y ) { 
         // allows x[ p ] to be set to undefined 
         if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) { 
         return false; 
         } 
        } 
        return true; 
    },
    POST:function(name){
        var reqstr = String(Request.Form(name));
        return reqstr == "undefined" ? "" : reqstr;
    },
    GET:function(name){
        var reqstr = String(Request.QueryString(name));
        return reqstr == "undefined" ? "" : reqstr;
    },
    REQ:function(name){
        var reqstr = String(Request(name));
        return reqstr == "undefined" ? "" : reqstr;
    },
    format:function(fmt,_date) { //author: meizz
        var date = _date=='' ? new Date() : new Date(_date);
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}
function VbJson(){
    return {
        "add":function(k,v){
            if(k && v && k !== "add") this[k] = v;
            return this;
        }
    }
}
var Adodb = function(conn){
    this.conn = conn;
}
Adodb.prototype.open = function(sql,deal) {
    var n = new Exc(sql,deal,this.conn);
    return n.open();
}
Adodb.prototype.colse = function(o) {
    this.conn.close;
    delete this.conn;
}
Adodb.prototype.temp = function(o){
    var temp = this.tempSql(o);
    this.conn.Execute(temp[0]);
    this.conn.Execute(temp[1]);
}
Adodb.prototype.tempSql = function(o){
    if(o.from.substr(0,1)!="#") o.from = "#"+o.from;
    var type = [];
    for(var p in o.name) type.push(o.name[p]+" "+o.type[p]+" null");

    var _temp = "CREATE TABLE "+o.from+"("+type.join(",")+")";
    var k = M.toInsert(o);
    return [_temp,k];
}
var Open = function(tableName){
    return new _query(tableName);
}
var _query = function(tableName){
    this._data = {
        "tableName":tableName,
        "filedName":"*"
    }
}
_query.prototype = {
    "data":function(data){
        this._data.data = data;
    },
    "where":function(where){
        this._data.where = where
    },
    "update":function(data,value){
        var data = [];
        typeof data == "string" && typeof value == "string" ? data[0][data] = value : data = this._data.data;
    },
    "select":function(top){
        var select = "SELECT "
        if(top) select += "TOP("+top+") ";
        var sql = select+this.filedName+" FROM "+this.tableName+" WHERE "+this.where+"";
    },
    "filed":function(filedName){
        this._data.filedName = filedName;
    }
}
var Exc = function(sql,deal,conn){
    this.rs = Server.CreateObject("Adodb.Recordset");
    this.conn = conn;
    this.c = {
        sql:sql,
        deal:deal != '' && deal != 'undefined' && typeof deal == 'number' ? deal : 1
    };
}
Exc.prototype.open = function() {
    //Response.Write(this.c.sql+"<br>");
    this.rs.open(this.c.sql,this.conn,1,this.c.deal);
    return this.rs;
}
Exc.prototype.close = function() {
    this.rs.Close;
    delete this.rs;
}


function errorCatch(callback){
    try{
        callback();
    }catch(e){
        for(var p in e) Response.Write(""+p+":"+e[p]+"<br>");
    }
}
</script>