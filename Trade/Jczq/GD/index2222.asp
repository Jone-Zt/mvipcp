<!--#include file="../../../Conn.asp"-->
<!DOCTYPE HTML>
<html>
<head>
<meta charset="gb2312">
<title>���ʸ���</title>
<meta name="viewport" content="width=device-width, target-densitydpi=high-dpi, initial-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui" />
<link href="css/newcss.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" href="../../../Css/public.css">
</head>
<body>
<ul id="header">
     <li><a href="/"><i class="iconfont" style="font-size:.8rem;">&#xe6d8;</i>��Ϸ����</a></li>
     <li style="font-size:.8rem;">����</li>
     <li></li>
</ul>
<ul class="data-list" >
  <li>
   
  </li>
</ul>

<!--#include file="../../../dh.asp"-->
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
			var text  ={1:'��һ',2:'�ܶ�',3:'����',4:'����',5:'����',6:'����',7:'����'}; 
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
	
	   <%
			aa=10003
			set address = conn.execute("Select address From KR_User where username=obj.UserName")
			if not rsmb.eof then
			address=address(0)
			end if
			rsmb.close:set rsmb=nothing
			%>
    <span>&nbsp;�����ˣ�<%=address%>{{obj.UserName}}</span>
    <span>ս����{{=ShowZhanJi(obj.zj)}}</span>
    </p>
    <table class="matchbox" cellpadding="0" cellspacing="0">
      <tr>
        <td>����</td>
        <td>�Թ����(Ԫ)</td>
        <td style="border-right:2px solid #d6d6d6">�������(Ԫ)</td>
        <td rowspan="2"><a href="/{{if obj.jctype=="��������"}}Trade/Jczq/View.asp{{else}}trade/jclq/view.htm{{/if}}?id={{obj.Id}}" class="gdbtn">����</a></td>
      </tr>
      <tr>
        <td>{{obj.jctype}}</td>
        <td>{{obj.Num * 2*obj.Mul}}</td>
        <td style="border-right:2px solid #d6d6d6">{{obj.Num*2*obj["gdbs"]}}</td>
      </tr>
	  <!--tr><td colspan="4" style="float:right;clear:both;"> </td></tr-->
     </table>
  </li>
  <br>  
  {{/each}}
 </script>
 <script type="text/html" id="alert-box">
  <div class="mybuy">
   <div class="alert-box">
     <div class="title">��������<span class="iconfont" style="float:right;" onclick="closeDiv()">&#xe620;</span></div>
     <table cellpadding="1" cellspacing="1" class="betBox" border="0">
        <tr>
           <th>����</th>
           <th>����</th>
           <th>��������</th>
        </tr>
        {{=ShowTeamList(data["BuyMemo"])}} 
        <tr>
          <td style=" text-align:right">���ط�ʽ</td>
          <td colspan="2">{{=showPass(data["Play"])}}</td>
        </tr>
        <tr>
          <td style=" text-align:right">��������</td>
          <td colspan="2"><input type="number" name="Mul" value="1" class="beishu">��</td>
        </tr>
        <tr>
         
          <td colspan="3"><button class="btn-gd">ȷ�ϸ���</button></td>
        </tr>
     </table>
   </div>
</div>
</script>
 