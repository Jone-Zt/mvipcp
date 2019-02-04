var dbc = require('./config.js').Dbconfig;
var fs = require('fs');
var http = require("http");
var $ = require("cheerio");
var iconv = require('iconv-lite');
var mssql = require('mssql');
var datapjcc=[];
var jspj="";
var dqpjcc="";
var dqpjcs=0;
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
		data=unescape(data);
        var datat=JSON.parse(data);
		var data = datat;
		if(data.length>0){
			data.sort(function(a,b){return a.orderId-b.orderId});
			M.load(data,function(data,back){
				datapjcc.push(data.orderId);
				var sqlStr = M.swapInto(data,'KR_BasketBall_Code');
				var request = M.conn.request();
				request.query("SELECT count(1) as count FROM KR_BasketBall_Code WHERE OrderId='"+data.orderId+"'",function(err,rec){
					if(!err){
						if(rec[0]["count"]==0){
							M.insertInto(sqlStr,function(){});
						}
						back();
					}
				});
			});
			M.on('over',function(num){
				console.log("加载完成，总共"+num+"条数据被加载！");
				jspj = fs.readFileSync('pj.js','utf-8');
				var datapjccl=datapjcc.length;
				if(jspj!=""){
					if(datapjccl>0){
						for(var iv=0;iv<datapjccl;iv++){
							if((","+jspj+",").indexOf(","+datapjcc[iv]+",")!=-1){
								datapjcc.splice(iv,1);
								iv--;
								datapjccl--;
							}
						}
					}
				}
				datapjcclt=datapjcc.length;
				if(jspj!="" && datapjcclt>0) jspj=jspj+",";
				if(datapjcclt>0) jspj=jspj+datapjcc.join(",");
				fs.writeFile("pj.js", jspj, function(err) {});
				datapjcc=jspj.split(",");
				datapjcc.sort(function(a,b){return a-b});
				var pjl=datapjcc.length;
				NetWork.pj(datapjcc,function(cb){});
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
NetWork.pj = function(arr,callback){
	var arrl=arr.length;
	if(arrl>0){
		var dqcc=arr[0];
		if(dqpjcc!=dqcc){
			dqpjcs=0;
			dqpjcc=dqcc;
		}
		dqpjcs++;
		if(dqpjcs>4){datapjcc.splice(0,1);}
		if(datapjcc.length>0){
			dqcc=datapjcc[0];
			NetWork.get("http://127.0.0.1:85/Trade/Jclq/Prize/lqzd.asp?id="+dqcc,function(datapj,statepj){//路径----派奖
				if(datapj.indexOf("success")!=-1){
					jspj=jspj.replace(dqcc,"");
					jspj=jspj.replace(",,",",");
					if(jspj.substr(0,1)==",") jspj=jspj.substr(1,jspj.length-1);
					if(jspj.substr(-1)==",") jspj=jspj.substr(0,jspj.length-1);
					var datapjccindex=datapjcc.indexOf(dqcc);
					datapjcc.splice(datapjccindex,1);
					fs.writeFile("pj.js", jspj, function(err) {});
				}
				else{
					/*var urltest = datapj+"\n\n"+"http://127.0.0.1:85/Trade/jczqPrize/pzd.asp?id="+dqcc+"=====>time:"+FormatDateStr(null,'Y-m-d H:i:s')+"\n\n\n\n";
					fs.appendFile('./log.txt',urltest, function () {
                    });*/
					
					var gett=new Date().getTime();
					var urltest = datapj+"\n\n"+"http://127.0.0.1:85/Trade/jczqPrize/pzd.asp?id="+dqcc+"=====>time:"+gett+"\n\n\n\n";
					fs.appendFile('./log.txt',urltest, function () {
                    });
					fs.writeFile(gett+".txt", datapj, function(err) {});
					
					if(statepj.loadTime>90000){dqpjcs=5;datapjcc.splice(0,1);}
				}
				callback(NetWork.pj(datapjcc,function(cb){}));
			});
		}
		else{
			console.log("派奖完成");
			fs.writeFile("pj.js", jspj, function(err) {});
		}
	}
	else{
		console.log("派奖完成");
	}
}
NetWork.get = function(url,callback){
    console.log(url);
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
			if(url.indexOf("vipcp")==-1) NetWork.pj(datapjcc,function(cb){});
        });

        res.on("end",function(){
            //clearTimeout(request_timer);
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
		if(url.indexOf("vipcp")==-1) NetWork.pj(datapjcc,function(cb){});
    });

    /*var request_timer = setTimeout(function() {
        req.abort();
    }, 5000);*/

    req.on("abort", function() {
        console.log("abort close");
		if(url.indexOf("vipcp")==-1) NetWork.pj(datapjcc,function(cb){});
    });
}


M = {
    a:function(data){
        for(var p in data) data[p] = data[p].join("~");
        return data.join("|").replace(/消/g,"");
    },
    mssqlConn:{
        server:dbc['host'],
        user:dbc['user'],
        database:dbc['db'],
        password:dbc['pwd'],
        options: {
            encrypt: false
        },
	    port:dbc['port']
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
function FormatDateStr(data,str){
   var d = new Date(data);
   var temm = {
       "Y" : d.getFullYear(),
	   "m" : (d.getMonth()+1) > 9 ? d.getMonth()+1 : "0"+(d.getMonth()+1),
	   "d" : d.getDate() > 9 ? d.getDate():"0"+d.getDate(),
	   "H" : d.getHours()> 9 ? d.getHours() : "0"+d.getHours(),
	   "i" : d.getMinutes() > 9 ?　d.getMinutes(): "0"+d.getMinutes(),
	   "s" : d.getSeconds() > 9 ?  d.getSeconds() : "0"+d.getSeconds() 
   }
   for( var indexs in temm ){
     str = str.replace(indexs,temm[indexs]);
   }
   return str ;
}
M.connMssql();
var N = new NetWork({url:'http://soft.kurei.cn/zuqiu/jczqkj/jclq.php',timec:1});
N.start();