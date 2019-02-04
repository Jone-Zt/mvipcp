var http = require("http");
var conn = require('./Db.js');
var fs   = require("fs");
var iconv = require('iconv-lite');
function NBA(){
  this.Url = [
     'm.cp.360.cn/jclq/zhhapi',
	 'm.cp.360.cn/jclq/rfsfapi',
	 'm.cp.360.cn/jclq/sfapi',
	 'm.cp.360.cn/jclq/dxfapi',
	 'm.cp.360.cn/jclq/sfdapi',
	 /*'http://m.cp.360.cn/jclq/dgsfhhapi', //单关
	 'http://m.cp.360.cn/jclq/dgsfapi',
	 'http://m.cp.360.cn/jclq/dgrfsfapi',
	 'http://m.cp.360.cn/jclq/dgdxfapi',
	 'http://m.cp.360.cn/jclq/dgsfdapi'*/
  ];
  this.count =  0 ;
  this.next  = 600000;
  this.Type  = ['hh','rfsf','sf','dxf','sfc'/*,'dghh','dgsf','dgrfsf','dgdxf','dgsfc'*/];  
}
NBA.prototype={
	GetHttpData:function(callback){
	   var that     = this ;	
	   var IndexUrl = that.count ;
	   var UrlString= that.Url[IndexUrl];
	   console.log('http://'+that.Url[IndexUrl]+'?'+(new Date().getTime()));
	   var req = http.get('http://'+that.Url[IndexUrl]+'?'+(new Date().getTime()),function(res){
		    var datastr = '';
			res.on('data',function(data){
				datastr += data ;
			})
			res.on('end',function(){
				var ddd= iconv.encode(datastr,'utf-8');
				var name = UrlString.split("/");
			    fs.writeFileSync('../data/'+name[2]+'.asp',ddd);
			    callback(datastr);	
			})
			req.on("error",function(){
			    console.log("采集出错，2秒后重新开启采集！！！！");
			})
			req.on("timeout",function(){
			    console.log("采集超时，2秒后重新开启采集！！！！");
			})
	   })
       var clearTime = setTimeout(function(){
	      req.abort();
		  /*重新开启采集  开始*/

		  /*重新开启采集  结束*/
	  },2000);	   
	},
	FormatDate:function(datastr,str){
	 var d = datastr == null ? new Date() : new Date(datastr);
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
    },
	inToDB:function(data){
	   var sql = "if exists(select orderid from Kr_BaseketBall_list where orderid='"+data['orderid']+"' and type='"+data['type']+"')delete from Kr_BaseketBall_list where orderid='"+data['orderid']+"' and type='"+data['type']+"';";
       sql    += "insert into Kr_BaseketBall_list(type,orderid,matchlist,addtime,EndBuyTime)values('"+data['type']+"','"+data['orderid']+"','"+data['matchList']+"','"+data['addTime']+"','"+data['EndBuyTime']+"')";
	   conn.sql(sql,function(err,rec){
	   });	   
	},
	getCode:function(){
		var me = this ;
		me.GetHttpData(function(data){
			if(data =='[]'){ console.log(data);return;}
		    data = JSON.parse(data);
			var newdata = data['battle'];
			for( var index in newdata ){
               for( var t = 0 ; t < newdata[index].length ; t++ ){
				   var dbdata = {};
				   dbdata['orderid'] = index.toString()+newdata[index][t]['itemId'];
				   dbdata['type']    = me.Type[me.count];
				   dbdata['addTime'] = me.FormatDate(null,'Y-m-d H:i:s');
				   var years         = me.FormatDate(null,'Y');
				   dbdata['EndBuyTime']= years+"-"+newdata[index][t]['endTime'];
				   dbdata['matchList'] = JSON.stringify(newdata[index][t]);
				   me.inToDB(dbdata);  
			   }		   
			}
		})
		me.count++;
		if( me.count == me.Url.length ){
			me.count = 0 ;  
			return ;
		} 
		setTimeout(function(){me.getCode()},5000);
	},
	RUN:function(){
		var that = this ;
		that.getCode();
	    setTimeout(function(){that.RUN()},that.next);
	}
}
var NB = new NBA();
NB.RUN();

