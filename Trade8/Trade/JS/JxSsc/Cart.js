function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var czname=cansu("type"),caizhong="",gp=1;
if(czname=="JxSsc") caizhong="\u6c5f\u897f\u65f6\u65f6\u5f69";
else if(czname=="Ssc") caizhong="\u91cd\u5e86\u65f6\u65f6\u5f69";
else if(czname=="TjSsc") caizhong="\u5929\u6d25\u65f6\u65f6\u5f69";
else if(czname=="HljSsc") caizhong="\u9ed1\u9f99\u6c5f\u65f6\u65f6\u5f69";
else if(czname=="Hnwfc") caizhong="\u6cb3\u5185\u4e94\u5206\u5f69";
else if(czname=="Ynwfc") caizhong="\u5370\u5c3c\u4e94\u5206\u5f69";
else if(czname=="Txffc") caizhong="\u817e\u8baf\u5206\u5206\u5f69";
function tback(){location.href = "index.asp?type="+czname;}
function meFW(){

		if($("#meFW").val()<0)
			$("#meFW").val(1);

		var oneMoney = (Number($("#coopMoney").html())/Number($("#meFW").val())).toFixed(2)
		$("#meFWab").html(oneMoney);
		
		$("#jiangd").html(caizhong);
		if( $("#meRG").val()!=""){
		if($("#coopMul").val()>500) $("#coopMul").val(500)
		if(localStorage["storage258001mul"]) var a=localStorage["storage258001mul"];else var a=0;
		$("#coopCount").html(a);
		var b = document.getElementById("coopMul").value;
		sum1 = a*2*b;

		sum = Number($("#meFW").val());

		document.getElementById("coopMoney").innerHTML=sum1;

		var zsrengou=sum*0.05,zsrengou1 = Math.ceil(zsrengou);$("#meRG").val(zsrengou1);$("#meBD").val(sum-zsrengou1);	
		var maxbaodi=sum-zsrengou1;

		$("#maxBD").html(maxbaodi);var rg=$("#meRG").val(),bd=$("#meBD").val();$("#trengou").html(rg);$("#tbaodi").html($("#meBD").val());
		
		if(bd=="") bd=0;if(rg=="") rg=0;
		$("#tsum").html(((parseInt(bd)+parseInt(rg))*oneMoney).toFixed(2));
		if(rg<zsrengou1){ $("#meRG").val(zsrengou1);jisuan();}
		if(bd>maxbaodi){ $("#meBD").val(maxbaodi);jisuan();}
	}
}

function meFWabcd(){
	if($("#meRG").val() == "" || Number($("#meRG").val()) <1){
		$("#meRG").val(1);meFWabc()
	}
}
function meFWabc(){

	$("#jiangd").html(caizhong);
	if( $("#meRG").val()!=""){
	if($("#coopMul").val()>500) $("#coopMul").val(500)
	if(localStorage["storage258001mul"]) var a=localStorage["storage258001mul"];else var a=0;
	$("#coopCount").html(a);
	if(Number($("#meFW").val())<1) $("#meFW").val(1);
	var oneMoney = (Number($("#coopMoney").html())/Number($("#meFW").val())).toFixed(2)
	$("#meFWab").html(oneMoney);

	var b=document.getElementById("coopMul").value,

	sum1 = a*2*b;
	sum = Number($("#meFW").val());
	document.getElementById("coopMoney").innerHTML=sum1;


	var zsrengou = sum*0.05,zsrengou1=Math.ceil(zsrengou);


	if(Number($("#meRG").val())<zsrengou){
		$("#meRG").val(zsrengou);
	}

	else if(Number($("#meRG").val())>=sum){

		$("#meRG").val(sum);
		$("#meBD").val(0);
		$("#maxBD").html(0);
	}
	else{

		if($("#meBD").val()>sum-Number($("#meRG").val())) $("#meBD").val(sum-Number($("#meRG").val()));
		$("#maxBD").html(sum-Number($("#meRG").val()));	
	}

	
	var maxbaodi=sum-zsrengou1;

	if(Number($("#meBD").val())>=maxbaodi){

		$("#meBD").val(maxbaodi);
	}

	var rg=$("#meRG").val(),bd=$("#meBD").val();$("#trengou").html(rg);$("#tbaodi").html($("#meBD").val());
	


	if(bd=="") bd=0;if(rg=="") rg=0;
	$("#tsum").html(((parseInt(bd)+parseInt(rg))*oneMoney).toFixed(2));

	} 
}

function jisuan()
{
	$("#jiangd").html(caizhong);
	if( $("#meRG").val()!=""){
	if($("#coopMul").val()>500) $("#coopMul").val(500)
	if(localStorage["storage258001mul"]) var a=localStorage["storage258001mul"];else var a=0;
	$("#coopCount").html(a);$("#meFWab").html(1);if(Number($("#meFW").val())<1) $("#meFW").val(1);
	var b=document.getElementById("coopMul").value,sum = a*2*b;$("#meFW").val(sum)
	document.getElementById("coopMoney").innerHTML=sum;
	var zsrengou=sum*0.05,zsrengou1=Math.ceil(zsrengou);$("#meRG").val(zsrengou1);$("#meBD").val(sum-zsrengou1);	
	var maxbaodi=sum-zsrengou1;$("#maxBD").html(maxbaodi);var rg=$("#meRG").val(),bd=$("#meBD").val();$("#trengou").html(rg);$("#tbaodi").html($("#meBD").val());
	if(bd=="") bd=0;if(rg=="") rg=0;
	$("#tsum").html(parseInt(bd)+parseInt(rg));
	if(rg<zsrengou1){ $("#meRG").val(zsrengou1);jisuan();}
	if(bd>maxbaodi){ $("#meBD").val(maxbaodi);jisuan();}} 
}
function tjisuan()
{
	if( $("#meRG").val()!=""){
	var a=parseInt($("#coopMoney").html()),zsrengou=Math.ceil(a*0.05);
	if($("#meRG").val()<zsrengou) $("#meRG").val(zsrengou)
	if($("#meRG").val()>a){$("#meRG").val(a);$("#meBD").val(0);}
	$("#meBD").val(parseInt(a)-parseInt($("#meRG").val()));
	$("#trengou").html($("#meRG").val());$("#tbaodi").html($("#meBD").val());
	$("#tsum").html(parseInt($("#trengou").html())+parseInt($("#tbaodi").html()));
	$("#maxBD").html(a-Math.ceil($("#meRG").val()));
	}
}
function tjisuan1()
{
	if( $("#meRG").val()!=""){
	var a=parseInt($("#coopMoney").html()),zsrengou=Math.ceil(a*0.05);
	if(parseInt($("#meBD").val())>parseInt($("#maxBD").html())) $("#meBD").val($("#maxBD").html());
	$("#trengou").html($("#meRG").val());$("#tbaodi").html($("#meBD").val());if($("#meBD").val()==""){ $("#tbaodi").html(0);$("#meBD").val(000000)}
	$("#tsum").html(parseInt($("#trengou").html())+parseInt($("#tbaodi").html()));
	$("#maxBD").html(a-Math.ceil($("#meRG").val()));}
}
function panduan()
{
		var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage258001mul"],tjurl="",wanfa1=caizhong,tqihaosum=qihao,wfname="",wfname1="";			
		if(tk1=="infolist")
		{
			var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="/Trade/Include/Ajax_ZG_G.asp";
		}
		else if(tk2=="infolist")
		{
			var bbb=document.getElementById("stopbuy").checked;var qisu=document.getElementById("apNum").value;var beisu=document.getElementById("apMul").value;
			var sum=document.getElementById("apMoney").innerHTML;if(bbb) var zhuihaotz="1";else zhuihaotz="0";tjurl="/Trade/Include/Ajax_ZG_G.asp";qisu2=beisu;
			var showbeisu=beisu;for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;	
			var tqihao=qihao.split("-"),a=Number(tqihao[1]);
			for(var j=1;j<qisu;j++)
			{
				a++;
				var b;
				if(czname=="Txffc"){
					if(a<10) b="000"+a;
					else if(a<100) b="00"+a;
					else if(a<1000) b="0"+a;
					else if(a>=1000) b=a;
				}
				else if(czname=="Ssc" || czname=="Hnwfc" || czname=="Ynwfc"){
					if(a<10) b="00"+a;
					else if(a<100) b="0"+a;
					else if(a>=100) b=a;
				}
				else{
					if(a<10) b="0"+a;
					else b=a;
				}
				tqihaosum=tqihaosum+","+tqihao[0]+"-"+b;		
			}
			beisu=qisu2;qihao=tqihaosum;
			var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1]	
		}
		else   
		{
			var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
			isgk=document.getElementById("ispublic").value,sum=zhusu*2*beisu,ttrengou=Math.ceil(sum*0.05);
			$("#coopCount").html(zhusu);$("#coopMoney").html(sum);$("#meRG").val(ttrengou);
			$("#trengou").html(ttrengou);var ticheng=document.getElementById("royalty").value,
			tjurl="/Trade/Include/Ajax_HM_G.asp",zhifu=$("#tsum").html();
		}
		if(localStorage["storage258001"]&&localStorage["storage258001mul"])
		{
			var k1=localStorage['storage258001'].split(";"),codes="";//localStorage["storage258001mul"]=k1.length;
			for(var j=0;j<k1.length;j++)
			{
				var k2=k1[j].split("|");
				console.log(k2);
				for(var i=0;i<k2.length;i++)
				{
					if(i==0){switch(k2[0])
					{
						case "F6":
							{
								if(Number(k2[1])>1){wanfa="[316]";wfname="\u7ec4\u516d";}else{wanfa="[704]";wfname="\u4e09\u661f\u7ec4\u516d\u5355\u5f0f";} 
								break;
							}
						case "5D":
							{
								if(Number(k2[1])>1){wanfa="[104]";wfname="\u4e94\u661f\u76f4\u9009\u590d\u5f0f";}else{wanfa="[112]";wfname="\u4e94\u661f\u76f4\u9009\u5355\u5f0f";} 
								break;
							}
						case "5T":
							{
								if(Number(k2[1])>1){wanfa="[124]";wfname="\u4e94\u661f\u901a\u9009\u590d\u5f0f";}else{wanfa="[125]";wfname="\u4e94\u661f\u901a\u9009\u5355\u5f0f";} 
								break;
							}
						case "4D":
							{
								if(Number(k2[1])>1){wanfa="[802]";wfname="\u56db\u661f\u590d\u5f0f";}else{wanfa="[801]";wfname="\u56db\u661f\u5355\u5f0f";} 
								break;
							}
						case "3D":
							{
								if(Number(k2[1])>1){wanfa="[105]";wfname="\u4e09\u661f\u76f4\u9009\u590d\u5f0f";}else{wanfa="[113]";wfname="\u4e09\u661f\u76f4\u9009\u5355\u5f0f";} 
								break;
							}
						case "F3":
							{
								if(Number(k2[1])>1){wanfa="[315]";wfname="\u4e09\u661f\u7ec4\u4e09\u590d\u5f0f";}else{wanfa="[703]";wfname="\u4e09\u661f\u7ec4\u4e09\u5355\u5f0f";} 
								break;
							}
						case "2D":
							{
								if(Number(k2[1])>1){wanfa="[106]";wfname="\u4e8c\u661f\u76f4\u9009\u590d\u5f0f";}else{wanfa="[114]";wfname="\u4e8c\u661f\u76f4\u9009\u5355\u5f0f";} 
								break;
							}
						case "F2":
							{
								if(Number(k2[1])>1){wanfa="[116]";wfname="\u4e8c\u661f\u7ec4\u9009\u590d\u5f0f";}else{wanfa="[117]";wfname="\u4e8c\u661f\u7ec4\u9009\u5355\u5f0f";} 
								break;
							}
						case "1D":
							{
								wanfa="[107]";wfname="\u4e00\u661f";
								break;
							}
						case "DW":
							{
								wanfa="[999]";wfname="\u5b9a\u4f4d";
								break;
							}
						case "DD":
							{
								wanfa="[111]";wfname="\u5927\u5c0f\u5355\u53cc";
								break;
							}
						case "SD":
							{
								wanfa="[401]";wfname="\u4e09\u661f\u7ec4\u4e09\u80c6\u62d6";
								break;
							}
						case "LD":
							{
								wanfa="[402]";wfname="\u4e09\u661f\u7ec4\u516d\u80c6\u62d6";
								break;
							}
						case "3H":
							{
								wanfa="[304]";wfname="\u4e09\u661f\u76f4\u9009\u548c\u503c";
								break;
							}
						case "HD":
							{
								wanfa="[177]";wfname="\u4e09\u7ec4\u5305\u80c6";
								break;
							}
						case "Q3":
							{
								wanfa="[555]";wfname="\u524d\u4e09\u76f4\u9009\u590d\u5f0f";
								break;
							}
						case "QH":
							{
								wanfa="[364]";wfname="\u524d\u4e09\u76f4\u9009\u548c\u503c";
								break;
							}
						case "FQ":
							{
								wanfa="[335]";wfname="\u524d\u4e09\u7ec4\u4e09\u590d\u5f0f";
								break;
							}
						case "SQ":
							{
								wanfa="[203]";wfname="\u524d\u4e09\u7ec4\u4e09\u80c6\u62d6";
								break;
							}
						case "Q6":
							{
								wanfa="[336]";wfname="\u524d\u4e09\u7ec4\u516d\u590d\u5f0f";
								break;
							}
						case "LQ":
							{
								wanfa="[204]";wfname="\u524d\u4e09\u7ec4\u516d\u80c6\u62d6";
								break;
							}
						case "QD":
							{
								wanfa="[178]";wfname="\u524d\u4e09\u4e09\u7ec4\u5305\u80c6";
								break;
							}
						case "Z3":
							{
								wanfa="[455]";wfname="\u4e2d\u4e09\u76f4\u9009\u590d\u5f0f";
								break;
							}
						case "ZH":
							{
								wanfa="[264]";wfname="\u4e2d\u4e09\u76f4\u9009\u548c\u503c";
								break;
							}
						case "FZ":
							{
								wanfa="[235]";wfname="\u4e2d\u4e09\u7ec4\u4e09\u590d\u5f0f";
								break;
							}
						case "SZ":
							{
								wanfa="[103]";wfname="\u4e2d\u4e09\u7ec4\u4e09\u80c6\u62d6";
								break;
							}
						case "Z6":
							{
								wanfa="[236]";wfname="\u4e2d\u4e09\u7ec4\u516d\u590d\u5f0f";
								break;
							}
						case "LZ":
							{
								wanfa="[102]";wfname="\u4e2d\u4e09\u7ec4\u516d\u80c6\u62d6";
								break;
							}
						case "ZD":
							{
								wanfa="[179]";wfname="\u4e2d\u4e09\u4e09\u7ec4\u5305\u80c6";
								break;
							}
						case "3Q":
							{
								wanfa="[725]";wfname="\u524d\u4e09\u7ec4\u4e09\u548c\u503c";
								break;
							}
						case "3Z":
							{
								wanfa="[715]";wfname="\u4e2d\u4e09\u7ec4\u4e09\u548c\u503c";
								break;
							}
						case "6Q":
							{
								wanfa="[726]";wfname="\u524d\u4e09\u7ec4\u516d\u548c\u503c";
								break;
							}
						case "6Z":
							{
								wanfa="[716]";wfname="\u4e2d\u4e09\u7ec4\u516d\u548c\u503c";
								break;
							}
						case "DH":
							{
								wanfa="[405]";wfname="\u76f4\u9009\u80c6\u62d6";
								break;
							}
						case "DQ":
							{
								wanfa="[406]";wfname="\u524d\u4e09\u76f4\u9009\u80c6\u62d6";
								break;
							}
						case "DZ":
							{
								wanfa="[407]";wfname="\u4e2d\u4e09\u76f4\u9009\u80c6\u62d6";
								break;
							}
						case "LHWQ":
						  {
						    wanfa = "[1000]";
							wfname="\u4e07\u5343\u4f4d\u9f99\u864e";
						    break;
						  }
						case "LHWB" :
						  {
						    wanfa = "[1001]";
							wfname="\u4e07\u767e\u4f4d\u9f99\u864e" 
						    break ;
						  }
						case "LHWS" :
					      { 	
						    wanfa = "[1002]";
							wfname="\u4e07\u5341\u4f4d\u9f99\u864e"
						    break;
					      }
						case "LHWG" :
						   { 
						    wanfa = "[1003]";
							wfname="\u4e07\u4e2a\u4f4d\u9f99\u864e"
						    break;
						   }
						 case "LHQB" :
						   {
						    wanfa = "[1004]";
							wfname="\u5343\u767e\u4f4d\u9f99\u864e"
						    break;
						   }
						 case "LHQS" :
						   { 
						     wanfa = "[1005]";
							 wfname="\u5343\u5341\u4f4d\u9f99\u864e"
						     break;
						   }
						 case "LHQG" :
						   {
						    wanfa = "[1006]";
							wfname="\u5343\u4e2a\u4f4d\u9f99\u864e"
						    break;
						   }
						 case "LHBS" :
						   {
						    wanfa = "[1007]";
							wfname="\u767e\u5341\u4f4d\u9f99\u864e" 
						    break;
						   }
						 case "LHBG" :
						   {
						    wanfa = "[1008]";
							wfname="\u767e\u4e2a\u4f4d\u9f99\u864e" 
						    break;
						   }
						 case "LHSG" :
						   {
						    wanfa = "[1009]";
							wfname="\u5341\u4e2a\u4f4d\u9f99\u864e"
					        break;
						   }
					 }}
					var k2i=k2[i];
					//大=>2  小=>1 单=>5  双=>4   龙=>a  虎=>b   合=>c
					k2i=k2i.replace('\u5927','2').replace('\u5c0f','1').replace('\u5355','5').replace('\u53cc','4').replace('\u9f99','a').replace('\u864e','b').replace('\u5408','c');
					if(i==2){if(codes=="") codes=codes+wanfa+k2i; else codes=codes+"$"+wanfa+k2i;}
				}
				if(wfname!=""&&wfname!=wfname1&&wfname1!="") wfname="\u6df7\u6295";
					wfname1=wfname;	
			}
		}
		if(baodi<1&&baodi=="")
			var isbaodi=0; else var isbaodi=1;
			//龙虎合大小单双  
		//if((/^S\D{1}$/.test(k2[0])) || (/^L\D{1}$/.test(k2[0])) || (/^D\D{1}$/.test(k2[0]))) codes = codes.replace(/\u62d6/g,";").replace(/ /g,",");
		codes = codes.replace(/\u62d6/g,";").replace(/ /g,",")
		codes
		$.ajax
		({
			url:tjurl,
			type:"POST",
			dataType:"xml",
			async:false,
			data:{
					caizhongdm:czname,
					onemoney:$("#meFWab").html(),
					protype:escape(wanfa1), 
					wfname:escape(wfname),                                  
					iszhuihao:"1",  
					anumber:$("#meFW").val(),                              
					allmoney:sum,  
					isbaodi:isbaodi,                             
					codes:codes,                                       
					ZjCut:zhuihaotz,                                   
					beishulistsuc:beisu,                             
					expectlistsuc:qihao,                                    
					single_zs:zhusu, 
					BuyJF:"0",                
					single_m:"",                
					escstr:"",
					buyCount:rengou,
					baodiCount:baodi,
					tc_money:ticheng,
					escstr:localStorage["storage258001"],
					isopen:$("#ispublic").find("option:selected").val()
				},
		success:function(data)
				{
						var err = $(data).find("err");
						if($(err).attr("type")=="-1") //Î´µÇÂ¼
						{
							document.getElementById("ttlogin").style.display="none";
						}
						else if($(err).attr("type")=="0")
						{
							alert("\u5bf9\u4e0d\u8d77\u60a8\u7684\u4f59\u989d\u4e0d\u8db3");
						}
						else if($(err).attr("type")=="3")
						{
							alert("\u8be5\u9875\u9762\u5df2\u8fc7\u671f\u8bf7\u5237\u65b0");
						}
						else if($(err).attr("type")=="4")
						{
							alert("\u6295\u6ce8\u91d1\u989d\u5df2\u7ecf\u8d85\u8fc7\u6700\u5927\u9650\u989d");
						}
						else if($(err).attr("type")=="5")
						{
							alert("\u6295\u6ce8\u9519\u8bef");
						}
						else if($(err).attr("type")=="2")
						{
							alert("\u5bf9\u4e0d\u8d77\u60a8\u7684\u79ef\u5206\u4e0d\u8db3");
						}
						else if($(err).attr("type")=="-2")
						{
							alert("\u65f6\u95f4\u5df2\u622a\u6b62");
						}
						else if($(err).attr("type")=="1")
						{
							alert("\u6295\u6ce8\u6210\u529f\uff01");
							if(localStorage["storage258001"]&&localStorage["storage258001mul"]){localStorage.removeItem("storage258001");localStorage.removeItem("storage258001mul");}
		document.getElementById("mycart").innerHTML="<li class='nocode'> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>";
		$("#ownMul").val("1");$("#ownCount").html("0");$("#ownMoney").html("0");$("#coopMul").val("1");$("#coopCount").html("0");$("#coopMoney").html("0");
					$("#meRG").val("0");$("#meBD").val("0");$("#tsum").html("0");$("#trengou").html("0");$("#tbaodi").html("0");$("#apMul").val("1");$("#apNum").val("10");
					$("#apMoney").html("0");$("#maxBD").html("0");$("#royalty").val(0);$("#ispublic").val(0);
						}
				}
		});
}
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.sscjx,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.issuefreq = 2e3,
    n.mobile.getActIssueFreq = 6e4,
    n.mobile.clearCacheUrl_dev = "#",
    n.mobile.gname = {
        "5D": "\u4e94\u661f\u76f4\u9009",
        "5T": "\u4e94\u661f\u901a\u9009",
        "4D": "\u56db\u661f",
        "3D": "\u4e09\u661f\u76f4\u9009",
        F3: "\u4e09\u661f\u7ec4\u4e09",
        F6: "\u4e09\u661f\u7ec4\u516d",
        "2D": "\u4e8c\u661f\u76f4\u9009",
        F2: "\u4e8c\u661f\u7ec4\u9009",
        "1D": "\u4e00\u661f",
        R1: "\u4efb\u9009\u4e00",
        R2: "\u4efb\u9009\u4e8c",
        DD: "\u5927\u5c0f\u5355\u53cc",
        Z3: "\u4e09\u661f\u7ec4\u9009",
        Z2: "\u4e8c\u661f\u7ec4\u9009",
        S2: "\u4e8c\u661f\u7ec4\u9009\u548c\u503c",
        H2: "\u4e8c\u661f\u76f4\u9009\u548c\u503c",
		DW: "\u5b9a\u4f4d",
		
		SD: "\u4e09\u661f\u7ec4\u4e09\u80c6\u62d6",
		LD: "\u4e09\u661f\u7ec4\u516d\u80c6\u62d6",
		"3H": "\u4e09\u661f\u76f4\u9009\u548c\u503c",
		HD: "\u4e09\u7ec4\u5305\u80c6",
		Q3: "\u524d\u4e09\u76f4\u9009\u590d\u5f0f",
		QH: "\u524d\u4e09\u76f4\u9009\u548c\u503c",
		FQ: "\u524d\u4e09\u7ec4\u4e09\u590d\u5f0f",
		SQ: "\u524d\u4e09\u7ec4\u4e09\u80c6\u62d6",
		Q6: "\u524d\u4e09\u7ec4\u516d\u590d\u5f0f",
		LQ: "\u524d\u4e09\u7ec4\u516d\u80c6\u62d6",
		QD: "\u524d\u4e09\u4e09\u7ec4\u5305\u80c6",
		Z3: "\u4e2d\u4e09\u76f4\u9009\u590d\u5f0f",
		ZH: "\u4e2d\u4e09\u76f4\u9009\u548c\u503c",
		FZ: "\u4e2d\u4e09\u7ec4\u4e09\u590d\u5f0f",
		SZ: "\u4e2d\u4e09\u7ec4\u4e09\u80c6\u62d6",
		Z6: "\u4e2d\u4e09\u7ec4\u516d\u590d\u5f0f",
		LZ: "\u4e2d\u4e09\u7ec4\u516d\u80c6\u62d6",
		ZD: "\u4e2d\u4e09\u4e09\u7ec4\u5305\u80c6",
		"3Q": "\u524d\u4e09\u7ec4\u4e09\u548c\u503c",
		"3Z": "\u4e2d\u4e09\u7ec4\u4e09\u548c\u503c",
		"6Q": "\u524d\u4e09\u7ec4\u516d\u548c\u503c",
		"6Z": "\u4e2d\u4e09\u7ec4\u516d\u548c\u503c",
		DH: "\u76f4\u9009\u80c6\u62d6",
		DQ: "\u524d\u4e09\u76f4\u9009\u80c6\u62d6",
		DZ: "\u4e2d\u4e09\u76f4\u9009\u80c6\u62d6",
		LHWQ:"\u4e07\u5343\u4f4d\u9f99\u864e",
		LHWB:"\u4e07\u767e\u4f4d\u9f99\u864e",
		LHWS:"\u4e07\u5341\u4f4d\u9f99\u864e",
		LHWG:"\u4e07\u4e2a\u4f4d\u9f99\u864e",
		LHQB:"\u5343\u767e\u4f4d\u9f99\u864e",
		LHQS:"\u5343\u5341\u4f4d\u9f99\u864e",
		LHQG:"\u5343\u4e2a\u4f4d\u9f99\u864e",
		LHBS:"\u767e\u5341\u4f4d\u9f99\u864e",
		LHBG:"\u767e\u4e2a\u4f4d\u9f99\u864e",
		LHSG:"\u5341\u4e2a\u4f4d\u9f99\u864e"
    },
    n.mobile.ylTP = "all",
    n.mobile.isZN = 0,
    n.mobile.jjprice = {
        DD: 4,
        R1: 11,
        R2: 116,
        "5T": 20460,
        "5D": 116e3,
        "4D": 1e4,
        "3D": 1160,
        "2D": 116,
        "1D": 11,
        F2: 58,
        F3: 385,
        F6: 190,
        Z3: 385,
        Z6: 190,
        Z2: 58,
		DW: 30,
		
		SD: 385,
		LD: 190,
		"3H": 1160,
		HD: 190,
		Q3: 1160,
		QH: 1160,
		FQ: 385,
		SQ: 385,
        Q6: 190,
		LQ: 190,
		QD: 190,
		Z3: 1160,
		ZH: 1160,
		FZ: 385,
		SZ: 385,
        Z6: 190,
		LQ: 190,
		ZD: 190,
		"3Q": 190,
		"3Z": 190,
		"6Q": 190,
		"6Z": 190,
		DH:190,
		DQ:190,
		DZ:190
    },
    n.mobile.bszs = {
        b1: "\u5c0f",
        b2: "\u5927",
        b4: "\u53cc",
        b5: "\u5355"
    },
    n.mobile.callbacks = function() {
        t("#pay_buy").trigger("click");
    },
    n.mobile.AsynDownData = function() {
        var e = t(".xq-tit"),
        r = t("#actQH"),
        i = t("#sourceUrl"),
        s = n.string.getUrlParam("pt") || "F6";
        i.attr("href", "./index.asp?pt=" + s+"&type="+czname),
        t.getJSON(n.mobile.clearCacheUrl_dev + "?rnd=" + Math.random(),
        function(t) {
            t&&(e.attr("endtime", t.EndTime), e.attr("prevtime", t.DsTimeSpace), e.attr("issale", t.IsOpen), e.attr("pt", s), r.text(t.issue), n.mobile.countDownInit(t.EndTime, t.DsTimeSpace), n.string.getUrlParam("dest") && n.mobile.callbacks())
        })
    },
    n.mobile.dealActsue = function(e) {
        var r = e.Issue,
        i = t.trim(t("#actQH").text());
        t(".xq-tit").attr("issale", e.IsOpen),
        t("#actQH").text(r).data("issue", r),
        t("#pay_buy").prop("disabled", !1).removeClass("btnoff").text("\u7acb\u523b\u4ed8\u6b3e"),
        n.mobile.countDownInit(e.EndTime, e.FsTimeSpace)
    },
    n.mobile.dealPlus = function(e) {
        var r = t(".xq-tit").attr("pt");
        if (/^(DD|2D|R2|F6)$/.test(r)) {
            var i = e.replace(/^\d{7}/g, "") * 1;
            i >= 35 && i <= 84 ? (n.mobile.jjprice.DD = 5, n.mobile.jjprice["2D"] = 150, n.mobile.jjprice.R2 = 150, n.mobile.jjprice.F6 = 230) : (n.mobile.jjprice.DD = 4, n.mobile.jjprice["2D"] = 116, n.mobile.jjprice.F2 = 116, n.mobile.jjprice.F6 = 190)
        }
    },
    n.mobile.checkIssue = function(e) {
        var n = e.Issue == (t("#actQH").data("issue") || t.trim(t("#actQH").text()));
        return ! n
    },
    n.mobile.getActIssue = function(e) {
        var r = n.mobile.issuefreq || 5e3;
        t.ajax({
            url: "/int/qcurissue?LotID=" + e + "&rnd=" + Math.random(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            },
            success: function(i) {
                n.mobile.checkIssue(i) ? (n.mobile.dealActsue(i), t("#ownCount").text() * 1 > 0 && (n.lightBox.close(), n.lightBox.alert({
                    content: "\u65b0\u65f6\u65f6\u5f69\u671f\u53f7\u5df2\u5207\u6362\uff0c\u5f53\u524d\u671f\u662f" + t.trim(t("#actQH").text()).replace(/^\d{4}/, "") + "\u671f",
                    confirmFn: function() {
                        this.close(),
                        n.mobile.intellectZH()
                    }
                }))) : setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            }
        })
    },
    n.mobile.countDownInit = function(e, r) {
        var i = t(".xq-tit"),
        s = t("#friendtxt"),
        o = t("#pay_buy");
        i.attr("issale") == "1" ? (s.text("\u5269\u4f59\u65f6\u95f4:"), o.prop("disabled", !1).removeClass("btnoff"), n.countdown.start({
            endTime: e * 1 - r * 1,
            sid: "#countdowm",
            freq: 1e4,
            filter: function(e) {
                return n.string.mulReplace(e, [[/^(0+[^1-9]*){1,}/g, ""]])
            },
            callback: function() {
                i.attr("issale") == "1" ? (s.text("\u7b49\u5f85\u5f00\u5956"), o.prop("disabled", !0).addClass("btnoff").text("\u7b49\u5f85\u5f00\u5956"), n.countdown.start({
                    endTime: e * 1,
                    sid: "#countdowm",
                    endStyle: "\u6b63\u5728\u83b7\u53d6\u4e0b\u4e00\u671f\u4fe1\u606f",
                    freq: 1e4,
                    filter: function(e) {
                        return n.string.mulReplace(e, [[/^(0+[^1-9]*){1,}/g, ""]])
                    },
                    callback: function() {
                        s.text(""),
                        n.mobile.getActIssue(n.mobile.lotType)
                    }
                })) : s.text("\u7b49\u5f85\u5f00\u5956")
            }
        })) : (s.text("\u6682\u505c\u9500\u552e"), o.prop("disabled", !0).addClass("btnoff").text("\u6682\u505c\u9500\u552e"))
    },
    n.mobile.codeViewInit = function() {
        var e, r;
        e = n.localstorage.getItem(n.mobile.storageMulName) * 1,
        r = n.localstorage.getItem(n.mobile.storageName).split(";");
        var i = [],
        s = r.length,
        o,
        u = [],
        a = '<li pt="{pt}" code="{code}" count="{count}"><a href="javascript:;" class="cp-cls">X</a><strong class="red">{name}</strong>{codeC}</li>',
        f = "";
        if (e) {
            for (var l = 0; l < s; l++) {
                var c = "";
                tmp = r[l].split("|");
                o = tmp[2];
                tmp[0] == "DD" ? (u = tmp[2].replace(/,/g,"").split(""), o = n.mobile.bszs["b" + u[0]] + n.mobile.bszs["b" + u[1]]) : (tmp[0] == "F3" || tmp[0] == "F6") && (c = tmp[1] > 1 ? "\u5305\u53f7": "\u5355\u5f0f");
                f = a.replace("{pt}", tmp[0]).replace("{code}", tmp[2]).replace("{count}", tmp[1]).replace("{name}", n.mobile.gname[tmp[0]] + c + "\uff1a").replace("{codeC}", tmp[2]);
                i.push(f);
            }
            t("#mycart").html(i.join(""));
        } else t("#mycart").html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>');
        n.mobile.count()
    },
    n.mobile.codeConfInit = function() {
        t("#mycart").on(n.lottery.tap, ".cp-cls",
        function() {
            var e = t(".xq-tit").attr("pt"),
            r = t(this).parent(),
            i = r.attr("code"),
            s = r.attr("count") * 1,
            o = r.attr("pt"),
            u,
            a = t("#mycart");
            u = (n.localstorage.getItem(n.mobile.storageName) + ";").replace(o + "|" + s + "|" + i + ";", "").replace(/^;|;$/g, ""),
            n.localstorage.setItem(n.mobile.storageName, u),
            n.localstorage.setItem(n.mobile.storageMulName, n.localstorage.getItem(n.mobile.storageMulName) - s),
            r.remove(),
            n.mobile.count(),jisuan(),
            a.find("li").length === 0 && (a.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'), n.mobile.intellectZH())
        }),
        t("#tools").on(n.lottery.tap, ".btn2",
        function() {
            var e = t(this).attr("method") * 1,
            r = t("#mycart"),
            i = r.find(".nocode"),
            s;
            if (e > 0) {
                var o = t(".xq-tit").attr("pt");
                i.length === 1 && i.remove(),
                i.length === 1 && i.remove();
                for (var u = 0; u < e; u++) {
                    var a, f = "",
                    l, c, h = [],
                    p = [],
                    d = "";
                    if (o == "DD") {
                        var v = ["21", "12", "11", "22", "25", "52", "24", "42", "15", "51", "14", "41", "54", "45", "55", "44"],
                        m = n.number.random({
                            min: 0,
                            max: 15,
                            size: 1,
                            repeat: 0,
                            sort: 1
                        })[0];
                        l = v[m[0] * 1]
                    } else if (o.indexOf("D") > -1 || o.indexOf("T") > -1) {
                        c = o.replace(/[D|T]/g, "") * 1;
                        for (var g = 0; g < 5 - c; g++) f += "-,";
                        l = f + n.number.random({
                            min: 0,
                            max: 9,
                            size: c,
                            repeat: 1,
                            sort: 0
                        })[0].join(",")
                    } else if (o.indexOf("R") > -1) {
                        var y = ["-", "-", "-", "-", "-"];
                        c = o.replace(/[R]/g, "") * 1,
                        h = n.number.random({
                            min: 0,
                            max: 4,
                            size: c,
                            repeat: 0,
                            sort: 1
                        })[0],
                        p = n.number.random({
                            min: 0,
                            max: 9,
                            size: c,
                            repeat: 0,
                            sort: 1
                        })[0];
                        for (var g = 0; g < h.length; g++) y.splice(h[g], 1, p[g]);
                        l = y.join(",");
                    } else if (o.indexOf("F") > -1) {
                        c = o.replace(/[F]/g, "") * 1;
                        d = c == 2 ? "": "\u5355\u5f0f";
                        a = c == 6 ? 3 : 2;
                        if (c == 3) {
                            var b = n.number.eachCombo(n.number.random({
                                min: 0,
                                max: 9,
                                size: a,
                                repeat: 0,
                                sort: 0
                            })[0], 2);
                            l = b[0][0] + "," + b[0][1] + "," + b[0][1]
                        } else c == 2 ? l = n.number.random({
                            min: 0,
                            max: 9,
                            size: a,
                            repeat: 0,
                            sort: 1
                        })[0].join(",") : l = n.number.random({
                            min: 0,
                            max: 9,
                            size: a,
                            repeat: 0,
                            sort: 1
                        })[0].join(",")
                    }
                    var w = o + "|1|" + l,
                    E;
                    if (o == "DD") {
                        var S = l.split("");
                        E = n.mobile.bszs["b" + S[0]] + n.mobile.bszs["b" + S[1]]
                    } else E = l;
                    r.append('<li pt="' + o + '" code="' + l + '" count="1"><a href="javascript:;" class="cp-cls">X</a><strong class="red">' + n.mobile.gname[o] + d + "\uff1a</strong>" + E + "</li>"),
                    n.localstorage.setItem(n.mobile.storageName, (n.localstorage.getItem(n.mobile.storageName) + ";" + w).replace(/^;|;$/g, "")),
                    s = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 + 1,
                    s > 1 && n.mobile.isZN && n.mobile.intellectZH(),
                    n.localstorage.setItem(n.mobile.storageMulName, s)
                }
            } else r.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
            n.mobile.intellectZH(),
            n.localstorage.removeItem(n.mobile.storageMulName),
            n.localstorage.removeItem(n.mobile.storageName);
            n.mobile.count()
        }),
        n.mobile.intellectZH = function(e) {
            e || (t(".xq-nav a").removeClass("on").eq(0).addClass("on"), t(".infolist").addClass("none").eq(0).removeClass("none"), t("#zhbox").addClass("none")),
            t("#zzhlist").html(""),
            t("#zcount,#zprice").text("0")
        },
        t("#createzh").on(n.lottery.tap,
        function() {
            var r = t("#ownCount").text() * 1,
            i = t("#mycart").find("li").not(".nocode");
            if (r === 0) {
                e.alert("\u8bf7\u5148\u8fdb\u884c\u6295\u6ce8");
                return
            }
            if (i.length > 1) {
                e.alert("\u667a\u80fd\u8ffd\u53f7\u53ea\u9002\u7528\u4e8e\u5355\u6ce8\u53f7\u7801");				
                return
            }
            if (t.trim(t("#zhexp").val()) * 1 < 1) {
                e.alert("\u8bf7\u586b\u5199\u8ffd\u53f7\u671f\u6570");
                return
            }
            if (t.trim(t("#zhbs").val()) * 1 < 1) {
                e.alert("\u8bf7\u586b\u5199\u8d77\u59cb\u500d\u6570");
                return
            }
            if (n.mobile.ylTP == "money") {
                if (t.trim(t("#moneylv").val()) * 1 < 1) {
                    e.alert("\u8bf7\u586b\u5199\u5168\u7a0b\u6700\u4f4e\u76c8\u5229");
                    return
                }
            } else if (t.trim(t("#alllv").val()) * 1 < 1) {
                e.alert("\u8bf7\u586b\u5199\u5168\u7a0b\u6700\u4f4e\u76c8\u5229\u7387");
                return
            }
            var s = r * n.mobile.price,
            o = t("#mycart").find("li").attr("pt"),
            u = n.mobile.jjprice[o],
            a = u - s;
            if (a < 1) {
                e.alert("\u60a8\u7684\u6295\u6ce8\u91d1\u989d\u5df2\u5927\u4e8e\u7406\u8bba\u6700\u4f4e\u4e2d\u5956\u5956\u91d1\uff0c\u53ef\u80fd\u65e0\u6cd5\u76c8\u5229\uff0c\u8bf7\u91cd\u65b0\u9009\u53f7");
                return
            }
            var f = a / s * 100,
            l = (t("#prevMoney").val() || 0) * 1,
            c = (t("#zhexp").val() || 10) * 1,
            h = (t("#zhbs").val() || 1) * 1,
            p;
            if (n.mobile.ylTP == "all") {
                p = (t("#alllv").val() || 30) * 1;
                if (f <= p) {
                    e.alert("\u8d62\u5229\u7387\u8bbe\u7f6e\u8fc7\u5927\uff0c\u65e0\u6cd5\u8fdb\u884c\u8ba1\u7b97\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e(\u6b64\u6b21\u65b9\u6848\u6700\u5927\u8d62\u5229\u7387\u7ea6\u4e3a\uff1a" + parseInt(f, 10) + "%)");
                    return
                }
            } else p = (t("#moneylv").val() || 10) * 1;
            var d = [];
            for (var v = 0; v < c; v++) {
                var m = 1,
                g;
                n.mobile.ylTP == "money" ? m = Math.ceil((l + p) / (u - s)) : m = Math.ceil(l * (p + 100) / (100 * u - 100 * s - p * s)),
                m = m < h ? h: m,
                g = l + m * s;
                if (g > 3e5) {
                    e.alert("\u6295\u6ce8\u603b\u91d1\u989d\u5df2\u8d85\u8fc7\u4e09\u5341\u4e07\uff0c\u8d85\u8fc7\u90e8\u5206\u4e0d\u518d\u8ba1\u7b97");
                    break
                }
                l += m * s;
                var y = Math.floor((u * m - l) / l * 100);
                d.push('<tr><td width="13%"><em>|</em>' + (v + 1) + '</td><td width="15%"><em>|</em><cite class="bei red">' + m + '</cite> \u500d</td><td width="26%"><em>|</em><cite class="red">' + l + '</cite> \u5143</td><td width="26%"><em>|</em><cite class="red">' + (u * m - l) + '</cite> \u5143</td><td width="20%"><cite class="red">' + y + "</cite> %</td></tr>")
            }
            t("#zzhlist").html(d.join("")),
            t("#zcount").text(c),
            t("#zprice").text(l - t("#prevMoney").val()),
            setTimeout(function() {
                new iScroll("scroller")
            },
            50)
        }),
        t("#switch").on(n.lottery.tap,
        function() {
            var e = t("#allyl"),
            r = t("#moneyyl"),
            i = t(this),
            s = i.attr("ylTP");
            s == "all" ? (n.mobile.ylTP = "money", r.removeClass("none"), e.addClass("none"), i.attr("ylTP", "money")) : (n.mobile.ylTP = "all", r.addClass("none"), e.removeClass("none"), i.attr("ylTP", "all"))
        }),
        t("#sclear").on(n.lottery.tap,
        function() {
            t("#zhexp,#zhbs,#prevMoney,#alllv,#moneyyl").val("")
        })
    },
    n.mobile.count = function() {
        var e;
        e = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        var r = t("#ownMul").val(),
        i = t("#apMul").val(),
        s = t("#apNum").val();
        t("#ownCount").html(e),
        t("#ownMoney").html(e * n.mobile.price * r),
        t("#apMoney").html(e * n.mobile.price * i * s)
    },
    n.mobile.uiInit = function() {
        t(".xq-nav a").on(n.lottery.tap,
        function() {
            var e = t(this),
            r = e.attr("buy") * 1,
            i = t(".infolist"),
            s = t("#zhbox");
            e.addClass("on").siblings("a").removeClass("on"),
            i.addClass("none"),
            i.eq(r).removeClass("none"),
           r == 2 ? (s.removeClass("none"), n.mobile.isZN = 0, n.mobile.intellectZH("no")) : (s.addClass("none"), n.mobile.isZN = 0)//
        }),
        t(".ipt-6,.ipt-7").on({
            blur: function() {
                var e = t(this),
                r = /(bei|qi)/g,
                i = /[^\d]|^0/g,
                s = e.attr("max") * 1 || 1e5,
                o = e.attr("default") || 0,
                u = e.val().replace(i, "") || o,
                a = e.attr("name");
                e.val(u),
                r.test(a) && n.mobile.count()
            },
            keyup: function() {
                var e = t(this),
                r = /(bei|qi)/g,
                i = /[^\d]|^0/g,
                s = e.val().replace(i, ""),
                o = e.attr("name");
                e.val(s),
                r.test(o) && n.mobile.count()
            }
        })
    },
    n.mobile.submitInit = function() {
        t("#pay_buy").on({
            click: function() {
                var e = t(this),
                r = e.attr("disabled"),
                i = t("#mycart").find(".nocode").length,
                s = t(".xq-nav").find(".on").attr("buy") * 1;
                if (!r) {
                    if (i === 1) return n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),
                    !1;
                    if (s === 2 && !t("#zzhlist").html()) //return n.lottery.alert("\u8bf7\u5148\u751f\u6210\u8ffd\u53f7\u671f\u6b21"),
                    !1;
					if(document.getElementById("mycart").innerHTML==""){n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;return;}
					
					var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
					zhusu=localStorage["storage258001mul"],tjurl="",wanfa1=caizhong,tqihaosum=qihao;
					
					
					var zuihaoNum;
						
					if(tk1=="infolist")//»ñÈ¡×Ô¹º
					{
						var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="/Trade/Include/Ajax_ZG_G.asp";
					}
					else if(tk2=="infolist")//»ñÈ¡×·ºÅ
					{
						var bbb=document.getElementById("stopbuy").checked;var qisu=document.getElementById("apNum").value;var beisu=document.getElementById("apMul").value;
					    var sum=document.getElementById("apMoney").innerHTML;if(bbb) var zhuihaotz="1";else zhuihaotz="0";tjurl="/Trade/Include/Ajax_ZG_G.asp";qisu2=beisu;
						var showbeisu=beisu;for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;zuihaoNum = qisu;
						var tqihao=qihao.split("-"),a=Number(tqihao[1]);
						for(var j=1;j<qisu;j++)
						{
							a++;
							var b;
							if(czname=="Txffc"){
								if(a<10) b="000"+a;
								else if(a<100) b="00"+a;
								else if(a<1000) b="0"+a;
								else if(a>=1000) b=a;
							}
							else if(czname=="Ssc" || czname=="Hnwfc" || czname=="Ynwfc"){
								if(a<10) b="00"+a;
								else if(a<100) b="0"+a;
								else if(a>=100) b=a;
							}
							else{
								if(a<10) b="0"+a;
								else b=a;
							}
							tqihaosum=tqihaosum+","+tqihao[0]+"-"+b;
						}
						beisu=qisu2;qihao=tqihaosum;
						var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1]
						
						
						
					}
					else   //»ñÈ¡ºÏÂò 
					{
                    	var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
						isgk=document.getElementById("ispublic").value,sum=zhusu*2*beisu,ttrengou=Math.ceil(sum*0.05);
						$("#coopCount").html(zhusu);$("#coopMoney").html(sum);
						$("#trengou").html(ttrengou);var ticheng=document.getElementById("royalty").value,
						tjurl="/Trade/Include/Ajax_HM_G.asp",zhifu=$("#tsum").html();
					}
					var k1=localStorage['storage258001'].split(";"),codes="";
					for(var j=0;j<k1.length;j++)
					{
						var k2=k1[j].split("|");
						console.log(k2[0]);
						for(var i=0;i<k2.length;i++)
						{
							if(i==0){switch(k2[0])
							{
								case "F6":
									{
										if(Number(k2[1])>1){wanfa="[316]";wfname="\u7ec4\u516d";}else{wanfa="[704]";wfname="\u4e09\u661f\u7ec4\u516d\u5355\u5f0f";} 
										break;
									}
								case "5D":
									{
										if(Number(k2[1])>1){wanfa="[104]";wfname="\u4e94\u661f\u76f4\u9009\u590d\u5f0f";}else{wanfa="[112]";wfname="\u4e94\u661f\u76f4\u9009\u5355\u5f0f";} 
										break;
									}
								case "5T":
									{
										if(Number(k2[1])>1){wanfa="[124]";wfname="\u4e94\u661f\u901a\u9009\u590d\u5f0f";}else{wanfa="[125]";wfname="\u4e94\u661f\u901a\u9009\u5355\u5f0f";} 
										break;
									}
								case "4D":
									{
										if(Number(k2[1])>1){wanfa="[802]";wfname="\u56db\u661f\u590d\u5f0f";}else{wanfa="[801]";wfname="\u56db\u661f\u5355\u5f0f";} 
										break;
									}
								case "3D":
									{
										if(Number(k2[1])>1){wanfa="[105]";wfname="\u4e09\u661f\u76f4\u9009\u590d\u5f0f";}else{wanfa="[113]";wfname="\u4e09\u661f\u76f4\u9009\u5355\u5f0f";} 
										break;
									}
								case "F3":
									{
										if(Number(k2[1])>1){wanfa="[315]";wfname="\u4e09\u661f\u7ec4\u4e09\u590d\u5f0f";}else{wanfa="[703]";wfname="\u4e09\u661f\u7ec4\u4e09\u5355\u5f0f";} 
										break;
									}
								case "2D":
									{
										if(Number(k2[1])>1){wanfa="[106]";wfname="\u4e8c\u661f\u76f4\u9009\u590d\u5f0f";}else{wanfa="[114]";wfname="\u4e8c\u661f\u76f4\u9009\u5355\u5f0f";} 
										break;
									}
								case "F2":
									{
										if(Number(k2[1])>1){wanfa="[116]";wfname="\u4e8c\u661f\u7ec4\u9009\u590d\u5f0f";}else{wanfa="[117]";wfname="\u4e8c\u661f\u7ec4\u9009\u5355\u5f0f";} 
										break;
									}
								case "1D":
									{
										wanfa="[107]";wfname="\u4e00\u661f";
										break;
									}
								case "DW":
									{
										wanfa="[999]";wfname="\u5b9a\u4f4d";
										break;
									}
							    case "DD":
									{
										wanfa="[111]";wfname="\u5927\u5c0f\u5355\u53cc";
										break;
									}
								case "SD":
									{
										wanfa="[401]";wfname="\u4e09\u661f\u7ec4\u4e09\u80c6\u62d6";
										break;
									}
								case "LD":
									{
										wanfa="[402]";wfname="\u4e09\u661f\u7ec4\u516d\u80c6\u62d6";
										break;
									}
								case "3H":
									{
										wanfa="[304]";wfname="\u4e09\u661f\u76f4\u9009\u548c\u503c";
										break;
									}
								case "HD":
									{
										wanfa="[177]";wfname="\u4e09\u7ec4\u5305\u80c6";
										break;
									}
								case "Q3":
									{
										wanfa="[555]";wfname="\u524d\u4e09\u76f4\u9009\u590d\u5f0f";
										break;
									}
								case "QH":
									{
										wanfa="[364]";wfname="\u524d\u4e09\u76f4\u9009\u548c\u503c";
										break;
									}
								case "FQ":
									{
										wanfa="[335]";wfname="\u524d\u4e09\u7ec4\u4e09\u590d\u5f0f";
										break;
									}
								case "SQ":
									{
										wanfa="[203]";wfname="\u524d\u4e09\u7ec4\u4e09\u80c6\u62d6";
										break;
									}
								case "Q6":
									{
										wanfa="[336]";wfname="\u524d\u4e09\u7ec4\u516d\u590d\u5f0f";
										break;
									}
								case "LQ":
									{
										wanfa="[204]";wfname="\u524d\u4e09\u7ec4\u516d\u80c6\u62d6";
										break;
									}
								case "QD":
									{
										wanfa="[178]";wfname="\u524d\u4e09\u4e09\u7ec4\u5305\u80c6";
										break;
									}
								case "Z3":
									{
										wanfa="[455]";wfname="\u4e2d\u4e09\u76f4\u9009\u590d\u5f0f";
										break;
									}
								case "ZH":
									{
										wanfa="[264]";wfname="\u4e2d\u4e09\u76f4\u9009\u548c\u503c";
										break;
									}
								case "FZ":
									{
										wanfa="[235]";wfname="\u4e2d\u4e09\u7ec4\u4e09\u590d\u5f0f";
										break;
									}
								case "SZ":
									{
										wanfa="[103]";wfname="\u4e2d\u4e09\u7ec4\u4e09\u80c6\u62d6";
										break;
									}
								case "Z6":
									{
										wanfa="[236]";wfname="\u4e2d\u4e09\u7ec4\u516d\u590d\u5f0f";
										break;
									}
								case "LZ":
									{
										wanfa="[102]";wfname="\u4e2d\u4e09\u7ec4\u516d\u80c6\u62d6";
										break;
									}
								case "ZD":
									{
										wanfa="[179]";wfname="\u4e2d\u4e09\u4e09\u7ec4\u5305\u80c6";
										break;
									}
								case "3Q":
									{
										wanfa="[725]";wfname="\u524d\u4e09\u7ec4\u4e09\u548c\u503c";
										break;
									}
								case "3Z":
									{
										wanfa="[715]";wfname="\u4e2d\u4e09\u7ec4\u4e09\u548c\u503c";
										break;
									}
								case "6Q":
									{
										wanfa="[726]";wfname="\u524d\u4e09\u7ec4\u516d\u548c\u503c";
										break;
									}
								case "6Z":
									{
										wanfa="[716]";wfname="\u4e2d\u4e09\u7ec4\u516d\u548c\u503c";
										break;
									}
								case "DH":
									{
										wanfa="[405]";wfname="\u76f4\u9009\u80c6\u62d6";
										break;
									}
								case "DQ":
									{
										wanfa="[406]";wfname="\u524d\u4e09\u76f4\u9009\u80c6\u62d6";
										break;
									}
								case "DZ":
									{
										wanfa="[407]";wfname="\u4e2d\u4e09\u76f4\u9009\u80c6\u62d6";
										break;
									}
								case "LHWQ":
								  {
									wanfa = "[801]";
									wfname="\u4e07\u5343\u4f4d\u9f99\u864e";
									break;
								  }
							case "LHWB" :
							  {
								wanfa = "[802]";
								wfname="\u4e07\u767e\u4f4d\u9f99\u864e" 
								break ;
							  }
							case "LHWS" :
							  { 	
								wanfa = "[803]";
								wfname="\u4e07\u5341\u4f4d\u9f99\u864e"
								break;
							  }
							case "LHWG" :
							   { 
								wanfa = "[804]";
								wfname="\u4e07\u4e2a\u4f4d\u9f99\u864e"
								break;
							   }
							 case "LHQB" :
							   {
								wanfa = "[805]";
								wfname="\u5343\u767e\u4f4d\u9f99\u864e"
								break;
							   }
							 case "LHQS" :
							   { 
								 wanfa = "[806]";
								 wfname="\u5343\u5341\u4f4d\u9f99\u864e"
								 break;
							   }
							 case "LHQG" :
							   {
								wanfa = "[807]";
								wfname="\u5343\u4e2a\u4f4d\u9f99\u864e"
								break;
							   }
							 case "LHBS" :
							   {
								wanfa = "[808]";
								wfname="\u767e\u5341\u4f4d\u9f99\u864e" 
								break;
							   }
							 case "LHBG" :
							   {
								wanfa = "[809]";
								wfname="\u767e\u4e2a\u4f4d\u9f99\u864e" 
								break;
							   }
							 case "LHSG" :
							   {
								wanfa = "[800]";
								wfname="\u5341\u4e2a\u4f4d\u9f99\u864e"
								break;
							   }	
						 }}
							if(i==2){if(codes=="") codes=codes+"["+wfname+"]"+k2[i]; else codes=codes+"$"+"["+wfname+"]"+k2[i];}
						}
					}
					var tcodes=codes.split("$");
					if(tcodes.length>1)tcodes[0]=tcodes[0]+"..."+tcodes[tcodes.length-1];
					if(tk3=="infolist")
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+beisu+"</p><p>\u671f\u53f7:"+qihao+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p><p>\u76c8\u5229\u63d0\u6210"+ticheng+"</p><p>\u6211\u8981\u8ba4\u8d2d:"+rengou+"</p><p>\u6211\u8981\u4fdd\u5e95:"+baodi+"</p><p>\u662f\u5426\u516c\u5f00:"+isgk+"</p><p>\u60a8\u9700\u8981\u652f\u4ed8:"+zhifu+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					else if(tk2=="infolist")
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:<p></p>\u73a9\u6cd5:"+wanfa1+"<p></p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"<p></p>\u6ce8\u6570:"+zhusu+"<p></p>\u500d\u6570:"+showbeisu+"<p></p>\u671f\u53f7:"+qihaofw1+"<p></p>\u6295\u6ce8\u91d1\u989d:"+sum+"<p></p>\u65b9\u6848\u4e2d\u5956\u540e\u662f\u5426\u505c\u6b62\u8ffd\u53f7:"+zhuihaotz+"<p></p>\u671f\u6570:"+qisu+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}	
					else
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:<p></p>\u73a9\u6cd5:"+wanfa1+"<p></p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"<p></p>\u6ce8\u6570:"+zhusu+"<p></p>\u500d\u6570:"+beisu+"<p></p>\u671f\u53f7:"+qihao+"<p></p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
				function ttpanduan()
				{
					if(ttun!="")
					{	
						if(zuihaoNum){
							var zhnumset=120;
							if (czname=="Hnwfc" || czname=="Ynwfc") zhnumset=288;
							if (czname=="Txffc") zhnumset=1440;
								var nowExpect = $("#showid").html().split("-")[1];
								if((Number(nowExpect)+Number(zuihaoNum)) > zhnumset){
									alert("\u4eca\u5929\u8ffd\u53f7\u8fd8\u5269 "+(zhnumset-nowExpect)+" \u671f");
									return;
								}
						}
						
						panduan();
					}
					else{
						document.getElementById("ttlogin").style.display="block";		
				    }
				}}return;
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        })
    },
    n.mobile.postData = function() {
        var e = t(".xq-nav").find(".on").attr("buy") * 1,
        r = t("#mycart").find("li"),
        i = t("#pay_buy"),
        s = t.trim(t("#actQH").text()),
        o = t("#zzhlist").find(".bei"),
        u = !1,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g = "",
        y;
        a = t("#ownCount").text() * 1,
        f = t("#ownMoney").text() * 1,
        e == 0 ? (l = t("#ownMul").val(), u = f > n.mobile.maxMoney) : e == 1 ? (c = t("#apMul").val(), h = t("#apNum").val(), p = t("#apMoney").text() * 1, d = t("#stopbuy").prop("checked") ? "0": "999999999", u = p > n.mobile.maxMoney) : (o.each(function(e, n) {
            g += t.trim(t(n).text()) + ","
        }), v = t("#zcount").text(), m = t("#zprice").text() * 1, y = t("#bounsstop").prop("checked") ? "0": "999999999", u = m > n.mobile.maxMoney);
        if (u) {
            n.lottery.alert("\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7" + n.mobile.maxMoney / 1e4 + "\u4e07\uff01");
            return
        }
        var b = "";
        r.each(function() {
            var e = t(this),
            r = e.attr("pt"),
            i = e.attr("code"),
            s = e.attr("count") * 1,
            o,
            u,
            a,
            f = [];
            if (/(F)/i.test(r)) {
                u = r.replace(/(F)/ig, "") * 1,
                u == 3 ? a = 2 : u == 6 && (a = 3);
                if (u == 2) s > 1 ? b += "F2|" + i.replace(/,/gi, "") + ";": b += "Z2|" + i + ";";
                else if (s > 1) {
                    f = i.split(","),
                    o = n.number.eachCombo(f, a);
                    for (var l = 0; l < o.length; l++) u == 3 ? b += "Z3|" + o[l][0] + "," + o[l][1] + "," + o[l][1] + ";" + "Z3" + "|" + o[l][0] + "," + o[l][0] + "," + o[l][1] + ";": b += "Z3|" + o[l].join(",") + ";"
                } else b += "Z3|" + i + ";"
            } else b += r + "|" + i + ";"
        });
        var w = {
            BetType: "bet",
            BetCodes: b.replace(/^;|;$/g, ""),
            LotID: n.mobile.lotType,
            OneMoney: 2,
            BetPageID: "2001",
            DrawNo: s
        };
        e == 0 ? (w.BetMoney = f, w.BetMulti = l) : e == 1 ? (w.BetType = "trc", w.BetMulti = c, w.ChipCount = a, w.ChipMoney = a * 2, w.TraceCount = h, w.TotalMoney = p, w.StopBonus = d) : (w.BetType = "trc", w.BetMulti = g.replace(/^,|,$/g, ""), w.ChipCount = a, w.ChipMoney = a * 2, w.TraceCount = v, w.TotalMoney = m, w.StopBonus = y),
        n.lottery.ajaxData(w,
        function() {
            n.mobile.callbacks()
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.codeViewInit(),
        n.mobile.codeConfInit(),
        n.mobile.uiInit(),
        n.mobile.submitInit()
    })
})(window);