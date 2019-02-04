var JcDetail = {
    getData:function(){
	  var url = window.location.href ;
	  url = url.split('#') ;
	  mui.post(Url.JCDETAIL,{id:url[1]},function(data){
		  data = base64decode(data.ds);
		  data = JSON.parse(data);
		  var html = template('JcList',data);
		  $("#jc-list").html(html);
		  document.title = data.name+'开奖';
		  $("#topnav").find(".title").html(data.name+'开奖');
		  $(".mathc-info").html(data.open);
	  },'json');
	}  
}

window.onload = function(){
   JcDetail.getData();
}

template.helper('Expect',function(str){
    var week  = ['周日','周一','周二','周三','周四','周五','周六'] ;
	var num   = str.substr(-4,1);
	var issue = str.substr(-3,3);
	return week[num]+issue ;
})

template.helper('Time',function(t){
     var tt = t.split(' ');
	 return tt[1] ;
})

template.config("escape", false); 
template.helper('ZqGameResult',function(plan){
  var str = '<dd>暂无开奖结果</dd>' ;
  if( plan == null ) return str;
  var zq =new Array("胜","平","负","胜[让]","平[让]","负[让]","胜胜","胜平","胜负","平胜","平平","平负","负胜","负平","负负","1:0","2:0","2:1","3:0","3:1","3:2","4:0","4:1","4:2","5:0","5:1","5:2","胜其他","0:0","1:1","2:2","3:3","平其他","0:1","0:2","1:2","0:3","1:3","2:3","0:4","1:4","2:4","0:5","1:5","2:5","负其他","0","1","2","3","4","5","6","7+");
  var  strs ='';
  var result = ['胜平负','让球胜平负','半全场','比分','总进球'] ;
  var jisuan = 0 ;
  plan = JSON.parse(plan);
  for( index in plan ){
    strs += '<dd>'+result[jisuan]+'：'+zq[index]+'</dd>';
	jisuan += 1 ; 
  }
  return strs ; 
})

template.helper('LqGameResult',function(plan){
  var str = '<dd>暂无开奖结果</dd>' ;
  if( plan== null ) return str;
  var lq = new Array('主胜', '主负', '让分主胜', '让分主负', '大分', '小分','客胜 1-5','客胜 6-10','客胜 11-15','客胜 16-20','客胜 21-25','客胜 26+','主胜 1-5','主胜 6-10','主胜 11-15','主胜 16-20','主胜 21-25','主胜 26+');
  var result = ['胜平负','大小分','让分胜负','胜分差'] ;
  var jisuan = 0 ;
  plan = JSON.parse(plan);
  for( index in plan ){
    strs += '<dd>'+result[jisuan]+'：'+zq[index]+'</dd>';
	jisuan += 1 ; 
  }
  return strs ; 
})