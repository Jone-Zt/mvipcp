function kaijiang()
{
	var cisu=new Array(8,8,7,4,6,6,4,4,8,9,6,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,4,4,4,6,6,11),
	caizhongname=new Array("\u53cc\u8272\u7403","\u5927\u4e50\u900f","\u798f\u5f69\u0033\u0044","\u6392\u5217\u4e09","\u91cd\u5e86\u65f6\u65f6\u5f69","\u6c5f\u897f\u0031\u0031\u9009\u0035","\u6c5f\u82cf\u5feb\u4e09","\u6392\u5217\u4e94","\u4e03\u661f\u5f69","\u4e03\u4e50\u5f69","\u0031\u0035\u9009\u0035","\u5409\u6797\u5feb\u0033","\u5b89\u5fbd\u5feb\u0033","\u798f\u5efa\u5feb\u0033","\u5e7f\u4e1c\u0031\u0031\u9009\u0035","\u6c5f\u82cf\u0031\u0031\u9009\u0035","\u4e0a\u6d77\u0031\u0031\u9009\u0035","\u8fbd\u5b81\u0031\u0031\u9009\u0035","\u65b0\u7586\u0031\u0031\u9009\u0035","\u6c5f\u897f\u65f6\u65f6\u5f69","\u0031\u0031\u8fd0\u593a\u91d1","\u798f\u5efa\u0031\u0031\u9009\u0035","\u5929\u6d25\u65f6\u65f6\u5f69","\u9ed1\u9f99\u6c5f\u65f6\u65f6\u5f69","\u6cb3\u5185\u4e94\u5206\u5f69","\u5b89\u5fbd\u0031\u0031\u9009\u0035","\u6d59\u6c5f\u0031\u0031\u9009\u0035","\u9ed1\u9f99\u6c5f\u0031\u0031\u9009\u0035","\u6cb3\u5317\u0031\u0031\u9009\u0035","\u5409\u6797\u0031\u0031\u9009\u0035","\u5929\u6d25\u0031\u0031\u9009\u0035","\u5185\u8499\u5feb\u0033","\u5e7f\u897f\u5feb\u0033","\u6e56\u5317\u5feb\u0033","\u6cb3\u5317\u5feb\u0033","\u4e0a\u6d77\u5feb\u0033","\u5370\u5c3c\u4e94\u5206\u5f69","\u817e\u8baf\u5206\u5206\u5f69","北京赛车");
	$.ajax({
		url:"/Trade/Include/KR.Ajax.asp",
		type:"POST",
		dataType:"xml",
		data:{LottType:"KjTrade"},
		success: function(data){
			var err = $(data).find("err");
			var err1 = $(data).find("row");
			if($(err).attr("type")=="1")
			{
				for(var i=0;i<err1.length;i++)
				{	
				var codes="",x1=document.createElement("li"),x2=document.createElement("h2"),x3=document.createElement("span"),taga=document.createElement("a"),codes="",housan="",hezi=0,sth1="";
		x2.innerHTML=caizhongname[i];x1.appendChild(x2);taga.href="./caizhongkj.asp?caizhong="+i;taga.appendChild(x1);					
if($(err1[i]).attr("name")!=null&&$(err1[i]).attr("name")=="Sd")
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
	else if($(err1[i]).attr("name")!=null&&$(err1[i]).attr("name").indexOf("Ks")!=-1)
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
		x3.innerHTML="\u7b2c "+$(err1[i]).attr("issue")+" \u671f";x2.appendChild(x3);
		var x4=document.createElement("dl"),x5=document.createElement("dd"),x6=document.createElement("div"),x8=document.createElement("p");
		x1.appendChild(x4);x4.appendChild(x5);x6.className="kj-ball";x5.appendChild(x6);x5.appendChild(x8);
		x8.innerHTML="\u7b80\u5355\u597d\u73a9\uff0c\u5f00\u5fc3\u8d62\u5927\u5956\uff01";
		for(var j=1;j<cisu[i];j++)
		{
			var x7=document.createElement("span");
			if(i==2&&j<4){
				x7.innerHTML=$(err1[i]).attr("Codes"+j);x6.appendChild(x7);}
			else if(i!=2){
				x7.innerHTML=$(err1[i]).attr("Codes"+j);x6.appendChild(x7);}
			if(i==0&&j>6)
			x7.className="blueball";
			else if(i==1&&j>5)
			x7.className="blueball";
			else if(i==9&&j>7)
			x7.className="blueball";
			else x7.className="redball";
			if(i==2&&j>3)
			{
				codes=codes+" "+$(err1[i]).attr("Codes"+j)	
			}
			else if($(err1[i]).attr("name")!=null&&$(err1[i]).attr("name").indexOf("Ks")!=-1)
			{
			hezi=hezi+parseInt($(err1[i]).attr("Codes"+j))	
			}
		}
		if($(err1[i]).attr("name")=="Sd")
		{	
			var x9=document.createElement("em");
			x9.innerHTML=housan+codes;
			x6.appendChild(x9);
		}
		else if($(err1[i]).attr("name")!=null&&$(err1[i]).attr("name").indexOf("Ks")!=-1)
		{
			var x9=document.createElement("em"),x10=document.createElement("em");
			x9.innerHTML="\u548c\u503c:"+hezi;x10.innerHTML="\u7c7b\u578b:"+housan;
			x6.appendChild(x9);x6.appendChild(x10);
		}
		document.getElementById("mylottery").appendChild(taga);
				}
			}
		},
		error: function(){ alert("错误...")} 
	})
}
$(function()
{
	kaijiang();
});