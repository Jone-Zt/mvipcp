function cansu(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var cxnumber=10;
function caizhonglist()
{
	document.getElementById("kjH").innerHTML="";
	var kjcaizhong=new Array("Ssc","GdSyxw"),
	lianjie=new Array("/Trade/Ssc/?type=Ssc","/Trade/Syxw/?type=GdSyxw"),
	caizhongname=new Array("重庆时时彩","广东11选5"),
	cisu=new Array(6,6),caizhongnm=cansu("caizhong");
	document.getElementById("navtit").innerHTML=caizhongname[caizhongnm]+"\u002d\u002d\u5386\u53f2\u5f00\u5956";
	document.getElementById("urlmap").innerHTML="\u6295\u6ce8"+caizhongname[caizhongnm];document.getElementById("urlmap").href=lianjie[caizhongnm];
	$.ajax
		({
			url:"/Trade/Include/KR.Ajax.asp",
			type:"POST",
			dataType:"xml",
			async:false,
			data:{
					LottType:kjcaizhong[caizhongnm], 
					cxnumber:cxnumber,        
				 },
			success:function(data)
				{	
					var err = $(data).find("err");
					var err1 = $(data).find("row");
					if($(err).attr("type")=="1")
					{
						for(var i=0;i<err1.length;i++)
						{
	                        var x1=document.createElement("li"),x2=document.createElement("h2"),x3=document.createElement("span"),x4=document.createElement("dl"),x5=document.createElement("dd"),x6=document.createElement("div"),codes="",hezi=0,housan="",sth1="";x1.appendChild(x2);x2.appendChild(x3);x1.appendChild(x4);x4.appendChild(x5);x5.appendChild(x6);
							x2.innerHTML="\u7b2c "+$(err1[i]).attr("issue")+" \u671f";x6.className="kj-ball";
	if(kjcaizhong[caizhongnm]=="Sd")
	{
		if ($(err1[i]).attr("Codes1")==$(err1[i]).attr("Codes2")||$(err1[i]).attr("Codes2")==$(err1[i]).attr("Codes3")||$(err1[i]).attr("Codes3")==$(err1[i]).attr("Codes1"))
		{
			housan="\u0028\u7ec4\u4e09\u0029 \u8bd5\u673a\u53f7\u003a"
		}
		else if ($(err1[i]).attr("Codes1")!=$(err1[i]).attr("Codes2") && $(err1[i]).attr("Codes2")!=$(err1[i]).attr("Codes3") && $(err1[i]).attr("Codes3")!=$(err1[i]).attr("Codes1")) 
		{
			housan="\u0028\u7ec4\u516d\u0029 \u8bd5\u673a\u53f7\u003a"
		}
	}
	else if(kjcaizhong[caizhongnm].indexOf("Ks")!=-1)
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
		sth1=$(err1[i]).attr("Codes1")+$(err1[i]).attr("Codes2")+$(err1[i]).attr("Codes3")
		if(sth1=="123" || sth1=="234" || sth1=="345" || sth1=="456" || sth1=="321" || sth1=="432" || sth1=="543" || sth1=="654") 
		{
			housan="\u4e09\u8fde\u53f7"
		}
	}
							for(var j=1,x7;j<cisu[caizhongnm];j++)
							{
								if(caizhongnm=="2"&&j<4)
									x7 = document.createElement("cite");
								else if(caizhongnm!="2")
									x7 = document.createElement("cite");

								caizhongnm == "2" ?  (j<=3 && (x7.innerHTML = $(err1[i]).attr("Codes"+j))) : x7.innerHTML = $(err1[i]).attr("Codes"+j);

								x6.appendChild(x7);

								if(caizhongnm=="2"&&j>3)
								{
									codes=codes+" "+$(err1[i]).attr("Codes"+j)	
								}	
								else if(kjcaizhong[caizhongnm].indexOf("Ks")!=-1)
								{
									hezi=hezi+parseInt($(err1[i]).attr("Codes"+j))
								}	
							}
							if(caizhongnm=="2")
							{	
								var x8=document.createElement("em");
								x8.innerHTML=housan+codes;
								x6.appendChild(x8);
							}
							else if(kjcaizhong[caizhongnm].indexOf("Ks")!=-1)
							{
								var x8=document.createElement("em"),x9=document.createElement("em");
								x8.innerHTML="\u548c\u503c:"+hezi+" ";x9.innerHTML="\u7c7b\u578b:"+housan;
								x6.appendChild(x8);x6.appendChild(x9);
							}
							document.getElementById("kjH").appendChild(x1);
						}
						
						if(err1.length<cxnumber)
						{
							$("#jiang3").html("已加载完毕")	;
							document.getElementById("jiang4").style.background="#B3B3B3";cxnumber=10;
							$("#jiang5").removeAttr("href");
						}else 
						{
							$("#jiang3").html("点击加载更多...");document.getElementById("jiang4").style.background="#FB080C";
							cxnumber=cxnumber+10;
						}
					}	
				},
			error: function(){ alert("错误...")}
		});
}
$(function(){
	caizhonglist();	
})