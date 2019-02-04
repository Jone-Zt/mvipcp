//var conn = require('./conn.js');
var fs = require('fs');
var http = require("https");
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
//console.log(data);
        var body = $(data);
        var cl = body.find('#match_list tr');

        var json = {
            orderid:'201601155001',
            team:['A队','B队'],
            cup:'赛事',
            lost:-1,
            time:'01-18 07:00',
            plan:[
                ['-1','2.02'],//spf
                ['1','2.02'],//rqspf
                ['1:1','2.02'],//bqc
                ['3:2','2.02'],//bf
                ['4','2.02']//zjq
            ]
        }
        var data = [];
        cl.each(function(k){
			if(k>=0 && k<cl.length-1){
				var json = {};
				var e=$(this);
				var oid=e.attr('issue')+e.attr('itemid');
				var td=e.find('td');
				
				var teamlq=td.eq(3).text()+","+td.eq(4).text();
				var cuplq=td.eq(1).text();
				
				var sf = td.eq(6).text();
				sf=sf.replace("主胜","a1").replace("主负","a2");
				var sfpl=td.eq(7).text();
				
				var rfsf = td.eq(9).text();
				rfsf=rfsf.replace("主胜","b1").replace("主负","b2");
				var rfsfpl=td.eq(10).text();
				
				var dxf = td.eq(12).text();
				dxf=dxf.replace("大分","c1").replace("小分","c2");
				var dxfpl=td.eq(13).text();
				
				var sfc = td.eq(14).text();
				sfc=sfc.replace("1-5","1").replace("6-10","2").replace("11-15","3").replace("16-20","4").replace("21-25","5").replace("26+","6").replace("主胜","d0").replace("客胜","d1");
				var sfcpl=td.eq(15).text();
				
				json.orderid = oid;
				json.team = teamlq;
				json.cup = cuplq;
				json.plan = sf+"~"+sfpl+"|"+rfsf+"~"+rfsfpl+"|"+dxf+"~"+dxfpl+"|"+sfc+"~"+sfcpl;
				json.state = 0;
				if(json.plan.indexOf("-")==-1){
					var sqlStr = M.swapInto(json,'KR_BasketBall_Code');
					data.push(json);
				}
			}
        });
		
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
                content += iconv.decode(data, 'GBK');
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
var N = new NetWork({url:'https://odds.cp.360.cn/kjnotice/jclq/?r_a='+Date.parse(new Date()),timec:1});
N.start();