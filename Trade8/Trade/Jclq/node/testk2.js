//var conn = require('./conn.js');
var fs = require('fs');
var http = require("http");
var $ = require("cheerio");
var iconv = require('iconv-lite');
var mssql = require('mssql');
var NetWork = function(o){
    this.site = {
        url:o.url,
        timec:o.timec
    }
}
NetWork.fn = NetWork.prototype = function(){
    return this;
};
NetWork.fn.start = function(){
    //console.log("start");
    this.load();
}
NetWork.fn.load = function(){
    var _this = this;
    setTimeout(function(){
        _this.loadNext();
    },_this.site.timec*1000);
}

NetWork.prototype.loadNext = function(){
    var _this = this;
    NetWork.get(_this.site.url,function(data,state){
        //console.log(_this.site.url+"延时:"+state.loadTime+"毫秒");
        var datat=JSON.parse(data);
		var data = datat;
		if(data.length>0){
			data.sort(function(a,b){return a.orderid-b.orderid});
			M.load(data,function(data,back){
				var sqlStr = M.swapInto(data,'KR_BasketBall_Code');
				var request = M.conn.request();
				request.query("SELECT count(1) as count FROM KR_BasketBall_Code WHERE OrderId='"+data.orderid+"'",function(err,rec){
					if(!err){
						if(rec[0]["count"]==0){
							M.insertInto(sqlStr+" SELECT @@IDENTITY as newid FROM KR_BasketBall_Code",function(rec){
								//NetWork.get("http://127.0.0.1:85/Trade/Jclq/Prize/lq.asp?id="+rec[0]["newid"],function(){//路径----派奖
									back();
								//});
							});
						}else{
							back();
						}
					}
				});
			});
			M.on('over',function(num){
				console.log("加载完成，总共"+num+"条数据被加载！");
				setTimeout(function(){_this.start()},60000*10);
			});
		}
		else{
			console.log("没有数据");
			setTimeout(function(){_this.start()},60000*10);
		}
        //_this.load();
    });
}
NetWork.get = function(url,callback){
    //console.log(url);
    var backState = {
        startTime:new Date().getTime()
    }
    var _this = this;
    var startTime = new Date().getTime();
    var req = http.get(url,function(res) {
        var content = "";
        res.on('data', function(data) {
                content += data;
        });

        res.on('timeout',function(){
            console.log("timeout");
        });

        res.on("end",function(){
            clearTimeout(request_timer);
            var endTime = new Date().getTime();
            backState.endTime = endTime;
            backState.loadTime = backState.endTime - backState.startTime;

/*console.log(content);
setTimeout(function(){
fs.writeFile("a.asp", content, function(err) {});
},1000);*/

            callback(content,backState);
        });

    }).on('error', function(e) {
        console.log("访问出错(超时)");
    });

    var request_timer = setTimeout(function() {
        req.abort();
    }, 5000);

    req.on("abort", function() {
        console.log("abort close");
    });
}


M = {
    a:function(data){
        for(var p in data) data[p] = data[p].join("~");
        return data.join("|").replace(/消/g,"");
    },
    mssqlConn:{
        server:"localhost",
        user:"vipcp",
        database:"vipcp",
        password:"s4P8x2k5@!45CdXTs",
        options: {
            encrypt: false
        }
    },
    connMssql:function(){
        var _this = this;
        var conn = new mssql.Connection(this.mssqlConn, function(err) {
            _this.conn = conn;
            if(err){
                //_this.isRun = 0;
                console.log("请重新启动[MSSQL连接失败]"+err);
            }else{
                console.log("提示:数据库已连接成功");
                //callback();
            }
        });
        conn.on("end",function(){
                console.log("提示:数据库连接完成[断开]");
        });
        conn.on("error",function(err){
                //_this.isRun = 0;
                //console.log("提示:数据库连接错误,15秒后重连");
                console.log("请重新启动[MSSQL连接失败]");
        });
    },
    swapInto:function(arr,cre){
    //      console.log("swapInto");

        /*
            SQL语句转换
        */
        var sql1 = "";
        var sql2 = "";
        for(var p in arr) {
            sql1 += "["+p+"],";
            sql2 += "'"+arr[p]+"',";
        }
        sql1 = sql1.substring(0,sql1.length-1);
        sql2 = sql2.substring(0,sql2.length-1);
        sql = "INSERT INTO "+cre+" ("+sql1+") VALUES ("+sql2+")";
        return sql;
    },
    insertInto:function(sql,callback){
        var request = this.conn.request();
        request.query(sql,function(err,rec){
            if(err){
                callback();
            }else{
                //request.query("SELECT @@IDENTITY FROM KR_Football_Code")[0]
                //NetWork.get("/NewFootball/p1.asp?id=",function(){
                    callback(rec);
                //});
            }
        });
        request.on('error',function(err){
            console.log("insertInto_error");
        });
    },
    load:function(data,callback){
        var o = {
            data:data,
            load:data.length,
            loaded:0,
            index:0
        }
        var l = {
            load:function(){
                var data = o.data[o.loaded];
                callback(data,this.loadNext)
            },
            loadNext:function(){
                o.loaded++;
                if(o.loaded < o.load){
                    l.load();
                }else{
                    M.over(o.loaded);
                }
            }
        }
        l.load(l.loadNext);
    },
    on:function(func,call2){
        this[func] = function(num){
            call2(num);
        };
    }
}
M.connMssql();
var N = new NetWork({url:'http://www.vipcp.cn/trade/jclq/kj/310.asp',timec:1});
N.start();