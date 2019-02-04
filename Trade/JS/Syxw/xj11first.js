function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var czname=cansu("type"),caizhong="",kaijiang=czname,qihaoid="kjlist",gp=1,dm="",tjies="",tcanyu="";
if(czname=="Syxw"){ caizhong="\u6c5f\u897f\u0031\u0031\u9009\u0035";dm=1;tjies=22;tcanyu=1;}
else if(czname=="GdSyxw"){ caizhong="\u5e7f\u4e1c\u0031\u0031\u9009\u0035";dm=6;tjies=24;tcanyu=7;}
else if(czname=="JsSyxw"){ caizhong="\u6c5f\u82cf\u0031\u0031\u9009\u0035";dm=15;tjies=148;tcanyu=14;}
else if(czname=="ShSyxw"){ caizhong="\u4e0a\u6d77\u0031\u0031\u9009\u0035";dm=16;tjies=167;tcanyu=16;}
else if(czname=="LlSyxw"){ caizhong="\u8fbd\u5b81\u0031\u0031\u9009\u0035";dm=17;tjies=165;tcanyu=15;}
else if(czname=="XjSyxw"){ caizhong="\u65b0\u7586\u0031\u0031\u9009\u0035";dm=18;tjies=21;tcanyu=68;}
else if(czname=="Syydj"){ caizhong="\u0031\u0031\u8fd0\u593a\u91d1";dm=12;tjies=23;tcanyu=8;}
else if(czname=="FjSyxw"){ caizhong="\u798f\u5efa\u0031\u0031\u9009\u0035";dm=21;tjies=21;tcanyu=64;}
else if(czname=="AhSyxw"){ caizhong="\u5b89\u5fbd\u0031\u0031\u9009\u0035";dm=25;tjies=149;tcanyu=13;}
else if(czname=="ZjSyxw"){ caizhong="\u6d59\u6c5f\u0031\u0031\u9009\u0035";dm=26;tjies=166;tcanyu=59;}
else if(czname=="HljSyxw"){ caizhong="\u9ed1\u9f99\u6c5f\u0031\u0031\u9009\u0035";dm=27;tjies=21;tcanyu=65;}
else if(czname=="HebSyxw"){ caizhong="\u6cb3\u5317\u0031\u0031\u9009\u0035";dm=28;tjies=21;tcanyu=66;}
else if(czname=="JlSyxw"){ caizhong="\u5409\u6797\u0031\u0031\u9009\u0035";dm=29;tjies=21;tcanyu=70;}
else if(czname=="TjSyxw"){ caizhong="\u5929\u6d25\u0031\u0031\u9009\u0035";dm=30;tjies=21;tcanyu=33;}
$.ajax({
	url:"/Trade/Include/GetMoney.asp",
	type:"POST",
	dataType:"xml",
	async:false,
	data:{
		caizhong:escape("\u0031\u0031\u9009\u0035"),
	},
	success: function(data)
	{
		var err = $(data).find("row");
		jiangr2=$(err[0]).attr("a2"),
		jiangr3=$(err[0]).attr("a3"),
		jiangr4=$(err[0]).attr("a4"),
		jiangr5=$(err[0]).attr("a5"),
		jiangr6=$(err[0]).attr("a6"),
		jiangr7=$(err[0]).attr("a7"),
		jiangr8=$(err[0]).attr("a8"),
		jiangr1=$(err[0]).attr("a1"),
		jiangzhi2=$(err[0]).attr("a11");
		jiangzhu2=$(err[0]).attr("a12"),
		jiangzhi3=$(err[0]).attr("a9"),
		jiangzhu3=$(err[0]).attr("a10");
		
	},
});
function lianjie(){ document.getElementById("kjlianjie").href="/KaiJiang/caizhongkj.asp?caizhong="+dm;	
					  document.getElementById("tjies").href="/News/newsxq.asp?xq="+tjies;	
					  document.getElementById("tcanyu").href="/Trade/?type="+tcanyu;
					  $("#plus").html(jiangr3);}
(function(e) {
    var t = e.$,zoust,
    n = e.kureicp;
	if(czname=="Syxw"){zoust=n.lottery.lotType.dlc;}
	else if(czname=="GdSyxw"){zoust=n.lottery.lotType.gd11;}
	else if(czname=="JsSyxw"){zoust="#"}
	else if(czname=="ShSyxw"){zoust=n.lottery.lotType.sh11;}
	else if(czname=="LlSyxw"){zoust=n.lottery.lotType.ln11}
	else if(czname=="XjSyxw"){zoust=n.lottery.lotType.xj11}
	else if(czname=="Syydj"){zoust=n.lottery.lotType.syy}
    n.mobile.lotType = n.lottery.lotType.xj11,
    n.mobile.price = n.lottery.price,
    n.mobile.kjfreq = 3e3,
    n.mobile.ylfreq = 5e3,
    n.mobile.issuefreq = 3e3,
    n.mobile.chartissuefreq = 1e4,
    n.mobile.getBounsTimer = null,
    n.mobile.clearCacheUrl_dev = "#",
    n.mobile.qtopbetlistUrl_dev = "#",
    n.mobile.qmissedanaUrl_dev = "/Trade/Include/KR.Ajax.asp",
    n.mobile.getkpkjcodeUrl_dev = "#",
    n.mobile.qcurissueUrl_dev = "#",
    n.mobile.getlossstatUrl_dev = "#",
    n.mobile.getchartUrl_dev = n.lottery.APIChart + "/zst/qmchartdata", //×ßÊÆÍ¼²É¼¯
    n.mobile.getchartqkjUrl_dev = n.lottery.APIChart + "#",
    n.mobile.play = "normal",
    n.mobile.isHelp = 0,
    n.mobile.touchSlider = null,
    n.mobile.distance,
    n.mobile.kjQi,
    n.mobile.cart = {
        group: 0,
        code: "",
        count: 0
    },
    n.mobile.title = {
        r1: "\u524d\u4e00",
        r2: "\u4efb\u4e8c",
        r3: "\u4efb\u4e09",
        r4: "\u4efb\u56db",
        r5: "\u4efb\u4e94",
        r6: "\u4efb\u516d",
        r7: "\u4efb\u4e03",
        r8: "\u4efb\u516b",
        zhu2: "\u524d\u4e8c\u7ec4\u9009",
        zhu3: "\u524d\u4e09\u7ec4\u9009",
        zhi2: "\u524d\u4e8c\u76f4\u9009",
        zhi3: "\u524d\u4e09\u76f4\u9009"
    },
    n.mobile.jjprice = {
        r1: jiangr1,
        r2: jiangr2,
        r3: jiangr3,
        r4: jiangr4,
        r5: jiangr5,
        r6: jiangr6,
        r7: jiangr7,
        r8: jiangr8,
        zhu2: jiangzhu2,
        zhu3: jiangzhu3,
        zhi2: jiangzhi2,
        zhi3: jiangzhi3,
    },
    n.mobile.ItemID = {
        r1: 27011,
        r2: 27002,
        r3: 27003,
        r4: 27004,
        r5: 27005,
        r6: 27006,
        r7: 27007,
        r8: 27008,
        zhi2: 27012,
        zhi3: 27013,
        zhu2: 27022,
        zhu3: 27023
    },
    n.mobile.game = {
        r2: "\u90092\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u4efb\u610f2\u4e2a\u6570\u5b57",
        r3: "\u90093\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u4efb\u610f3\u4e2a\u6570\u5b57",
        r4: "\u90094\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u4efb\u610f4\u4e2a\u6570\u5b57",
        r5: "\u90095\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u7684\u5168\u90e85\u4e2a\u6570\u5b57",
        r6: "\u90096\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u7684\u5168\u90e85\u4e2a\u6570\u5b57",
        r7: "\u90097\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u7684\u5168\u90e85\u4e2a\u6570\u5b57",
        r8: "\u90098\u4e2a\u53f7\u7801\uff0c\u731c\u4e2d\u5f00\u5956\u53f7\u7801\u7684\u5168\u90e85\u4e2a\u6570\u5b57",
        r1: "\u90091\u4e2a\u53f7\u4e0e\u5f00\u5956\u53f7\u7801\u7684\u9996\u4f4d\u76f8\u540c\u5373\u4e2d\u5956",
        zhi2: "\u90092\u4e2a\u53f7\u4e0e\u5f00\u5956\u524d2\u4e2a\u53f7\u76f8\u540c\u4e14\u987a\u5e8f\u4e00\u81f4",
        zhu2: "\u90092\u4e2a\u53f7\u4e0e\u5f00\u5956\u524d2\u4e2a\u53f7\u76f8\u540c(\u987a\u5e8f\u4e0d\u9650)",
        zhi3: "\u90093\u4e2a\u53f7\u4e0e\u5f00\u5956\u524d3\u4e2a\u53f7\u76f8\u540c\u4e14\u987a\u5e8f\u4e00\u81f4",
        zhu3: "\u90093\u4e2a\u53f7\u4e0e\u5f00\u5956\u524d3\u4e2a\u53f7\u76f8\u540c(\u987a\u5e8f\u4e0d\u9650)"
    },
    n.mobile.dt = {
        r2: "\u90091\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c112\u4e2a",
        r3: "\u90091-2\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c113\u4e2a",
        r4: "\u90091-3\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c114\u4e2a",
        r5: "\u90091-4\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c115\u4e2a",
        r6: "\u90091-5\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c116\u4e2a",
        r7: "\u90091-6\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c117\u4e2a",
        r8: "\u90091-7\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c118\u4e2a",
        zhu2: "\u90091\u4e2a\u80c6\u7801\uff0c1-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c112\u4e2a",
        zhu3: "\u90091-2\u4e2a\u80c6\u7801\uff0c2-10\u4e2a\u62d6\u7801\uff0c\u76f8\u52a0\u81f3\u5c114\u4e2a"
    },
    n.mobile.des = {
        r: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u6bd4\uff1a\u5927\u53f706\uff5e11\uff0c\u5c0f\u53f701\uff5e05\u3002\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u5927\u6570\u548c\u5c0f\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u5f00\u51fa06 02 05 09 11\uff0c\u5927\u5c0f\u6bd4\u5373\u4e3a3\uff1a2\u3002<br>\u5947\u5076\u6bd4\uff1a\u5947\u657001\u300103 \u300105\u300107\u300109\u300111\uff0c\u5076\u657002\u300104\u300106\u300108\u300110\u3002\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u5947\u6570\u548c\u5076\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u5f00\u51fa06 01 05 09 11\uff0c\u5947\u5076\u6bd4\u5373\u4e3a4\uff1a1\u3002<br>\u8de8\u5ea6\uff1a\u5f00\u5956\u53f7\u7801\u4e2d\u6700\u5927\u53f7\u7801\u51cf\u53bb\u6700\u5c0f\u53f7\u7801\u540e\u7684\u5dee\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f702 09 07 11 06\uff0c\u8de8\u5ea6\u503c\u4e3a9(11-2=9)\u3002<br>\u91cd\u53f7\u4e2a\u6570\uff1a\u8fde\u7eed\u4e24\u671f\u51fa\u73b0\u76f8\u540c\u53f7\u7801\u7684\u4e2a\u6570\u3002\u793a\u4f8b\uff1a\u4e0a\u671f\u5956\u53f701 02 03 04 05\u3001\u672c\u671f\u5956\u53f703 05 06 10 11 \uff0c\u91cd\u53f7\u4e2a\u6570\u662f2\uff1b",
        zhi1: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a06\uff5e11\u5c5e\u5927\u53f7\uff0c01\uff5e05\u5c5e\u5c0f\u53f7\u3002<br>\u5947\u5076\u53f7\uff1a01\u300103 \u300105\u300107\u300109\u300111\u5c5e\u5947\u6570\uff0c02\u300104\u300106\u300108\u300110\u5c5e\u5076\u6570\u3002<br>\u8d28\u5408\u53f7\uff1a01\u300102\u300103\u300105\u300107\u300111\u5c5e\u8d28\u6570\uff0c04\u300106\u300108\u300109\u300110\u5c5e\u5408\u6570\u3002<br>012\u8def\uff1a\u7b2c\u4e00\u4f4d\u5956\u53f7\u96643\u5f97\u5230\u7684\u4f59\u6570\u5206\u5e03\u300201\u300104\u300107\u300110\u5c5e1\u8def\uff0c02\u300105\u300108\u300111\u5c5e2\u8def\uff0c03\u300106\u300109\u5c5e0\u8def\u3002<br>\u632f\u5e45\uff1a\u4e0a\u671f\u7b2c\u4e00\u4f4d\u5956\u53f7\u4e0e\u672c\u671f\u7b2c\u4e00\u4f4d\u5956\u53f7\u7684\u5dee\u503c\u3002",
        zhi2: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a06\uff5e11\u5c5e\u5927\u53f7\uff0c01\uff5e05\u5c5e\u5c0f\u53f7\u3002<br>\u5947\u5076\u53f7\uff1a01\u300103 \u300105\u300107\u300109\u300111\u5c5e\u5947\u6570\uff0c02\u300104\u300106\u300108\u300110\u5c5e\u5076\u6570\u3002<br>\u8d28\u5408\u53f7\uff1a01\u300102\u300103\u300105\u300107\u300111\u5c5e\u8d28\u6570\uff0c04\u300106\u300108\u300109\u300110\u5c5e\u5408\u6570\u3002",
        zhi3: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002",
        zhu2: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a\u5927\u53f706\uff5e11\uff0c\u5c0f\u53f701\uff5e05\u3002<br>\u5927\u5c0f\u5f62\u6001\uff1a\u6bcf\u671f\u5956\u53f7\u524d\u4e24\u4f4d\u6839\u636e\u51fa\u7403\u987a\u5e8f\u6240\u5bf9\u5e94\u7684\u5927\u5c0f\u8d70\u52bf\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e24\u4f4d\u5f00\u51fa\uff1a07 08\uff0c\u5927\u5c0f\u5f62\u6001\u5373\u4e3a\u5927-\u5927\u3002<br>\u5927\u5c0f\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u524d\u4e24\u4f4d\u5927\u6570\u548c\u5c0f\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e24\u4f4d\u5f00\u51fa06 02\uff0c\u5927\u5c0f\u6bd4\u5373\u4e3a1\uff1a1\u3002<br>\u5947\u5076\u53f7\uff1a\u5947\u657001\u300103 \u300105\u300107\u300109\u300111\uff0c\u5076\u657002\u300104\u300106\u300108\u300110\u3002<br>\u5947\u5076\u5f62\u6001\uff1a\u6bcf\u671f\u5956\u53f7\u524d\u4e24\u4f4d\u6839\u636e\u51fa\u7403\u987a\u5e8f\u6240\u5bf9\u5e94\u7684\u5947\u5076\u8d70\u52bf\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e24\u4f4d\u5f00\u51fa\uff1a07 08\uff0c\u5947\u5076\u5f62\u6001\u5373\u4e3a\u5947-\u5076\u3002<br>\u5947\u5076\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u524d\u4e24\u4f4d\u5947\u6570\u548c\u5076\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e24\u4f4d\u5f00\u51fa06 02\uff0c\u5947\u5076\u6bd4\u5373\u4e3a0\uff1a2\u3002<br>\u8de8\u5ea6\uff1a\u5f00\u5956\u53f7\u7801\u4e2d\u6700\u5927\u53f7\u7801\u51cf\u53bb\u6700\u5c0f\u53f7\u7801\u540e\u7684\u5dee\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e24\u4f4d\u5f00\u51fa09 02\uff0c\u8de8\u5ea6\u503c\u4e3a7(9-2=7)\u3002",
        zhu3: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a\u5927\u53f706\uff5e11\uff0c\u5c0f\u53f701\uff5e05\u3002<br>\u5927\u5c0f\u5f62\u6001\uff1a\u6bcf\u671f\u5956\u53f7\u524d\u4e09\u4f4d\u6839\u636e\u51fa\u7403\u987a\u5e8f\u6240\u5bf9\u5e94\u7684\u5927\u5c0f\u8d70\u52bf\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e09\u4f4d\u5f00\u51fa\uff1a07 08 05\uff0c\u5927\u5c0f\u5f62\u6001\u5373\u4e3a\u5927-\u5927-\u5c0f\u3002<br>\u5927\u5c0f\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u524d\u4e09\u4f4d\u5927\u6570\u548c\u5c0f\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e09\u4f4d\u5f00\u51fa06 02 11\uff0c\u5927\u5c0f\u6bd4\u5373\u4e3a2\uff1a1\u3002<br>\u5947\u5076\u53f7\uff1a\u5947\u657001\u300103 \u300105\u300107\u300109\u300111\uff0c\u5076\u657002\u300104\u300106\u300108\u300110\u3002<br>\u5947\u5076\u5f62\u6001\uff1a\u6bcf\u671f\u5956\u53f7\u524d\u4e09\u4f4d\u6839\u636e\u51fa\u7403\u987a\u5e8f\u6240\u5bf9\u5e94\u7684\u5947\u5076\u8d70\u52bf\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e09\u4f4d\u5f00\u51fa\uff1a07 08 05\uff0c\u5947\u5076\u5f62\u6001\u5373\u4e3a\u5947-\u5076-\u5947\u3002<br>\u5947\u5076\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u524d\u4e09\u4f4d\u5947\u6570\u548c\u5076\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e09\u4f4d\u5f00\u51fa06 02 11\uff0c\u5947\u5076\u6bd4\u5373\u4e3a1\uff1a2\u3002<br>\u8de8\u5ea6\uff1a\u5f00\u5956\u53f7\u7801\u4e09\u4f4d\u4e2d\u6700\u5927\u53f7\u7801\u51cf\u53bb\u6700\u5c0f\u53f7\u7801\u540e\u7684\u5dee\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u524d\u4e09\u4f4d\u5f00\u51fa09 02 10\uff0c\u8de8\u5ea6\u503c\u4e3a8(10-2=8)\u3002"
    },
    n.mobile.AsynDownData = function() {
        var e = t("#setting"),
        r = n.string.getUrlParam("pt") || n.localstorage.getItem(n.mobile.storagePlayName) || "r3",
        i = t("#selected"),
        s = "btn-pop-on",
        o = t("#container");
        i.attr("href", "./goumai.asp?type="+czname),
        t("#navtit").html(caizhong+'-<cite id="game">' + n.mobile.title[r] + '</cite><span class="head-arr"><em></em></span>'),
        o.find("a[play='" + r + "']").addClass(s),
        n.mobile.defaults(t("#normal"), t(".line-3"), r),
        n.mobile.updateBetHelper(r);
        var u = n.localstorage.getItem(n.mobile.storageName),
        a = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        u && (n.mobile.cart.code = u + ";", n.mobile.cart.group = u.split(/;/g).length, n.mobile.cart.count = a),
        t("#group").text(n.mobile.cart.group);
        var f = '<p>{cur}\u671f\u5f00\u5956\uff1a<strong class="red">{number}</strong></p>';
        t.getJSON(n.mobile.clearCacheUrl_dev + "?r=" + t.now(),
        function(i) {
            if (i) {
                var s = i.info;
                e.attr({
                    endtime: s.EndTime,
                    prevtime: s.DsTimeSpace,
                    issale: s.IsOpen,
                    pt: r
                }),
                n.mobile.distance = s.issue,
                n.mobile.countDownInit(s.EndTime, s.DsTimeSpace),
                n.mobile.dealPlus(s.issue);
                var o = i.blist,
                u, a, l, c, h = [];
                for (var p = 0; p < o.length; p++) c = o[p].issue,
                a = c.replace(/^\d{8}/g, "") * 1,
                u = n.mobile.distance.replace(/^\d{8}/g, "") * 1,
                a = a = a < 10 ? "0" + a: a,
                l = o[p].number,
                u = u = u < 10 ? "0" + u: u,
                p === 0 ? (n.mobile.kjQi = c, t("#fq1").text(a), t("#fq2").text(u), t("#fcode").text(l)) : h.push(f.replace(/{cur}/g, a).replace(/{number}/g, l));
                t("#kjlist").html(h.join("")),
                n.mobile.updataMiss(n.mobile.kjQi)
            }
        })
    },
    n.mobile.dealPlus = function(e, r) {
        var i = t("#setting").attr("pt"),
        s = t("#xj11"),
        o = t("#plus");
        if (/^(r|zhu)[3567]$/.test(i) && r) {
            var u = (new Date(e.replace(/\d{2}$/, "").replace(/^(\d{4})(\d{2})(\d{2})$/, "$1/$2/$3"))).getDay() * 1;
            if (u === 6) {
                var a = {
                    r3: "19+6",
                    r5: "540+110",
                    r6: "90+10",
                    r7: "26+4",
                    zhu3: "195+55"
                };
                n.mobile.jjprice.r3 = 25,
                n.mobile.jjprice.r5 = 650,
                n.mobile.jjprice.r6 = 100,
                n.mobile.jjprice.r7 = 30,
                n.mobile.jjprice.zhu3 = 250,
                o.text(a[i])
            } else n.mobile.jjprice.r3 = 19,
            n.mobile.jjprice.r5 = 540,
            n.mobile.jjprice.r6 = 90,
            n.mobile.jjprice.r7 = 26,
            n.mobile.jjprice.zhu3 = 195,
            o.text(n.mobile.jjprice[i])
        } else o.text(n.mobile.jjprice[i]);
        s.text(n.mobile.game[i])
    },
    n.mobile.selectCodeInit = function() {
        new t.touchSlider(".filt-popc", {
            wrap: ".filt-popc-cont",
            trigger: ".filt-popc-nav",
            duration: 500,
            len: 4
        }),
        t("#normal").on(n.lottery.tap, "li",
        function() {
            var e = t("#setting").attr("pt"),
            r = t(this),
            i = r.parent().attr("m") * 1,
            s = t.trim(r.find("span").text()) * 1 - 1,
            o = t("#normal").find("dl").length,
            u = t("#normal").find("ul");
            r.toggleClass("selected");
            if (e == "zhi2") {
                var a = u.eq(1).find("li").eq(s),
                f = u.eq(2).find("li").eq(s);
                i == 1 ? f.removeClass("selected") : a.removeClass("selected")
            } else if (e == "zhi3") for (var l = 1; l <= o; l++) l != i && u.eq(l).find("li").eq(s).removeClass("selected");
            n.mobile.count()
        }),
        t("#biledt").on(n.lottery.tap, "li",
        function() {
            var e = t("#setting").attr("pt"),
            r = t(this),
            i = t("#biledt").find("ul"),
            s = r.parent().attr("type"),
            o = t.trim(r.find("span").text()),
            u = e.replace(/^(r|zhu)/, "") * 1 - 1;
            r.toggleClass("selected");
            if (s == "d") {
                var a = i.eq(0).find(".selected").length,
                f = i.eq(1).find(".selected").length;
                a > u ? (r.removeClass("selected"), alert(n.mobile.title[e] + "\u6700\u591a\u53ea\u80fd\u9009" + u + "\u4e2a\u80c6\u7801")) : i.eq(1).find("li").eq(o * 1 - 1).removeClass("selected")
            } else i.eq(0).find("li").eq(o * 1 - 1).removeClass("selected");
            t("#count").text("0"),
            t("#price").text("0"),
            t("#calcu").html(""),
            n.mobile.count()
        }),
        t(".toall").on(n.lottery.tap,
        function() {
            var e = t(this),
            r = e.parent().find("li"),
            i = e.text();
            i == "\u5168\u9009" ? (r.addClass("selected"), e.text("\u5168\u6e05")) : (e.text("\u5168\u9009"), r.removeClass("selected"));
            if (n.mobile.play == "biledt") {
                var s = t("#biledt").find("ul"),
                o = s.eq(1).find("li"),
                u = t.map(s.eq(0).find(".selected"),
                function(e) {
                    return t.trim(t(e).find("span").text()) * 1 - 1
                });
                for (var a = 0; a < u.length; a++) o.eq(u[a]).removeClass("selected")
            }
            n.mobile.count()
        }),
        t(".pop-box2").on("click", "a",
        function(e) {
            e.preventDefault();
            var r = t(this),
            i = r.attr("play"),
            s = t("#setting"),
            o = t("#detxt"),
            u = t("#count"),
            a = t("#price"),
            f = t("#calcu"),
            l = t(".line-3"),
            c = t("#chartscd"),
            h = t("#myhelp"),
            p = t("#myparam"),
            d = t(".pick-b"),
            v = t(".bet-helper-counter"),
            m = t(".bet-helper"),
            g = r.parent().parent().attr("action");
            n.mobile.play = g;
            var y = t("#game"),
            b = t("#normal"),
            w = t("#biledt"),
            E = t("#loss"),
            S = t("#charts"),
            x = "btn-pop-on",
            T = "none";
            t(".btn-pop").removeClass(x),
            r.addClass(x),
            t(".head-arr").removeClass("head-arron"),
            t(".pop-box2").addClass("spill"),
            s.attr("pt", i),
            y.text(n.mobile.title[i]),
            t(".pick-box").addClass(T),
            m.addClass(T),
            v.addClass(T),
            g != "charts" ? (s.parent().removeClass(T), c.addClass(T), h.removeClass(T), o.removeClass(T), p.addClass(T), d.removeClass("fix")) : (s.parent().addClass(T), c.removeClass(T), p.removeClass(T), h.addClass(T), o.addClass(T), d.addClass("fix"));
            switch (n.mobile.play) {
            case "normal":
                b.removeClass(T),
                n.mobile.defaults(b, l, i),
                n.mobile.updataMiss(n.mobile.kjQi),
                n.mobile.updateBetHelper();
                break;
            case "biledt":
                w.removeClass(T),
                v.removeClass(T),
                n.mobile.updataMiss(n.mobile.kjQi),
                n.mobile.updateBetHelper();
                break;
            case "loss":
                E.removeClass(T),
                n.mobile.getmyplayLoss("init");
                break;
            case "charts":
                b.removeClass(T),
                S.removeClass(T),
                n.mobile.defaults(b, l, i),
                n.mobile.updataMiss(n.mobile.kjQi),
                t("#charts_play").text(n.mobile.title[i]);
                var N = t("#second"),
                C = t("#third"),
                k = ['<thead id="tabb"><tr><td colspan="14">\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...</td></tr></thead><tbody id="kdch">', '<thead id="tabq"><tr><td colspan="13">\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...</td></tr></thead><tbody id="dxqo"></tbody>'];
                n.mobile.touchSlider ? n.mobile.touchSlider.reset({
                    steps: 0,
                    left: 0,
                    curIndex: 0
                }) : n.mobile.touchSlider = new t.touchSlider(".in-entry", {
                    wrap: ".chart-tab",
                    trigger: ".xq-nav-chart",
                    duration: 500,
                    callback: function() {
                        n.mobile.getCharts()
                    }
                }),
                C.html(k[0]),
                N.html(k[1]),
                n.mobile.getCharts()
            }
            n.mobile.clearAll(u, a, f, o, i)
        }),
        t("#navtit").on(n.lottery.tap,
        function() {
            var e = t(".head-arr"),
            r = t(".pop-box2"),
            i = "head-arron",
            s = t(".btn-menu"),
            o = "btn-menu-on",
            u = "spill";
            s.hasClass(o) && s.trigger(n.lottery.tap),
            e.hasClass(i) ? (e.removeClass(i), r.addClass(u)) : (e.addClass(i), r.removeClass(u))
        }),
        t(".top-date").on(n.lottery.tap,
        function() {
            var e = t("#kjlist").find("p"),
            n = t(".top-arr"),
            r = "top-arr-on";
            n.hasClass(r) ? (n.removeClass(r), e.addClass("none"), t("#kjlist").css("height", 0), t("#setting").css("height", 22)) : (n.addClass(r), e.removeClass("none"), t("#kjlist").css("height", 88), t("#setting").css("height", 110))
        }),
        t(".btn-menu").on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t(this),
            i = "btn-menu-on",
            s = t(".pop-box2"),
            o = t("#navtit"),
            u = "spill";
            s.hasClass(u) || o.trigger(n.lottery.tap),
            r.hasClass(i) ? (e.addClass(u), r.removeClass(i)) : (e.removeClass(u), r.addClass(i))
        }),
        t(".btn-chart").on(n.lottery.tap,
        function() {
            n.mobile.goChart.call(null, "r3", 3, 0)
        }),
        t(".helphanle").on("click",
        function() {
            var e = t(this),
            r = e.attr("sort") || "help",
            i = function() {
                var i = "none",
                s = "arr-on",
                o = t("#box_" + r),
                u = e.find(".arr");
                o.hasClass(i) ? (u.removeClass(s), o.removeClass(i), r == "help" && (n.mobile.isHelp = 1, n.mobile.myHelper(), t(".myhelpr").removeClass(i))) : (u.addClass(s), o.addClass(i), r == "help" && (t(".myhelpr").addClass(i), n.mobile.isHelp = 0))
            };
            if (r == "help") {
                if (!n.cookie.get("Q")) {
                    n.lightBox.login(i);
                    return
                }
                i()
            } else i()
        }),
        t("#addcart").on({
            click: function() {
                n.mobile.pickBall(t(this))
            },
            touchstart: function() {
                t(this).addClass("btn-addnmu-tap")
            },
            touchend: function() {
                t(this).removeClass("btn-addnmu-tap")
            }
        }),
        t("#bets").on({click: function() {
                var r = n.mobile.cart.group || 0,
                i, s, o = t("#" + n.mobile.play);
                n.mobile.play != "loss" ? (n.mobile.play == "charts" && (o = t("#normal")), i = o.find("dl").not(".none").find("ul"), s = "selected") : (i = t("#myloss"), s = "num-box-on");
                var u = t("#setting").attr("pt"); ! r || i.find("." + s).length > 0 ? n.mobile.pickBall(t(this)) : e.location.href = "./goumai.asp?type="+czname
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        }),
        t("#myloss").on(n.lottery.tap, "div",
        function() {
            var e = t(this),
            r = "num-box-on";
            e.hasClass(r) ? e.removeClass(r) : e.addClass(r),
            n.mobile.count()
        }),
        t("#lossmore").on("click",
        function() {
            var e = t("#lossmore"),
            r = e.attr("total"),
            i = e.attr("curpage");
            i++,
            i > r ? i = r: (e.text("\u6b63\u5728\u83b7\u53d6..."), e.attr("curpage", i), n.mobile.getmyplayLoss("next"))
        }),
        t(".bet-helper").on("click", ".jump-yl",
        function() {
            var e = t("#setting").attr("pt");
            n.mobile.autoSelYL = t(this).attr("idx"),
            t(".bet-helper").addClass("none"),
            t("[action=loss]").find("[play=" + e + "]").trigger("click"),
            t(".filt-popc-nav li").eq(2).trigger("click")
        }),
        t(".bet-helper").on("click", ".jump-dt",function() {
            var e = t("#setting").attr("pt");
            t(".bet-helper").addClass("none"),
            t("[action=biledt]").find("[play=" + e + "]").trigger("click"),
            t(".filt-popc-nav li").eq(1).trigger("click");
            var r = n.number.random({
                max: 10,
                min: 0,
                size: 2
            })[0],
            i = t("#biledt"),
            s = i.find("[type=d] li");
            t.map(r,
            function(e) {
                s.eq(e).trigger(n.lottery.tap)
            }),
            i.find(".toall").trigger(n.lottery.tap)
        }),
        t(".bet-helper-counter").on("click",
        function() {
            var e = t(".pop-box2"),
            r = t("#navtit");
            e.hasClass("spill") || r.trigger(n.lottery.tap),
            n.mobile.dtCalculator()
        });
        var r = n.string.getJsonHash();
        if (r.play) {
            var i = "r5",
            s = 3,
            o = 0,
            u = null;
            r.pt && (i = r.pt),
            r.play == "chart" ? r.sub && (o = r.sub) : r.play == "loss" && (s = 2, o = "no"),
            u = setTimeout(function() {
                n.mobile.goChart.call(null, i, s, o)
            },
            400)
        }
    },
    n.mobile.goChart = function(e, n, r) {
        var i = t(".filt-popc-entry").find("ul").eq(n),
        s = t(".filt-popc-nav").find("li").eq(n),
        o = i.find("a[play='" + e + "']");
        s.trigger("click"),
        o.trigger("click");
        if (r != "no") {
            var u = null;
            u = setTimeout(function() {
                t("#chart_tab").find("a").eq(r).trigger("click")
            },
            200)
        }
    },
    n.mobile.pickBall = function(r) {
        var i = t("#setting").attr("pt"),
        s = "",
        o = {},
        u = t("#count").text() * 1 || 0,
        a = r.attr("id"),
        f = t("#" + n.mobile.play);
        n.mobile.play == "charts" && (f = t("#normal"));
        var l = f.find("dl").not(".none").find("ul");
        if (/^(charts|normal)$/.test(n.mobile.play)) {

            var c = ["\u7b2c\u4e00\u4f4d", "\u7b2c\u4e8c\u4f4d", "\u7b2c\u4e09\u4f4d"],
            h = "",
            p = 1,
            d = 1,
            v = 0;
            /(zhi)/g.test(i) ? p = i.replace(/(zhi)/gi, "") * 1 : d = i.replace(/(r|zhu)/gi, "") * 1;
            for (var m = 0; m < p; m++) l.eq(m).find(".selected").length < d && (h += c[m] + "", v++);
            if (v > 0) {
                if (p > 1) e.alert("\u8bf7\u5728" + h + "\u81f3\u5c11" + (v > 1 ? "\u5404": "") + "\u9009\u62e9 1 \u4e2a\u53f7\u7801");
                else {
                    var g = i.replace(/(r|zhu)/gi, "") * 1;
                    l.eq(0).find(".selected").length < g && e.alert("\u8bf7\u81f3\u5c11\u9009\u62e9 " + g + " \u4e2a\u53f7\u7801")
                }
                return
            }
            for (var m = 0; m < p; m++) {

                var y = l.eq(m).find(".selected");

                o["code" + m] = t.map(y,
                function(e) {
                    return t.trim(t(e).find("span").text())
                })

                if(i == "zhi2" && m < 1) o["code" + m] = o["code" + m] + "*";

            }

            for (var m = 0; m < p; m++){

                i == "zhi2" ? s += o["code" + m] : s += o["code" + m].join(" ") + ",";

            } 

            n.mobile.cart.code += i + "|" + u + "|" + s.replace(/^,|,$/g, "") + ";",
            n.mobile.cart.count += u,
            n.mobile.cart.group += 1
        } else if (n.mobile.play == "biledt") {
            var b, w, E;
            b = l.eq(0).find(".selected").length,
            w = l.eq(1).find(".selected").length,
            E = i.replace(/(r|zhu)/gi, "") * 1;
            if (b === 0) {
                e.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u80c6\u7801");
                return
            }
            if (w === 0) {
                e.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u62d6\u7801");
                return
            }
            if (b + w < E || b < 1 || w < 1) {
                e.alert("\u80c6\u7801\u52a0\u62d6\u7801\u81f3\u5c11\u8981\u9009\u62e9 " + E + "\u4e2a");
                return
            }
            var S = [],
            x = [];
            S = t.map(l.eq(0).find(".selected"),
            function(e) {
                return t.trim(t(e).find("span").text())
            }),
            x = t.map(l.eq(1).find(".selected"),
            function(e) {
                return t.trim(t(e).find("span").text())
            }),
            n.mobile.cart.code += i + "dt|" + u + "|" + S.join(" ") + "\u62d6" + x.join(" ").replace(/^,|,$/g, "") + ";",
            n.mobile.cart.count += u,
            n.mobile.cart.group += 1
        } else {
            var T = t("#myloss").find(".num-box-on"),
            N;
            if (!T.length) {
                e.alert("\u8bf7\u5148\u9009\u62e9\u4e00\u6ce8\u53f7\u7801\u518d\u6295\u6ce8\uff01");
                return
            }
            for (var C = 0; C < T.length; C++) N = t(T[C]).find("cite").text(),
            /zhi/i.test(i) && (N = N.split(" ").join(",")),
            n.mobile.cart.code += i + "|1|" + N + ";",
            n.mobile.cart.count += 1,
            n.mobile.cart.group += 1
        }
        var s = n.mobile.cart.code.replace(/;$/g, ""),
        u = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName, s),
        n.localstorage.setItem(n.mobile.storageMulName, u),
     a == "addcart" ? (t("#group").text(n.mobile.cart.group), n.mobile.clearAll(t("#count"), t("#price"), t("#calcu"), t("#detxt"), i)) : e.location.href = "./goumai.asp?type="+czname
    },
    n.mobile.clearAll = function(e, r, i, s, o) {
        var u;
        n.mobile.play == "biledt" ? u = n.mobile.dt[o] : u = n.mobile.game[o],
        n.mobile.dealPlus(n.mobile.distance),
        n.mobile.play == "loss" ? t("#myloss").find(".num-box-on").removeClass("num-box-on") : (t(".pick-box ul").find(".selected").removeClass("selected"), t(".toall").text("\u5168\u9009")),
        e.text(0),
        r.text(0),
        i.html("")
    },
    n.mobile.defaults = function(e, t, n) {
        var r = e.find("dl"),
        i = "none";
        t.addClass(i),
        r.addClass(i);
        if (/r1|zhi/.test(n)) {
            var s = n.replace(/(r|zhi)/, "") * 1;
            s == 2 && t.eq(0).removeClass(i),
            s == 3 && (t.eq(0).removeClass(i), t.eq(1).removeClass(i));
            for (var o = 1; o <= s; o++) r.eq(o).removeClass(i)
        } else r.eq(0).removeClass(i)
    },
    n.mobile.getChartbase = function(e) {
        var n = e.Body,
        r = [];
        return t.each(n,
        function(e, t) {
            var n = [],
            i = t;
            for (var s = 0; s < i.length; s++) {
                var o = "",
                u = i[s].T * 1,
                a = i[s].S;
                if (u == 2 || u == 3) o = "class = 'pitch'";
                n.push('<td class="loss"><span ' + o + ">" + a + "</span></td>")
            }
            r.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
        }),
        r
    },
    n.mobile.pollingCharts = function(e) {
        t.ajax({
            url: n.mobile.getchartqkjUrl_dev + "?lotId=" + n.mobile.lotType + "&issue=" + e + "&r=" + t.now(),
            dataType: "jsonp",
            success: function(t) {
                t && (t[0].Issue == t.preIssue ? n.mobile.getCharts() : setTimeout(function() {
                    n.mobile.pollingCharts.apply(null, [e])
                },
                n.mobile.chartissuefreq))
            }
        })
    },
    n.mobile.getCharts = function() {
        var e = t("#setting"),
        r = e.attr("pt"),
        i = t("#chart_tab"),
        s = t(".chart-tab"),
        o = t("#des"),
        u,
        a = 0,
        f = i.find("a"),
        l = /^(zhi)\d{1}$/g.test(r) || r == "r1",
        c = /^r\d{1}$/.test(r) && r != "r1",
        h = /^zhu\d{1}$/.test(r);
        l && (a = r.replace(/^(zhi|r)(\d{1})$/, "$2") * 1);
        var p = "none",
        d = [572, 604],
        v = ["\u4e8c", "\u4e09"];
        s.css("height", d[0]);
        var m = i.find(".sel").attr("m") * 1 || 0,
        g = [];
        if (c) g = ["\u5f00\u5956\u53f7\u7801", "\u5927\u5c0f/\u5947\u5076", "\u8de8\u5ea6/\u91cd\u53f7"],
        o.html(n.mobile.des.r);
        else if (h) {
            var y = r.replace("zhu", "") * 1;
            g = ["\u5f00\u5956\u53f7\u7801", "\u5927\u5c0f/\u5947\u5076", "\u524d" + v[y - 2] + "\u8de8\u5ea6"],
            o.html(n.mobile.des["zhu" + y])
        } else l && (a == 1 ? (g = ["\u7b2c\u4e00\u4f4d\u5956\u53f7", "\u524d\u4e00\u5f62\u6001", "\u524d\u4e00\u632f\u5e45"], o.html(n.mobile.des.zhi1)) : a == 2 ? (g = ["\u7b2c\u4e00\u4f4d\u5956\u53f7", "\u7b2c\u4e8c\u4f4d\u5956\u53f7", "\u524d\u4e8c\u5f62\u6001"], o.html(n.mobile.des.zhi2)) : a == 3 && (g = ["\u7b2c\u4e00\u4f4d\u5956\u53f7", "\u7b2c\u4e8c\u4f4d\u5956\u53f7", "\u7b2c\u4e09\u4f4d\u5956\u53f7"], o.html(n.mobile.des.zhi3)));
        for (var b = 0; b < 3; b++) f.eq(b).text(g[b]);
        switch (m) {
        case 0:
            c ? u = "hmfbm": h ? u = "q" + r.replace("zhu", "") + "zxm": l && (u = "dww1m");
            break;
        case 1:
            c ? (u = "dxjom", s.css("height", d[1])) : h ? (u = "q" + r.replace("zhu", "") + "dxm", s.css("height", d[1])) : l && (a === 1 ? (u = "dw1xtm", s.css("height", d[1])) : u = "dww2m");
            break;
        case 2:
            c ? (u = "kdchm", s.css("height", d[1])) : h ? u = "q" + r.replace("zhu", "") + "kdm": l && (a === 1 ? u = "dw1zfm": a == 2 ? (u = "q2xtm", s.css("height", d[1])) : a == 3 && (u = "dww3m"))
        }
        var w = ['<tr><th width="28">\u671f\u53f7</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="6" class="br2">\u5f62\u6001\u5206\u5e03</th><th colspan="3">012\u8def</th></tr><tr><th>\u5927</th><th>\u5c0f</th><th>\u5947</th><th>\u5076</th><th>\u8d28</th><th  class="br2">\u5408</th><th>0</th><th>1</th><th>2</th></tr>', '<tr><th width="28">\u671f\u53f7</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="6" class="br2">\u5927\u5c0f\u6bd4</th><th colspan="6">\u5947\u5076\u6bd4</th></tr><tr><th>0:5</th><th>1:4</th><th>2:3</th><th>3:2</th><th>4:1</th><th class="br2">5:0</th><th>0:5</th><th>1:4</th><th>2:3</th><th>3:2</th><th>4:1</th><th>5:0</th></tr>', '<tr><th rowspan="2" width="8%">\u671f\u53f7</th><th colspan="7" class="br2">\u8de8\u5ea6</th><th colspan="6">\u91cd\u53f7\u4e2a\u6570</th></tr><tr><th width="7.0769%">4</th><th width="7.0769%">5</th><th width="7.0769%">6</th><th width="7.0769%">7</th><th width="7.0769%">8</th><th width="7.0769%">9</th><th width="7.0769%" class="br2">10</th><th width="7.0769%">0</th><th width="7.0769%">1</th><th width="7.0769%">2</th><th width="7.0769%">3</th><th width="7.0769%">4</th><th width="7.0769%">5</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="6" class="br2">\u7b2c\u4e00\u4f4d</th><th colspan="6">\u7b2c\u4e8c\u4f4d</th></tr><tr><th>\u5927</th><th>\u5c0f</th><th>\u5947</th><th>\u5076</th><th>\u8d28</th><th  class="br2">\u5408</th><th>\u5927</th><th>\u5c0f</th><th>\u5947</th><th>\u5076</th><th>\u8d28</th><th>\u5408</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="4" class="br2">\u5927\u5c0f</th><th colspan="4">\u5947\u5076</th></tr><tr><th>\u5f62\u6001</th><th>0:2</th><th>1:1</th><th class="br2">2:0</th><th>\u5f62\u6001</th><th>0:2</th><th>1:1</th><th>2:0</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="5" class="br2">\u5927\u5c0f</th><th colspan="5">\u5947\u5076</th></tr><tr><th>\u5f62\u6001</th><th>0:3</th><th>1:2</th><th>2:1</th><th class="br2">3:0</th><th>\u5f62\u6001</th><th>0:3</th><th>1:2</th><th>2:1</th><th>3:0</th></tr>', '<tr><th width="28">\u671f\u53f7</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>', '<tr><th width="28">\u671f\u53f7</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>'];
        t.ajax({
            url: n.mobile.getchartUrl_dev + "?lotId=" + zoust + "&chartType=" + u + "&r=" + t.now(),
            dataType: "jsonp",
            success: function(e) {
                if (e) switch (m) {
                case 0:
                    t("#hmfb").html(n.mobile.getChartbase(e[0]).join(""));
                    break;
                case 1:
                    var i = [];
                    if (l) if (a == 1) {
                        t("#tabq").html(w[1]);
                        var s = e[0].Body,
                        o = e[1].Body;
                        t.each(s,
                        function(e, t) {
                            var n = [],
                            r = t,
                            s = o[e];
                            for (var u = 0; u < r.length; u++) {
                                var a = "loss",
                                f = "",
                                l = r[u].T * 1,
                                c = r[u].S;
                                if (c == "\u5927" || c == "\u5c0f") a = "ball01";
                                else if (c == "\u5947" || c == "\u5076") a = "ball02";
                                else if (c == "\u8d28" || c == "\u5408") a = "ball03";
                                u == r.length - 1 && (f = " br2"),
                                n.push("<td class='" + a + f + "'><span>" + c + "</span></td>")
                            }
                            for (var u = 0; u < s.length; u++) {
                                var a = "loss",
                                l = s[u].T * 1,
                                c = s[u].S;
                                l == 2 && (a = "ball04"),
                                n.push("<td class=" + a + "><span>" + c + "</span></td>")
                            }
                            i.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    } else t("#tabq").html(w[0]),
                    i = n.mobile.getChartbase(e[0]);
                    else if (c) {
                        t("#tabq").html(w[3]);
                        var u = e[0].Body,
                        f = e[1].Body;
                        t.each(u,
                        function(e, t) {
                            var n = [],
                            r = t,
                            s = f[e];
                            for (var o = 0; o < r.length; o++) {
                                var u = "loss",
                                a = "",
                                l = r[o].T * 1,
                                c = r[o].S;
                                l == 2 && (u = "greenbg"),
                                o == r.length - 1 && (a = " br2"),
                                n.push("<td class='" + u + a + "'><span>" + c + "</span></td>")
                            }
                            for (var o = 0; o < s.length; o++) {
                                var u = "loss",
                                l = s[o].T * 1,
                                c = s[o].S;
                                l == 2 && (u = "bluebg"),
                                n.push("<td class=" + u + "><span>" + c + "</span></td>")
                            }
                            i.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    } else if (h) {
                        r.replace("zhu", "") * 1 === 3 ? t("#tabq").html(w[7]) : t("#tabq").html(w[6]);
                        var p = e[0].Body,
                        d = e[1].Body,
                        v = e[2].Body,
                        g = e[3].Body;
                        t.each(p,
                        function(e, t) {
                            var n = t,
                            r = d[e],
                            s = v[e],
                            o = g[e],
                            u = [];
                            for (var a = 0; a < n.length; a++) {
                                var f = n[a].S;
                                u.push("<td>" + f + "</td>")
                            }
                            for (var a = 0; a < r.length; a++) {
                                var l = "loss",
                                c = "",
                                h = r[a].T * 1,
                                f = r[a].S;
                                h == 2 && (l = "ball06"),
                                a == r.length - 1 && (c = " br2"),
                                u.push("<td class='" + l + c + "'><span>" + f + "</span></td>")
                            }
                            for (var a = 0; a < s.length; a++) {
                                var f = s[a].S;
                                u.push("<td>" + f + "</td>")
                            }
                            for (var a = 0; a < o.length; a++) {
                                var l = "loss",
                                c = "",
                                h = o[a].T * 1,
                                f = o[a].S;
                                h == 2 && (l = "ball07"),
                                u.push("<td class='" + l + c + "'><span>" + f + "</span></td>")
                            }
                            i.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + u.join("") + "</tr>")
                        })
                    }
                    t("#dxqo").html(i.join(""));
                    break;
                case 2:
                    var y = [];
                    if (l) if (a == 1) {
                        t("#tabb").html(w[2]);
                        var s = e[0].Body;
                        t.each(s,
                        function(e, t) {
                            var n = [],
                            r = t;
                            for (var i = 0; i < r.length; i++) {
                                var s = "loss",
                                o = "",
                                u = r[i].T * 1,
                                a = r[i].S;
                                u == 2 && (s = "ball05"),
                                i == r.length - 1 && (o = " br2"),
                                n.push("<td class='" + s + o + "'><span>" + a + "</span></td>")
                            }
                            y.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    } else if (a == 2) {
                        t("#tabb").html(w[5]);
                        var s = e[0].Body,
                        o = e[1].Body;
                        t.each(s,
                        function(e, t) {
                            var n = [],
                            r = t,
                            i = o[e];
                            for (var s = 0; s < r.length; s++) {
                                var u = "loss",
                                a = "",
                                f = r[s].T * 1,
                                l = r[s].S;
                                if (l == "\u5927" || l == "\u5c0f") u = "ball01";
                                else if (l == "\u5947" || l == "\u5076") u = "ball02";
                                else if (l == "\u8d28" || l == "\u5408") u = "ball03";
                                s == r.length - 1 && (a = " br2"),
                                n.push("<td class='" + u + a + "'><span>" + l + "</span></td>")
                            }
                            for (var s = 0; s < i.length; s++) {
                                var u = "loss",
                                a = "",
                                f = i[s].T * 1,
                                l = i[s].S;
                                if (l == "\u5927" || l == "\u5c0f") u = "ball01";
                                else if (l == "\u5947" || l == "\u5076") u = "ball02";
                                else if (l == "\u8d28" || l == "\u5408") u = "ball03";
                                s == r.length - 1 && (a = " br2"),
                                n.push("<td class='" + u + a + "'><span>" + l + "</span></td>")
                            }
                            y.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    } else t("#tabb").html(w[0]),
                    y = n.mobile.getChartbase(e[0]);
                    else if (c) {
                        t("#tabb").html(w[4]);
                        var v = [],
                        b = e[0].Body,
                        E = e[1].Body,
                        v = [];
                        t.each(b,
                        function(e, t) {
                            var n = [],
                            r = t,
                            i = E[e];
                            for (var s = 0; s < r.length; s++) {
                                var o = "loss",
                                u = "",
                                a = r[s].T * 1,
                                f = r[s].S;
                                a == 2 && (o = "greenbg"),
                                s == r.length - 1 && (u = " br2"),
                                n.push("<td class='" + o + u + "'>" + f + "</td>")
                            }
                            for (var s = 0; s < i.length; s++) {
                                var o = "loss",
                                a = i[s].T * 1,
                                f = i[s].S;
                                a == 2 && (o = "bluebg"),
                                n.push("<td class=" + o + ">" + f + "</td>")
                            }
                            y.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    } else if (h) {
                        r.replace("zhu", "") * 1 === 3 ? t("#tabb").html(w[9]) : t("#tabb").html(w[8]);
                        var s = e[0].Body;
                        t.each(s,
                        function(e, t) {
                            var n = [],
                            r = t;
                            for (var i = 0; i < r.length; i++) {
                                var s = "loss",
                                o = "",
                                u = r[i].T * 1,
                                a = r[i].S;
                                u == 2 && (s = "greenbg"),
                                i == r.length - 1 && (o = " br2"),
                                n.push("<td class='" + s + o + "'><span>" + a + "</span></td>")
                            }
                            y.push("<tr><td>" + e.replace(/^(\d{8})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    }
                    t("#kdch").html(y.join(""))
                }
            }
        })
    },
    n.mobile.getmyplayLoss = function(e, r) {
        var i = t("#myloss"),
        s = t("#lossname"),
        o = t("#lossmore"),
        u,
        a = r || "",
        f = t("#setting").attr("pt") || "r3";
        e == "init" ? u = 1 : u = o.attr("curpage") || 1,
        t.ajax({
            url: n.mobile.getlossstatUrl_dev + "?LotID=" + n.mobile.lotType + "&LotIssue=" + a + "&IssueCount=0&Page=" + u + "&ItemID=" + n.mobile.ItemID[f] + "&rnd" + Math.random(),
            dataType: "json",
            success: function(t) {
                var s = t.Data,
                a = t.Total * 1 > 5 ? 5 : t.Total * 1;
                if (s) {
                    var f = [],
                    l;
                    if (e == "init") {
                        var c = s.sort(function(e, t) {
                            return t.PossRatio - e.PossRatio
                        })[0].PossRatio,
                        h = s.sort(function(e, t) {
                            return t.CurLoss - e.CurLoss
                        })[0].CurLoss;
                        for (var p = 0; p < s.length; p++) {
                            var d = h == s[p]["CurLoss"] ? ' style="color: #ba2020;font-weight:bold;"': "",
                            v = c == s[p]["PossRatio"] ? ' style="color: #ba2020;font-weight:bold;"': "";
                            l = "<td" + d + ">" + s[p].CurLoss + "</td><td>" + s[p].MaxLoss + "</td><td" + v + ">" + s[p].PossRatio + "</td>",
                            f.push('<tr><td><div class="num-box"><cite class="b">' + s[p].Code + "</cite><em>\u221a</em></div></td>" + l + "</tr>")
                        }
                    } else for (var p = 0; p < s.length; p++) l = "<td>" + s[p].CurLoss + "</td><td>" + s[p].MaxLoss + "</td><td>" + s[p].PossRatio + "</td>",
                    f.push('<tr><td><div class="num-box"><cite class="b">' + s[p].Code + "</cite><em>\u221a</em></div></td>" + l + "</tr>");
                    e == "next" ? (i.append(f.join("")), o.attr("curpage", u)) : (i.html(f.join("")), o.attr("curpage", 1)),
                    o.attr("total", a),
                    u == a ? o.text("\u5df2\u83b7\u53d6\u5168\u90e8") : o.text("\u83b7\u53d6\u66f4\u591a"),
                    n.mobile.autoSelYL && (i.find(".num-box").eq(n.mobile.autoSelYL).trigger(n.lottery.tap), n.mobile.autoSelYL = null)
                } else setTimeout(function() {
                    n.mobile.getmyplayLoss("init", r)
                },
                1e4)
            }
        }),
        s.text(n.mobile.title[f])
    },
    n.mobile.getBouns = function(e) {
        t.ajax({
            url: n.mobile.getkpkjcodeUrl_dev + "?lotid=" + n.mobile.lotType + "&issue=" + e + "&r=" + Math.random(),
            dataType: "json",
            success: function(r) {
                var i, s, r = r[0];
                r.issue == e && r.code ? (s = e.replace(/^\d{8}/g, "") * 1, s == 90 && (s = 0), t("#fcode").text(r.code), n.mobile.kjQi = e, n.mobile.play == "normal" && (n.mobile.myHelper(n.mobile.kjQi), n.mobile.updataMiss(n.mobile.kjQi), n.mobile.updateBetHelper()), n.mobile.play == "biledt" && (n.mobile.myHelper(n.mobile.kjQi), n.mobile.updataMiss(n.mobile.kjQi), n.mobile.updateBetHelper()), n.mobile.play == "charts" && (setTimeout(function() {
                    n.mobile.pollingCharts.apply(null, [n.mobile.kjQi])
                },
                n.mobile.chartissuefreq), n.mobile.updataMiss(n.mobile.kjQi)), n.mobile.play == "loss" && (n.mobile.myHelper(n.mobile.kjQi), n.mobile.getmyplayLoss("init", e))) : (clearTimeout(n.mobile.getBounsTimer), n.mobile.getBounsTimer = setTimeout(function() {
                    n.mobile.getBouns(e)
                },
                n.mobile.kjfreq))
            }
        })
    },
    n.mobile.dealActsue = function(e) {
        var r = e.Issue,
        i = n.mobile.distance,
        s = i.replace(/^\d{8}/g, "") * 1;
        n.mobile.distance = r;
        var o = t("#setting"),
        u = o.find("p"),
        a = n.mobile.distance.replace(/^\d{8}/g, "") * 1;
        a = a = a < 10 ? "0" + a: a,
        o.attr("issale", e.IsOpen),
        n.mobile.dealPlus(r),
        t("#kjlist").prepend("<p>" + t("#fq1").text() + '\u671f\u5f00\u5956\uff1a<strong class="red">' + t("#fcode").text() + "</strong></p>"),
        t("#fq1").text(s = s < 10 ? "0" + s: s),
        t("#fq2").text(a),
        t("#fcode").text("\u5f00\u5956\u4e2d..."),
        n.mobile.getBouns(i),
        /^(normal|biledt|loss)$/g.test(n.mobile.play) && n.mobile.myHelper(),
        n.mobile.countDownInit(e.EndTime, e.FsTimeSpace)
    },
    n.mobile.checkIssue = function(e) {
        var t = e.Issue == n.mobile.distance;
        return ! t
    },
    n.mobile.getActIssue = function(e) {
        var r = n.mobile.issuefreq || 5e3;
        t.ajax({
            url: n.mobile.qcurissueUrl_dev + "?LotID=" + e + "&r=" + t.now(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            },
            success: function(t) {
                n.mobile.checkIssue(t) ? n.mobile.dealActsue(t) : setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            }
        })
    },
    n.mobile.countDownInit = function(e, r) {
        var i = t("#setting"),
        s = i.attr("issale") * 1,
        o = t(".friends"),
        u = n.mobile.distance.replace(/^\d{8}/g, "") * 1;
        u = u = u < 10 ? "0" + u: u,
        s ? (o.html('\u8ddd<em id="fq2">' + u + "</em>\u671f\u622a\u6b62:"), n.countdown.start({
            endTime: e * 1 - r * 1,
            sid: ".countdown",
            style: "mm:ss",
            freq: 1e4,
            callback: function() {
                s ? (o.html('\u8ddd<em id="fq2">' + u + "</em>\u671f\u5f00\u5956:"), n.countdown.start({
                    endTime: e * 1,
                    sid: ".countdown",
                    freq: 1e4,
                    endStyle: "\u6b63\u5728\u83b7\u53d6\u4e0b\u4e00\u671f",
                    style: "mm:ss",
                    callback: function() {
                        o.html(""),
                        n.mobile.getActIssue(n.mobile.lotType)
                    }
                })) : o.html("\u6682\u505c\u9500\u552e")
            }
        })) : o.html("\u6682\u505c\u9500\u552e")
    },
    n.mobile.calcuProfit = function(e, r, i, s) {
        var o = n.mobile.jjprice[r],
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v = t("#calcu");
        if (e < 1) v.html("");
        else if (e == 1) v.html('\u5956\u91d1:<em class="red">' + o + '</em>\u5143,\u8d62\u5229<em class="red">' + (o - n.mobile.price * e) + "</em>\u5143");
        else {
            var m = r.replace(/(r)/g, "");
            m.length == 1 && m * 1 > 1 ? /^(normal|charts)$/.test(n.mobile.play) ? (f = n.number.combo(11, m), m * 1 > 5 ? a = n.number.combo(6 + i - 11, m * 1 - 5) : i > 5 ? a = n.number.combo(5, m) : a = n.number.combo(i, m), a > e && (a = e), u = n.number.combo(5 + i - 11, m) || 1, l = o * u - e * n.mobile.price, c = o * a - e * n.mobile.price, p = c > 0 ? "red": "green", d = l > 0 ? "red": "green", h = c > 0 ? "\u8d62\u5229": "\u4e8f\u635f", c == l || m * 1 > 4 ? v.html('\u5956\u91d1:<em class="red">' + o * a + "</em>\u5143," + h + '<em class="' + p + '">' + Math.abs(c) + "</em>\u5143") : v.html('\u5956\u91d1:<em class="red">' + o * u + '</em>\u81f3<em class="red">' + o * a + "</em>\u5143," + h + '<em class="' + d + '">' + (c > 0 ? l: Math.abs(l)) + "</em>\u81f3" + '<em class="' + p + '">' + (c > 0 ? c: Math.abs(c)) + "</em>\u5143")) : (u = 1, m * 1 > 5 ? a = n.number.combo(s + i - 5, m * 1 - 5) : (a = n.number.combo(5 - i, m * 1 - i), s - 6 > m * 1 - i && (u = n.number.combo(s - 6, m * 1 - i))), a > e && (a = e), l = o * u - e * n.mobile.price, c = o * a - n.mobile.price * e, c < 0 ? (p = "green", h = "\u4e8f\u635f") : (p = "red", h = "\u8d62\u5229"), d = l > 0 ? "red": "green", a == 1 || c == l ? v.html('\u5956\u91d1:<em class="red">' + o * a + "</em>\u5143," + h + ' <em class="' + p + '">' + Math.abs(c) + "</em>\u5143") : v.html('\u5956\u91d1:<em class="red">' + o * u + '</em>\u81f3<em class="red">' + o * a + "</em>\u5143," + h + '<em class="' + d + '">' + (c > 0 ? l: Math.abs(l)) + '</em>\u81f3<em class="' + p + '">' + (c > 0 ? c: Math.abs(c)) + "</em>\u5143")) : (l = o - n.mobile.price * e, h = l < 0 ? "\u4e8f\u635f": "\u8d62\u5229", min_c = l < 0 ? "green": "red", v.html('\u5956\u91d1:<em class="red">' + o + "</em>\u5143," + h + '<em class="' + min_c + '">' + Math.abs(l) + "</em>\u5143"))
        }
    },
    n.mobile.count = function() {
        var e = 0,
        r = t("#setting").attr("pt"),
        i,
        s = t("#count"),
        o = t("#price"),
        u = n.mobile.play,
        a = t("#" + u);
        u == "charts" && (a = t("#normal"));
        var f = a.find("dl").not(".none").find("ul");
        if (/^(charts|normal)$/.test(u)) r == "zhi2" || r == "zhi3" ? (e = 1, f.each(function() {
            e *= t(this).find(".selected").length
        })) : r == "zhi1" ? e = f.find(".selected").length: (e = n.number.combo(f.find(".selected").length, r.replace(/(r|zhu)/i, "") * 1), r.indexOf("r") == -1 ? i = 0 : i = f.find(".selected").length),
        n.mobile.calcuProfit(e, r, i);
        else if (u == "biledt") {
            var l = f.eq(0).find(".selected").length,
            c = f.eq(1).find(".selected").length,
            h = r.replace(/(r|zhu)/gi, "") * 1;
            l > 0 && (e = n.number.combo(c, h - l)),
            n.mobile.calcuProfit(e, r, l, c)
        } else e = t("#myloss").find(".num-box-on").length;
        s.text(e),
        o.text("" + e * n.mobile.price)
    },
    n.mobile.updataMiss = function(e) {
        var r = t("#setting").attr("pt"),
        i = t.trim(e),
        s = location.host == "#",
        o;
        r == "r1" ? o = "q1": r == "zhi2" ? o = "q1|zhi2": r == "zhi3" ? o = "q1|zhi2|zhi3": /^zhu\d{1}$/.test(r) ? o = "r2": o = r,
        t.ajax({
            url: n.mobile.qmissedanaUrl_dev + "?LotID=" + n.mobile.lotType + "&Side=&LottType="+czname+"&Issue=" + i + "&pt=" + o + "&r=" + t.now(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.updataMiss.call(null, i)
                },
                n.mobile.ylfreq)
            },
            success: function(e) {
                if (e) {
                    var o, u = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
                    a = [],
                    f = 1;
                    r == "r1" ? (a = [e.q1yl], f = 1) : r == "zhi2" ? (a = [e.q1yl, e.zhi2yl], f = 2) : r == "zhi3" ? (a = [e.q1yl, e.zhi2yl, e.zhi3yl], f = 3) : (/^zhu\d{1}$/.test(r) ? a = [e.r2yl] : a = [e[r + "yl"]], f = 1);
                    if (!a[0] && s) {
                        setTimeout(function() {
                            n.mobile.updataMiss.call(null, i)
                        },
                        n.mobile.ylfreq);
                        return
                    }
                    var l, c, h, p, d = "red";
                    /^(normal|charts)$/.test(n.mobile.play) ? o = t("#normal").find("dl").not(".none").find("ul") : (f = 2, /^zhu\d{1}$/.test(r) ? a = [e.r2yl, e.r2yl] : a = [e[r + "yl"], e[r + "yl"]], o = t("#biledt").find("ul"));
                    for (var v = 0; v < f; v++) l = h = 0,
                    c = o.eq(v).find("em"),
                    c.each(function(e) {
                        p = a[v][u[e]],
                        h < p * 1 && (h = p * 1, l = e),
                        t(this).removeClass(d).html(p)
                    }),
                    c.eq(l).addClass(d)
                } else setTimeout(function() {
                    n.mobile.updataMiss.call(null, i)
                },
                n.mobile.ylfreq)
            }
        })
    },
    n.mobile.myHelper = function(e) {
        var r = n.mobile.isHelp || 0,
        i = e ? "&Issue=" + e: "";
        if (!r) return;
        t.ajax({
            type: "POST",
            url: n.mobile.qtopbetlistUrl_dev + "?LotID=" + n.mobile.lotType + "&TopCount=9" + i + "&r=" + t.now(),
            dataType: "json",
            success: function(r) {
                if (r) {
                    var i = r.length,
                    s = [];
                    if (e && location.host == "#" && i && r[1].status == "\u7b49\u5f85\u5f00\u5956") {
                        setTimeout(function() {
                            n.mobile.myHelper(e)
                        },
                        2e3);
                        return
                    }
                    s.push("<tr>");
                    for (var o = 0; o < i; o++) {
                        var u = "",
                        a = "",
                        f = r[o].issue.replace(/^\d{6}/g, "").replace(/(^\d\d)/g, "$1-"),
                        l = r[o].status,
                        c = r[o].money;
                        o === 0 && (u = "on", a = "red"),
                        l == "\u4e2d\u5956" && (l = "\u4e2d" + c + "\u5143", a = "red"),
                        l == "\u5df2\u6295\u6ce8" && (a = "red"),
                        s.push("<td class=" + u + "><cite>" + f + "</cite>\u671f<br><strong class=" + a + ">" + l + "</strong></td>"),
                        (o + 1) % 3 == 0 && o && s.push("</tr><tr>")
                    }
                    t("#box_help").html(s.join(""))
                } else setTimeout(function() {
                    n.mobile.myHelper(e)
                },
                2e3)
            }
        })
    },
    n.mobile.updateBetHelper = function(e) {
        e = e || t("#setting").attr("pt");
        var r = function() {
            var e = t(".bet-helper dd div"),
            i = t(".bet-helper dd");
            e.eq(0).animate({
                opacity: 0
            },
            300, "easing",
            function() {
                i.append(e.eq(0)),
                e.eq(1).animate({
                    opacity: 1
                },
                300),
                n.mobile.tipOffAnimate = setTimeout(function() {
                    r()
                },
                3e3)
            })
        };
        t.ajax({
            url: n.mobile.getlossstatUrl_dev + "?LotID=" + n.mobile.lotType + "&IssueCount=0&Page=1&ItemID=" + n.mobile.ItemID[e] + "&rnd=" + Math.random(),
            dataType: "json",
            success: function(i) {
                if (i) {
                    var s = i.Data,
                    o = '<div class="jump-yl" idx="<%= key %>"><%= Code %> \u5df2<em class="red"><%= CurLoss %></em>\u671f\u672a\u51fa \u6b32\u51fa\u51e0\u7387 <em class="red"><%= PossRatio %>%</em></div>',
                    u = '<div class="jump-yl" idx="<%= key %>"><%= Code %> \u5df2<em class="red"><%= CurLoss %></em>\u671f\u672a\u51fa</div>',
                    a = o,
                    f = "";
                    switch (e) {
                    case "r3":
                        f += '<div class="jump-dt">\u201c2\u80c6\u5168\u62d6\u201d\u6295\u6ce8\uff0c\u76c8\u5229\u7387\u7206\u589e\u81f3<em class="red">216%</em></div>';
                        break;
                    case "r5":
                        f += '<div class="jump-dt">\u201c2\u80c6\u5168\u62d6\u201d\u6295\u6ce8\uff0c\u76c8\u5229\u7387\u7206\u589e\u81f3<em class="red">221%</em></div>',
                        a = u;
                        break;
                    case "r6":
                    case "r7":
                    case "r8":
                        a = u
                    }
                    if (s.length) {
                        var l = s.slice(0, 2);
                        t.each(l,
                        function(e, t) {
                            t.key = e,
                            f += n.template(a, t)
                        })
                    }
                    t(".bet-helper dd").html(f),
                    n.mobile.tipOffAnimate && clearTimeout(n.mobile.tipOffAnimate),
                    t(".bet-helper").removeClass("none"),
                    s.length > 1 && (n.mobile.tipOffAnimate = setTimeout(function() {
                        r()
                    },
                    3e3))
                } else setTimeout(function() {
                    n.mobile.updateBetHelper()
                },
                1e4)
            }
        })
    },
    n.mobile.dtCalculator = function() {
        var e = t("#setting").attr("pt"),
        r = t(".btn-pop-on").text(),
        i = '<div class="pop-position pop-mobile" style="width:90%;left:5%;top:40px;"><div class="head"><div class="head-tit">' + r + '\u80c6\u62d6\u8ba1\u7b97\u5668</div><a href="javascript:;" class="cls">\u5173\u95ed x</a></div><iframe src="#' + e + '" style="width:100%;height:360px;border:0;"></iframe></div>';
        n.lightBox.show({
            html: i,
            closeSel: ".cls"
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.storagePlayName = "storage" + n.mobile.lotType + "play",
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit(),
		n.mobile.updataMiss()
    })
})(window);