var host="http://"+document.domain+"/";

var Url={
	start:0, //默认彩种ID
    init:host+"m.php/Ssc/Init",
	cp_init : host +"m.php/Index/cp_index",
	index_ad: host +"m.php/Index/HuanDen", 
	ssc_tobuy: host+"m.php/LtToBuy/tobuy",
	HFPASSTIMEURL: host+"m.php/Issue/getExpect",
	LoginUrl: host+"m.php/Login/Index",/*用户登录*/
	RegCode: host+"m.php/Sms/reg", /*获取注册验证码*/
	RegUrl : host+"m.php/Reg/into",/*用户注册*/
	PassMsg: host+"m.php/Sms/getPasstime",
	FindPwd_one : host+"m.php/Login/find_one",/*找回密码第一步*/
	FindPwd_two : host+"m.php/Login/find_two",/*找回密码第二步*/
	Miss_url    : host+"m.php/Miss/index" , /*遗漏获取地址*/
	OPEN_Code   : host+"m.php/Miss/open",
	USER_CENTER : host+ "m.php/User/index" ,/*会员中心*/
	VERIFY_CODE : host+"m.php/Sms/BindCellphone",/*绑定手机的验证码*/
	GETNEWOPEN  : host+"m.php/open/index" ,
	DIPIN_CODE  : host+"m.php/open/getNewOpen" ,
	NEW_OPEN_URL: host+'m.php/open/ltName',
	Histroy_OPEN : host+'m.php/open/Histroy',
	NEWS_LIST   : host+'m.php/News/index', 
	JCDETAIL   : host+'m.php/open/JcDetail',
	NEWDetail  : host+'m.php/News/Detail',
	HeMaiURL   : host+'m.php/HeMai/Index',
	HEMAIDETAIL: host+'m.php/HeMai/Detail',
	HMBUY      : host+ 'm.php/HeMai/Buy',
	PayImage   : host+"m.php/User/getPayImage",
	QuKaun_Url : host+"m.php/Sms/getMoney" ,
	UserInfo   : host+"m.php/User/UserInfo",
	UserSave   : host+"m.php/User/SaveUser",
	EditorUrl  : host+"m.php/Sms/EditorUrl",
	SavePwdURL : host+"m.php/User/EditorPwd",
	LoginState : host+"m.php/Login/LoginState",
	WEBSET     : host+"m.php/Index/WebSet" , 
	TrendIndex : host+"m.php/Trend/Index" ,
	TrendDetail: host+"m.php/Trend/Detail",
	InitCPSET  : host+"m.php/Index/LoadPlay",
	TodayOPEN  : host+"m.php/NewTrend/index",
	WINLISTSHOW: host+"m.php/Index/getWinList",
	WXBindUrl  : host+"m.php/wx/Bind",
	PASSTime:600,
	ISSUE_IME:'2016',
	CP_NAME  :'酷睿科技',
	WEBNAME  :'酷睿科技',
	Count    :30,
	CP_NAME_HM :1 ,
}

var LTWANFA={
	  'pk10' :{
	    "9101" : '猜第一名',
		"9201" : '猜前二名',
		"9202" : '精准前二',
		"9302" : '精准前三',
		"9301" : '猜前三名',
		"9401" : '猜前四名',
		"9402" : '精准前四',
		"9501" : '猜前五名',
		"9601" : '猜前六名',
		"9701" : '猜前七名',
		"9801" : '猜前八名',
		"9901" : '猜前九名',
		"9909" : '猜前十名'     
	  },
	  'PKS' :{
	     "9101" : '1011',
		 "9201" : '1021',
		 "9202" : '1022',
		 "9302" : '1032',
		 "9301" : '1031',
		 "9401" : '1041',
		 "9402" : '1042',
		 "9501" : '1051',
		 "9601" : '1061',
		 "9701" : '1071',
		 "9801" : '1081',
		 "9901" : '1091',
		 "9909" : '1001'    
	  }
	   
}
   
var LTINFO={
	'pk10' :{
	    "9101" : '猜第一名',
		"9201" : '猜前二名',
		"9202" : '精准前二',
		"9302" : '精准前三',
		"9301" : '猜前三名',
		"9401" : '猜前四名',
		"9402" : '精准前四',
		"9501" : '猜前五名',
		"9601" : '猜前六名',
		"9701" : '猜前七名',
		"9801" : '猜前八名',
		"9901" : '猜前九名',
		"9909" : '猜前十名'     
	} 
}



var SmallLogo = {
    1 : './Public/images/svg/ssq.svg'  ,
    2 : './Public/images/svg/fc3d.svg'   , 
    3 : './Public/images/svg/qlc.svg'    ,
    81: './Public/images/svg/pks.svg'    ,
    5 : './Public/images/svg/dlt.svg'  ,
    6 : './Public/images/svg/pls.svg'  ,
    7 : './Public/images/svg/plw.svg'  ,
    8 : './Public/images/svg/qxc.svg'    ,
    12 : './Public/images/svg/jc.svg'    ,
    13: './Public/images/svg/ssc.svg'    ,
    19: './Public/images/svg/ssc.svg'    ,
    20: './Public/images/svg/ssc.svg'    ,
    22: './Public/images/svg/ssc.svg'    ,
    32: './Public/images/svg/ssc.svg'    ,
    35: './Public/images/svg/syxw.svg',
    82: './Public/images/svg/ssc.svg'    ,
    33: './Public/images/svg/syxw.svg',
    36: './Public/images/svg/syxw.svg',
    38: './Public/images/svg/syxw.svg',
    41: './Public/images/svg/syxw.svg',
    42: './Public/images/svg/syxw.svg',
    45: './Public/images/svg/syxw.svg',
    84: './Public/images/svg/syxw.svg',
    46: './Public/images/svg/syxw.svg',
    48: './Public/images/svg/ks.svg'   ,
    49: './Public/images/svg/ks.svg'   , 
    50: './Public/images/svg/ks.svg'   ,
    52: './Public/images/svg/ks.svg'   ,
    53: './Public/images/svg/ks.svg'   ,
    54: './Public/images/svg/ks.svg'   ,
    55: './Public/images/svg/ks.svg'   ,
    56: './Public/images/svg/ks.svg'   , 
}

var  BigLogo  =  {
    1 : './Public/images/svg/ssq.svg'  ,
    2 : './Public/images/svg/fc3d.svg'   , 
    3 : './Public/images/svg/qlc.svg'    ,
    81: './Public/images/svg/pks.svg'    ,
    5 : './Public/images/svg/dlt.svg'  ,
    6 : './Public/images/svg/pls.svg'  ,
    7 : './Public/images/svg/plw.svg'  ,
    12 : './Public/images/svg/jc.svg'    ,
    8 : './Public/images/svg/qxc.svg'    ,
    13: './Public/images/svg/ssc.svg'    ,
    19: './Public/images/svg/ssc.svg'    ,
    20: './Public/images/svg/ssc.svg'    ,
    22: './Public/images/svg/ssc.svg'    ,
    32: './Public/images/svg/ssc.svg'    ,
    82: './Public/images/svg/ssc.svg'    ,
    35: './Public/images/svg/syxw.svg',
    33: './Public/images/svg/syxw.svg',
    36: './Public/images/svg/syxw.svg',
    38: './Public/images/svg/syxw.svg',
    41: './Public/images/svg/syxw.svg',
    42: './Public/images/svg/syxw.svg',
    45: './Public/images/svg/syxw.svg',
    46: './Public/images/svg/syxw.svg',
    84: './Public/images/svg/syxw.svg',
    48: './Public/images/svg/ks.svg'   ,
    49: './Public/images/svg/ks.svg'   , 
    50: './Public/images/svg/ks.svg'   ,
    52: './Public/images/svg/ks.svg'   ,
    53: './Public/images/svg/ks.svg'   ,
    54: './Public/images/svg/ks.svg'   ,
    55: './Public/images/svg/ks.svg'   ,
    56: './Public/images/svg/ks.svg'   , 
    
}
function  getData(){
   mui.post(Url.HFPASSTIMEURL,{ltid:Url.start},function(data){
       Url.PASSTime  =  data.pass;
	   Url.ISSUE_IME =  data.expect;
	   Url.CP_NAME   =  data.name ;
	   Url.CP_NAME_HM= data.hmtc  ; 
   },'json')
}

function TimePass(){
   if(Url.Count==1){
	  Url.Count=30;
   }
   if(Url.PASSTime<1) {
      
   }
   if(Url.PASSTime==1){
	  mui.toast(Url.CP_NAME+"第"+Url.ISSUE_IME+"期截止销售",'系统提示');
	  getData(); 
   }
   var DD       =   new Date(Url.PASSTime * 1000);
   var day      =   parseInt(Url.PASSTime/(24*3600));
   var huo      =   parseInt(Url.PASSTime % (3600 *24) / 3600);
   var minute   =   DD.getMinutes();
   var secound  =   DD.getSeconds();
   minute       =   minute < 10 ? "0"+minute : minute;
   secound      =   secound < 10 ? "0"+secound : secound; 
   Url.Count-=1;
   Url.PASSTime-=1;
   var time={d:day,h:huo,m:minute,s:secound}
   if(Url.PASSTime<0){
      time={m:-1,s:-1};
	  setTimeout(function(){
	    getData();
	  },1000);
   }
   return time;
}

function echo(obj){
   var str=TimePass();
  try{
   if(typeof(obj.time)!=undefined){  
     var tstr=str.d+"天"+str.h+"时"+str.m+"分"+str.s+"秒";
	 if(str.d==0 && str.h==0){
	    tstr = str.m+"分"+str.s+"秒";
	 }
	 if(Number(str.m < 0)){
	    var tstr="预售中";
		str=TimePass();
	 } 
	 $(obj.time).html(tstr);
   }
   if(typeof(obj.expet)!=undefined){
     $(obj.expect).html(Url.ISSUE_IME); 
   }
   }catch(e){}
   setTimeout(function(){echo(obj);},1000);
}

