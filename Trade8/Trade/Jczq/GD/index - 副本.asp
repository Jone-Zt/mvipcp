<!--#include file="../../../Conn.asp"-->
<!DOCTYPE HTML>
<html>
<head>
<meta charset="gb2312">
<title>竞彩跟单</title>
<meta name="viewport" content="width=device-width, target-densitydpi=high-dpi, initial-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui" />
<link href="css/newcss.css" rel="stylesheet" type="text/css">
</head>
<body>
<ul id="header">
     <li><a href="/"><i class="iconfont" style="font-size:.8rem;">&#xe6d8;</i>游戏大厅</a></li>
     <li>跟单</li>
     <li></li>
</ul>
<ul class="data-list">
  <li>
    <p class="faqiren">
    <span>&nbsp;发起人：发起人</span>
    <span>战绩：</span>
    </p>
    <table class="matchbox" cellpadding="0" cellspacing="0">
      <tr>
        <td>类型</td>
        <td>自购金额</td>
        <td style="border-right:2px solid #d6d6d6">单倍金额</td>
        <td rowspan="2"><a href="javascript:" class="gdbtn">跟单</a></td>
      </tr>
      <tr>
        <td>竞彩足球</td>
        <td>800彩豆</td>
        <td style="border-right:2px solid #d6d6d6">10倍</td>
      </tr>  
     </table>
  </li>
</ul>
</body>
</html>
<script type="text/javascript" src="../../../JS/Jquery-1.7.2.Min.js"></script>
<script type="text/javascript" src="js/template.js"></script>
<script>       
        (function (doc, win) {   
            var docEl = doc.documentElement,   
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',   
            recalc = function () {   
            var clientWidth = docEl.clientWidth;   
            if (!clientWidth) return;   
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';   
        };   
        if (!doc.addEventListener) return;   
        win.addEventListener(resizeEvt, recalc, false);   
        doc.addEventListener('DOMContentLoaded', recalc, false);   
        })(document, window);
		$(function(){
		  var pages = 1 ; 	
		  $.post("getjczqdata.asp?"+new Date().getTime(),{act:'getdata',p:pages},function(data){
		      var hm   = {data:data};
			  var html =  template("DataList",hm);
			  $(".data-list").html(html);
		  },'json');
		}) 
		template.helper("ShowZhanJi",function(record){
		    var am = record,ar = Math.floor(am / 10000000),val_="";
			if (ar > 0 ){
				val_ += "<img src='../../../Images/y4.gif' />",val_ += "<img src='../../../Images/s" + (ar>9?"9":ar) + ".png' />",am = am - 10000000 * ar;
			}	
			ar = Math.floor(am / 1000000)
			if (ar > 0) {
				val_ += "<img src='../../../Images/y3.gif' />",val_ += "<img src='../../../Images/s" + (ar>9?"9":ar) + ".png' />",am = am - 1000000 * ar;
			}	
			ar = Math.floor(am / 100000)
			if (ar > 0){ 
				val_ += "<img src='../../../Images/y2.gif' />",val_ += "<img src='../../../Images/s" + (ar>9?"9":ar) + ".png' />",am = am - 100000 * ar;
			}	
			ar = Math.floor(am / 10000)
			if (ar > 0){
				val_ += "<img src='../../../Images/y1.gif' />",val_ += "<img src='../../../Images/s" + (ar>9?"9":ar) + ".png' />",am = am - 10000 * ar;
			}	
			return val_;	
		})
		template.helper("ShowTeamList",function(datastr,t1,t2){
		    var dlist = datastr.split("|");
			var text  ={1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六',7:'周日'}; 
			var str   = "" ;
			for( var i= 1;i < dlist.length ; i++ ){
			   var tt = dlist[i].split("~");
			   var aa = tt(0).substr(-4);
			   var index = aa.substr(0,1);
			   str += "<tr><td>"+text[index]+aa.substr(-3,1)+"</td>";
			   str +="<td>"+t1+"vs"+t2+"</td>";
			   
			}
		})
		function showDanDetail(id){
		   $.post("getjczqdata.asp?"+new Date().getTime(),{id:id,act:'getDetail'},function(data){
		     var html = template("alert-box",{});
			 $('body').append(html);
		   },'json')
		}
		function closeDiv(){
		  var a = document.querySelector(".mybuy");
		  console.log(a);
		  a.remove();
		}
 </script>
 <script type="text/html" id="DataList">
    {{each data["data"] as obj}}
	<li>
    <p class="faqiren">
    <span>&nbsp;发起人：{{obj.UserName}}</span>
    <span>战绩：{{=ShowZhanJi(obj.zj)}}</span>
    </p>
    <table class="matchbox" cellpadding="0" cellspacing="0">
      <tr>
        <td>类型</td>
        <td>自购金额</td>
        <td style="border-right:2px solid #d6d6d6">单倍金额</td>
        <td rowspan="2"><a href="/Trade/Jczq/View.asp?id={{obj.Id}}" class="gdbtn">跟单</a></td>
      </tr>
      <tr>
        <td>竞彩足球</td>
        <td>{{obj.Num * 2}}</td>
        <td style="border-right:2px solid #d6d6d6">{{obj.Mul}}倍</td>
      </tr>  
     </table>
  </li>
  {{/each}}
 </script>
 <script type="text/html" id="alert-box">
  <div class="mybuy">
   <div class="alert-box">
     <div class="title">跟单详情<span class="iconfont" style="float:right;" onclick="closeDiv()">&#xe620;</span></div>
     <table cellpadding="1" cellspacing="1" class="betBox" border="0">
        <tr>
           <th>场次</th>
           <th>赛事</th>
           <th>方案详情</th>
        </tr>
        {{=ShowTeamList(data["BuyMemo"])}} 
        <tr>
          <td style=" text-align:right">过关方式</td>
          <td colspan="2">{{=showPass(data["Play"])}}</td>
        </tr>
        <tr>
          <td style=" text-align:right">跟单倍数</td>
          <td colspan="2"><input type="number" name="Mul" value="1" class="beishu">倍</td>
        </tr>
        <tr>
         
          <td colspan="3"><button class="btn-gd">确认跟单</button></td>
        </tr>
     </table>
   </div>
</div>
</script>
 