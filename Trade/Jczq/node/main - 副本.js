var http = require("http");
var fs = require("fs");
var conn = require("./sqlconn.js").conn;
var cheerio = require("cheerio");
function getHtml(url,callback){
    console.log("->开始抓取数据");
    http.get(url,function(res) {
        var content = "";
        res.on('data', function(data) {
                content += data;
        });


        res.on('timeout',function(){
            console.log("timeout");
        });

        res.on("end",function(){
            callback(content);
        });

    }).on('error', function(e) {
        console.log("采集失败");
    });
}

function getLocalTime(nS) {     
    return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
}
conn({
    server:"localhost",
    user:"vipcp",
    database:"VipLottery",
    password:"s8U6d3n6",
    options: { 
        encrypt: false
    }   
        },function(err,conn){
    var get = function(callback){
        getHtml("http://caipiao.163.com/t/jczqmixpAllWap.html",function(data){
            var body = data;
            var data = JSON.parse(body).matchList;
            var request = conn.request();
            var inarr = [];
            for(var p in data) inarr.push({
                orderid:p,
                memo:JSON.stringify(data[p]),
                overtime:getLocalTime(data[p].buyEndTime),
                isdg:data[p].singleMixStatus[0] || data[p].singleMixStatus[4],
                team:data[p].hostName+","+data[p].guestName
            });
            var intosql = function(index){
                if(index<inarr.length){
                    request.input('OrderId', inarr[index].orderid);
                    request.input('Memo', inarr[index].memo);
                    request.input('OverTime', inarr[index].overtime);
                    request.input('IsDg', inarr[index].isdg);
                    console.log(inarr[index].isdg);
                    //request.input('Team', inarr[index].team);
                    //request.output('output_parameter');//返回值类型
                    request.execute('Football_List', function(err, recordsets, returnValue) {
                        if(err) console.log(err);
                        console.dir(recordsets);
                        intosql(++index);
                    });
                }
            }
            intosql(0);
            setTimeout(get,5*60000);
        });
    }
    get();
});
