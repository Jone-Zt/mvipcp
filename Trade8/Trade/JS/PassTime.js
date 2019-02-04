// JavaScript Document
/*获取游戏截止投注时间及开奖号码*/
function kaijianghao(){
		if (typeof(kaijiang) == "undefined"||typeof(qihaoid) == "undefined") return;
		if(kaijiang=="Dlt"||kaijiang=="Qxc") var kcodes=8;
		else if(kaijiang.indexOf("Ks")!=-1) var kcodes=4;
		else if(kaijiang=="Ssq") var kcodes=8;
		else if(kaijiang=="Sd"||kaijiang=="Pls") var kcodes=7;
		else if(kaijiang=="Qlc") var kcodes=9;
		else var kcodes=6;
		var codes="",codes2="";	
		$.ajax({
			url:"/Trade/Include/KR.Ajax.asp",
			type:"POST",
			dataType:"xml",
			data:{LottType:kaijiang},
				success:function(data)
				{
					var err = $(data).find("err");
					var err1 = $(data).find("row");
					if($(err).attr("type")=="1")
					{
						
						var tpanduan1=true;
						for(var i=0;i<err1.length;i++)
						{
							var panduan1=1,housan="",sth1="";
								if(kaijiang.indexOf("Ks")!=-1)
								{						
		if ($(err1[i]).attr("Codes1")==$(err1[i]).attr("Codes2")||$(err1[i]).attr("Codes2")==$(err1[i]).attr("Codes3")||$(err1[i]).attr("Codes3")==$(err1[i]).attr("Codes1"))
		{
			housan="\u4e8c\u540c\u53f7"
		}
		if ($(err1[i]).attr("Codes1")!=$(err1[i]).attr("Codes2") && $(err1[i]).attr("Codes2")!=$(err1[i]).attr("Codes3") && $(err1[i]).attr("Codes3")!=$(err1[i]).attr("Codes1")) 
		{
			housan="\u4e09\u4e0d\u540c\u53f7"
		}
		if ($(err1[i]).attr("Codes1")==$(err1[i]).attr("Codes2") && $(err1[i]).attr("Codes2")==$(err1[i]).attr("Codes3") && $(err1[i]).attr("Codes3")==$(err1[i]).attr("Codes1")) 
		{
			housan="\u4e09\u540c\u53f7"
		}
		sth1=$(err1[i]).attr("Codes1")+$(err1[i]).attr("Codes2")+$(err1[i]).attr("Codes3");
		if(sth1=="123" || sth1=="234" || sth1=="345" || sth1=="456" || sth1=="321" || sth1=="432" || sth1=="543" || sth1=="654") 
		{
			housan="\u4e09\u8fde\u53f7";
		}
									if(i==0)
									{ 
										$("#fq1").html(" "+$(err1[i]).attr("shortissue")+" ");
										$("#fq3").html(" "+$(err1[i]).attr("Codes"+1)+" "+$(err1[i]).attr("Codes"+2)+" "+$(err1[i]).attr("Codes"+3));
										document.getElementById("tt1").className="k3-num-m k3-num-m-"+$(err1[i]).attr("Codes"+1);
										document.getElementById("tt2").className="k3-num-m k3-num-m-"+$(err1[i]).attr("Codes"+2);
										document.getElementById("tt3").className="k3-num-m k3-num-m-"+$(err1[i]).attr("Codes"+3);
										continue;
									}
									var x1=document.createElement("tr"),hezi=0; 
									var x2=document.createElement("td");
									x2.innerHTML=$(err1[i]).attr("shortissue")+" \u671f";
									x1.appendChild(x2);
									x2=document.createElement("td");
									var x3=document.createElement("span");
								}
	if(kaijiang=="Sd"||kaijiang=="Pls")
	{
		if ($(err1[i]).attr("Codes1")==$(err1[i]).attr("Codes2")||$(err1[i]).attr("Codes2")==$(err1[i]).attr("Codes3")||$(err1[i]).attr("Codes3")==$(err1[i]).attr("Codes1"))
		{
			housan="\u0028\u7ec4\u4e09\u0029\u8bd5\u673a\u53f7\u003a"
		}
		else if ($(err1[i]).attr("Codes1")!=$(err1[i]).attr("Codes2") && $(err1[i]).attr("Codes2")!=$(err1[i]).attr("Codes3") && $(err1[i]).attr("Codes3")!=$(err1[i]).attr("Codes1")) 
		{
			housan="\u0028\u7ec4\u516d\u0029\u8bd5\u673a\u53f7\u003a"
		}
	}
							for(var j=1;j<kcodes;j++)
							{
								if(kaijiang.indexOf("Ks")!=-1)
								{
									var x4=document.createElement("span");x4.className="k3-num-s k3-num-s-"+$(err1[i]).attr("Codes"+j);
									codes=codes+" "+$(err1[i]).attr("Codes"+j);hezi=hezi+parseInt($(err1[i]).attr("Codes"+j));
									x3.appendChild(x4);	
								}
								else
								{
									if(panduan1==1&&j<7&&kaijiang=="Ssq") codes=codes+" "+$(err1[i]).attr("Codes"+j);
									else if(kaijiang=="Sd"||kaijiang=="Pls"&&panduan1==1&&j<7)
									{
										 codes=codes+" "+$(err1[i]).attr("Codes"+j);
										 if(j==3) codes=codes+housan;
									}
									else if(kaijiang=="Qxc"&&panduan1==1&&j<kcodes) codes=codes+" "+$(err1[i]).attr("Codes"+j);
									else if(kaijiang=="Qlc"&&panduan1==1&&j<8) codes=codes+" "+$(err1[i]).attr("Codes"+j);
									else if(panduan1==1&&j<6) codes=codes+" "+$(err1[i]).attr("Codes"+j);		
									if(kaijiang=="Dlt"&&j>5)
									{ 
										panduan1=0;
										codes2=codes2+" "+$(err1[i]).attr("Codes"+j);
									}	
									else if(kaijiang=="Qlc"&&j>7)
									{ 
										panduan1=0;
										codes2=codes2+" "+$(err1[i]).attr("Codes"+j);
									}
									else if(kaijiang=="Ssq"&&j>6)
									{ 
										panduan1=0;
										codes2=codes2+" "+$(err1[i]).attr("Codes"+j);
									}
								}
							}	
							if(kaijiang.indexOf("Ks")!=-1)
							{	
								var x5=document.createElement("span");
								x5.className="num";
								x5.innerHTML=codes;
								x3.appendChild(x5);
								x2.appendChild(x3);
								x1.appendChild(x2);
								x5=document.createElement("td");
								x5.innerHTML=hezi;
								x1.appendChild(x5);
								x5=document.createElement("td");x5.innerHTML=housan;
								x1.appendChild(x5);
								document.getElementById("kjlist").appendChild(x1);codes="";
								}
							else
							{
								codes=$(err1[i]).attr("shortissue")+" "+"\u671f\u5f00\u5956"+codes+"\n";
								var x1=document.createElement("p"); 
								x1.style.color="red";
								x1.innerHTML=codes;
								if(kaijiang=="Dlt")
								{
									var x2=document.createElement("span");
									x2.style.color="blue";
									x2.innerHTML="+"+codes2;
									x1.appendChild(x2);	
								}
								else if(kaijiang=="Qlc")
								{
									var x2=document.createElement("span");
									x2.style.color="blue";
									x2.innerHTML="+"+codes2;
									x1.appendChild(x2);	
								}
								else if(kaijiang=="Ssq")
								{
									var x2=document.createElement("span");
									x2.style.color="blue";
									x2.innerHTML="+"+codes2;
									x1.appendChild(x2);	
								}
								if(document.getElementById(qihaoid)!=null) document.getElementById(qihaoid).appendChild(x1);codes="";codes2="";
						   }
					   }
					}
				}});		
}
if(typeof(caizhong) != "undefined")
	var id=caizhong;
var numcout = 0,cha = 0;

var time="",endtime="",issale="";expect="";
  function getExp(){
	 var url1="/Include/get_issue.asp";
	 $.ajax({ url:url1,dataType:"xml",data:{lt_id:escape(id),ttis:gp,},
	 success:function(data){

	    if($($(data).find("err")).attr("type")=="1"){

			  var row1 = $(data).find("issue");
			  var row2 = $(data).find("status");
			  endtime = $(row1).attr("endtime");
			  time = $(row2).attr("servertime");
			  issale = $(row2).attr("issale");
			  expect = $(row1).attr("expect");
			   if(document.getElementById("kkid")!=null){
			  		document.getElementById("kkid").innerHTML="\u5f53\u524d "+expect+" \u671f";}
			  if(document.getElementById("showid")!=null){
			  		document.getElementById("showid").innerHTML=expect;if(document.getElementById("showid1")!=null) document.getElementById("showid1").innerHTML=expect;}
			  if(typeof(caizhong) != "undefined") if(caizhong!=null&&document.getElementById("title")) document.getElementById("title").value=id+" "+expect+" \u671f";

			  var start = new Date(time*1000);
	          var end = new Date(endtime*1000);
	          cha = end.getTime()-start.getTime();
		  }
	}});
  }
 var getPassTime = function (){
	   cha = cha-1000;
	   if(cha < 1) tmstr = "已截至"; 
	   else{
			   numcout--;
			   var date=new Date(cha);
			   var day = parseInt(cha/(3600000*24));
			   var h = parseInt(cha%(3600000*24));
			   h = parseInt(h/3600000);
			   var m = date.getMinutes();
			   var s = date.getSeconds();
			   

			   h=(h<10)? "0"+h:h;
			   m=(m<10) ? "0"+ m : m;
			   s=(s<10)? "0"+s : s;
			   var tmstr="";
			   if(m<1&&s<1&&day<1&&h<1)
			   {
				 alert("\u671f\u53f7\u4e3a["+expect+"]\u5df2\u8fc7\u671f\uff0c\u5df2\u4e3a\u4f60\u66f4\u65b0\u81f3\u4e0b\u4e00\u671f\u53f7\u002e\u002e\u002e");getExp();   
			   }

			   h=(h=="00")? "": h+"\u65f6";
			   day=(day==0) ? "" :day+"\u5929";


			   if(typeof(caizhong) != "undefined"){
				   if(caizhong.indexOf("\u5feb\u0033")==-1)
				   {
						if(expect.length<6)	{
							day=="" ? tmstr=h+m+"\u5206"+s+"\u79d2" : tmstr=day+h+m+"\u5206";
							//var tmstr="\u622a\u6b62\uff1a"+day+h+m+"\u5206"+s+"\u79d2";
						}else{
							var tmstr ="\u622a\u6b62\uff1a"+m+"\u5206"+s+"\u79d2";
						}
				   }else{
					   day=="" ? tmstr=h+m+"\u5206"+s+"\u79d2" : tmstr=day+h+m+"\u5206";
			   		}
			   }
		  }

	   if($("#showtime").html()!=null) $("#showtime").text(tmstr);
	   if($("#showtime1").html()!=null) $("#showtime1").text(tmstr);
	   if(numcout==0){
		  numcout=10;
	      getExp();
	   }setTimeout(getPassTime,1000);  
}	

$(function(){
   getExp();
   getPassTime();
   kaijianghao();
});
 

