//var conn = require('./conn.js');
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
    console.log("start");
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
        console.log(_this.site.url+"延时:"+state.loadTime+"毫秒");
        var body = $(data);
        var cl = body.find('#tab_result tr');

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
        var week = {'&#x4E00;':'1','&#x4E8C;':'2','&#x4E09;':'3','&#x56DB;':'4','&#x4E94;':'5','&#x516D;':'6','&#x65E5;':'7'};
        var spfbf = [
            {"胜":"1","平":"0","负":"-1"},
            {"胜胜":"1:1","胜平":"1:0","胜负":"1:-1","平胜":"0:1","平平":"0:0","平负":"0:-1","负胜":"-1:1","负平":"-1:0","负负":"-1:-1"},
            {"胜其他":"1","平其他":"0","负其他":"-1"}
        ]
        var data = [];
        cl.each(function(k){
            if(k>1){
                var json = {};
                var e = $(this);
                var td = e.find('td');
                var qihao = td.eq(0).html();
                for(var p in week) qihao = qihao.replace(p,week[p]);
                qihao = qihao.substr(-4);
                var te = td.eq(3).find('a').text();
                te = te.replace(/\s+/g,"");
                var te2 = te.match(/^(.+?)\((.+?)\)VS(.+)$/);
                json.orderid = e.attr('gamedate')+qihao;
                json.team = [te2[1],te2[3]].join(',');
                json.cup = e.find('a').eq(0).text().replace(/\s+/g,"");
                json.time = td.eq(2).text();
                json.lost = te2[2];
                json.plan = [
                    [spfbf[0][td.eq(6).text()],td.eq(7).text()],
                    [spfbf[0][td.eq(8).text()],td.eq(9).text()],
                    [spfbf[1][td.eq(14).text()],td.eq(15).text()],
                    [td.eq(12).text()=='胜其他' || td.eq(12).text()=='平其他' || td.eq(12).text()=='负其他' ? spfbf[2][td.eq(12).text()] : td.eq(12).text(),td.eq(13).text()],
                    [td.eq(10).text(),td.eq(11).text()],
                ];
                json.plan = M.a(json.plan);
                json.state = 0;
                var sqlStr = M.swapInto(json,'KR_Football_Code');
                // M.insertInto(sqlStr,function(){
                //console.log(td.eq(6).html());
                // });
                data.push(json);
            }
        });
        data.sort(function(a,b){return a.orderid-b.orderid});
        M.load(data,function(data,back){
            var sqlStr = M.swapInto(data,'KR_Football_Code');
            var request = M.conn.request();
            request.query("SELECT count(1) as count FROM KR_Football_Code WHERE OrderId='"+data.orderid+"'",function(err,rec){
                if(!err){
                    if(rec[0]["count"]==0){
                        M.insertInto(sqlStr+" SELECT @@IDENTITY as newid FROM KR_Football_Code",function(rec){
                            NetWork.get("http://127.0.0.1:85/Trade/Jczq/p1.asp?id="+rec[0]["newid"],function(){//路径----派奖
                                console.log("../p1.asp?id="+rec[0]["newid"]);
                                back();
                            });
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
        });

        res.on("end",function(){
            clearTimeout(request_timer);
            var endTime = new Date().getTime();
            backState.endTime = endTime;
            backState.loadTime = backState.endTime - backState.startTime;
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
        database:"VipLottery",
        password:"s8U6d3n6",
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
                console.log("提示:数据库已连接连接");
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
var N = new NetWork({url:'http://zq.jc258.cn/jingcai/matchresult/football/',timec:1});
N.start();