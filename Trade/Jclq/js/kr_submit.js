var football_submit = function(map,game){
	 var orderid = JSON.parse(window.localStorage.getItem(game));
	 var data    = JSON.parse(window.localStorage.getItem(map));
	 var hm      = document.querySelector("#sponsor");
	 var block   = hm.getAttribute("class");
	 var postdata = {};
	 postdata['num']  = document.querySelector("#ownCount").innerHTML; //注数
	 postdata['mul']  = document.querySelector("#ownMul").value;       //倍数
	 var ISHM         = block.indexOf('one') >=0 ?　0 : 1 ; // 0  自购   1 合买
	 postdata['type'] = getpasstype() ;
	 postdata['ishm'] = 0 ;
	 postdata['tc']   = 0 ;
	 postdata["rg"]   = 0
	 postdata["bd"]   = 0 ; 
	 postdata["gdbs"] = 0 ;
	 var kgd = document.getElementsByName("gd");
								var ishmt=0;
								for(k in kgd){
									if(kgd[k].checked) ishmt=1;
								}
	if ( ISHM ){
	    postdata['tc']     = document.querySelector("#royalty").value;
		postdata['show']   = document.querySelector("#ispublic").value;
		postdata['copysheet']  = ishmt;
		postdata["gdbs"]   =  document.querySelector("#gdbs").value;
	 }
	 dada   =   formatbetFormat(data);
	 postdata["betcontent"] = dada["code"];
	 postdata["sp"]         = dada["sp"]  ;
	 postdata["deadtime"]   = FormatDate(null,"Y")+"-"+data[orderid[0]]["endtime"];
	 postdata["dan"]        = dada["dan"];
	 postdata["team"]       = dada["team"]; //客队
	 var dd  = JSON.stringify(postdata);
	 console.log(dd);
	 window.$.post("/Trade/jclq/data/buy.asp?"+new Date().getTime(),{ pt:dd,order:orderid.join("|").toString()},function(data){
	    confirm(data.msg);
		if(data.code == 1 ){
		  for( var t= 0 ; t < localStorage.length ; t++ ){
			  var index= window.localStorage.key(t);
			  if(index.indexOf("storage_130043")>=0){
		        window.localStorage.removeItem(index);
			  }
		  }
		}
		window.history.back();
	 },'json');
}

var getpasstype = function(){
     var list = document.querySelector("#mypass").innerHTML;
	 return list.replace(/串/g,"x").replace(/单关/g,"1x1"); 
}
var formatbetFormat = function(data){
   var betdata = [];
   var spdata  = []; 
   var dan     = [];
   var team    = [];
   for( var index in data ){
      var code = formatcode(data[index]);
	  betdata.push(index +"|"+ code);
	  spdata.push(index+"|"+data[index]["sp"]);
	  var d  = data[index]["dan"] ?  1 : 0 ;
	  dan.push(d);
	  team.push({"homeTeam":escape(data[index]['homeTeam']),'awayTeam':escape(data[index]['awayTeam'])});
   }
   return {"code":betdata,"sp":spdata,"dan":dan,'team':team};
}

var formatcode = function(arr){
	var play = getplayway();
	console.log(play);
	if ( play == "zhhcart" ){
       var aa = arr["indexs"].join(",");
	   console.log(aa);
	   aa   = aa.replace(/sfc_/g,'a').replace(/rsf_/g,'b').replace(/dxf_/g,'c').replace(/sfd_/,'d');
	   return aa;
	}else{
		var bab = [] ;
	   for( var ts = 0 ; ts < arr["indexs"].length ; ts++ ){
	      bab.push(play+arr["indexs"][ts]); 
	   }
	   return bab.join(",")
	}
	
}
var getplayway = function(){
   var href   =  window.location.href ;
   href       =  href.split("/");
   var index =   href[href.length-1].replace('.htm','');
   var playtext = {"rfsfcart":"b","sfcart":"a","dxfcart":"c","sfdcart":"d"}
   if ( index =="zhhcart" ){
       return index;
   }else{
      return playtext[index];
   } 
}

var FormatDate=function(datastr,str){
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
    }
$(function(){
	var err=0;
	$.get("data/gd.asp",function(data){
			err = $(data).find("err").attr("type");
		});
	setTimeout(function(){
		if(err==0){
			$("#mecoop").hide();
		}
	},500);
})