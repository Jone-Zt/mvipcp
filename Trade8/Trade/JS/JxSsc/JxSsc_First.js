
function ttonclick(){
	document.getElementById("kjlianjie").href="/KaiJiang/caizhongkj.asp?caizhong="+dm;
	document.getElementById("tcanyu").href="/Trade/?type="+tcanyu;
	document.getElementById("tjies").href="/News/newsxq.asp?xq="+tjies;
	if(czname=="Ssc") document.getElementById("removejd").style.display="none";
	}

function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var czname=cansu("type"),caizhong="",kaijiang=czname,qihaoid="setting",gp=1,dm="",tjies="",tcanyu="";
if(czname=="JxSsc"){ caizhong="\u6c5f\u897f\u65f6\u65f6\u5f69";dm=19;tjies=17;tcanyu=1;}
else if(czname=="Ssc"){ caizhong="\u91cd\u5e86\u65f6\u65f6\u5f69";dm=4;tjies=18;tcanyu=0;}
else if(czname=="TjSsc"){ caizhong="\u5929\u6d25\u65f6\u65f6\u5f69";dm=22;tjies=18;tcanyu=2;}
else if(czname=="HljSsc"){ caizhong="\u9ed1\u9f99\u6c5f\u65f6\u65f6\u5f69";dm=23;tjies=16;tcanyu=4;}
else if(czname=="Hnwfc"){ caizhong="\u6cb3\u5185\u4e94\u5206\u5f69";dm=24;tjies=18;tcanyu=0;}
else if(czname=="Ynwfc"){ caizhong="\u5370\u5c3c\u4e94\u5206\u5f69";dm=36;tjies=18;tcanyu=0;}
else if(czname=="Txffc"){ caizhong="\u817e\u8baf\u5206\u5206\u5f69";dm=37;tjies=18;tcanyu=0;}

 $.ajax({
        url:"/Trade/Include/GetMoney.asp?"+Math.random(),
        type:"POST",
        dataType:"xml",
        async:true,
        data:{ caizhong:escape(caizhong),},
        success: function(data)
        {
            var err = $(data).find("row"),
            jiang5D=$(err[0]).attr("a1"),
            jiang5T=$(err[0]).attr("a6"),
            jiang4D=$(err[0]).attr("a9"),
            jiang3D=$(err[0]).attr("a2"),
            jiangF3=$(err[0]).attr("a7"),
            jiangF6=$(err[0]).attr("a8"),
            jiang2D=$(err[0]).attr("a3"),
            jiangF2=$(err[0]).attr("a5"),
            jiang1D=$(err[0]).attr("a4"),
            jiangDW=$(err[0]).attr("a10"),
			jiangLH=$(err[0]).attr("lh"), /*龙虎奖金设置 奖金格式 long|hu|he|da|xiao|dan|shuang*/
            //jiangLH = "10,10,5,6,6,6,6",
			jiangDD=$(err[0]).attr("a11");

(function(e) {
    var t = e.$,zoust
    n = e.kureicp;
	if(czname=="Ssc") zoust = n.lottery.lotType.ssccq; else zoust = n.lottery.lotType.sscjx; 
	n.mobile.lotType = n.lottery.lotType.sscjx,
    n.mobile.price = n.lottery.price,
    n.mobile.kjfreq = 2e3,
    n.mobile.ylfreq = 5e3,
    n.mobile.issuefreq = 2e3,
    n.mobile.chartissuefreq = 1e4,
    n.mobile.getBounsTimer = null,
    n.mobile.clearCacheUrl_dev ="#",
    n.mobile.qtopbetlistUrl_dev = "#",
    n.mobile.qmissedanaUrl_dev = "/Trade/Include/KR.Ajax.asp",
    n.mobile.getkpkjcodeUrl_dev = "#",
    n.mobile.qcurissueUrl_dev = "#",
    n.mobile.getlossstatUrl_dev = "#",
    n.mobile.getchartUrl_dev = n.lottery.APIChart + "/zst/qmchartdata",
    n.mobile.getchartqkjUrl_dev = n.lottery.APIChart + "#",
    n.mobile.play = "normal",
    n.mobile.isHelp = 0,
    n.mobile.touchSlider = null,
    n.mobile.distance,
    n.mobile.box = "1",
    n.mobile.cart = {
        group: 0,
        code: "",
        count: 0
    },
    n.mobile.title = {
        "5D": "\u4e94\u661f\u76f4\u9009",
        "5T": "\u4e94\u661f\u901a\u9009",
        "4D": "\u56db\u661f",
        "3D": "\u4e09\u661f\u76f4\u9009",
        "F3": "\u4e09\u661f\u7ec4\u4e09",
        "F6": "\u4e09\u661f\u7ec4\u516d",
        "2D": "\u4e8c\u661f\u76f4\u9009",
        "F2": "\u4e8c\u661f\u7ec4\u9009",
        "1D": "\u4e00\u661f",
        "R1": "\u4efb\u9009\u4e00",
        "R2": "\u4efb\u9009\u4e8c",
        "DD": "\u5927\u5c0f\u5355\u53cc",
		
		"DW": "\u5b9a\u4f4d",
		
        "SD": "\u4e09\u661f\u7ec4\u4e09\u80c6\u62d6",
        "LD": "\u4e09\u661f\u7ec4\u516d\u80c6\u62d6",
        "3H": "\u4e09\u661f\u76f4\u9009\u548c\u503c",
        "HD": "\u4e09\u7ec4\u5305\u80c6",
        "Q3": "\u524d\u4e09\u76f4\u9009",
        "QH": "\u524d\u4e09\u76f4\u9009\u548c\u503c",
        "FQ": "\u524d\u4e09\u7ec4\u4e09",
        "SQ": "\u524d\u4e09\u7ec4\u4e09\u80c6\u62d6",
        "Q6": "\u524d\u4e09\u7ec4\u516d",
        "LQ": "\u524d\u4e09\u7ec4\u516d\u80c6\u62d6",
        "QD": "\u524d\u4e09\u4e09\u7ec4\u5305\u80c6",
        "Z3": "\u4e2d\u4e09\u76f4\u9009",
        "ZH": "\u4e2d\u4e09\u76f4\u9009\u548c\u503c",
        "FZ": "\u4e2d\u4e09\u7ec4\u4e09",
        "SZ": "\u4e2d\u4e09\u7ec4\u4e09\u80c6\u62d6",
        "Z6": "\u4e2d\u4e09\u7ec4\u516d",
        "LZ": "\u4e2d\u4e09\u7ec4\u516d\u80c6\u62d6",
        "ZD": "\u4e2d\u4e09\u4e09\u7ec4\u5305\u80c6",
        "3Q": "\u524d\u4e09\u7ec4\u4e09\u548c\u503c",
        "3Z": "\u4e2d\u4e09\u7ec4\u4e09\u548c\u503c",
        "6Q": "\u524d\u4e09\u7ec4\u516d\u548c\u503c",
        "6Z": "\u4e2d\u4e09\u7ec4\u516d\u548c\u503c",
		"DH": "\u76f4\u9009\u80c6\u62d6",
		"DQ": "\u524d\u4e09\u76f4\u9009\u80c6\u62d6",
		"DZ": "\u4e2d\u4e09\u76f4\u9009\u80c6\u62d6",
		"LHWQ":"\u4e07\u5343\u4f4d\u9f99\u864e",
		"LHWB":"\u4e07\u767e\u4f4d\u9f99\u864e",
		"LHWS":"\u4e07\u5341\u4f4d\u9f99\u864e",
		"LHWG":"\u4e07\u4e2a\u4f4d\u9f99\u864e",
		"LHQB":"\u5343\u767e\u4f4d\u9f99\u864e",
		"LHQS":"\u5343\u5341\u4f4d\u9f99\u864e",
		"LHQG":"\u5343\u4e2a\u4f4d\u9f99\u864e",
		"LHBS":"\u767e\u5341\u4f4d\u9f99\u864e",
		"LHBG":"\u767e\u4e2a\u4f4d\u9f99\u864e",
		"LHSG":"\u5341\u4e2a\u4f4d\u9f99\u864e"
    },
   n.mobile.desc = {
        "5D": "\u6bcf\u4f4d\u90091\u4e2a\u53f7\uff0c\u7ade\u731c\u5f00\u5956\u53f7\u7801\u7684\u5168\u90e85\u4f4d\uff0c\u5956\u91d1"+jiang5D+"\u5143",
        "5T": "\u6bcf\u4f4d\u81f3\u5c11\u9009\u62e91\u4e2a\u53f7\u7801\uff0c\u53ef\u517c\u4e2d\u517c\u5f97\uff0c\u5956\u91d1"+jiang5T+"\u5143",
        "4D": "\u7ade\u731c\u5f00\u5956\u7684\u540e\u56db\u4f4d\u6216\u5176\u4e2d\u7684\u524d\u4e09\u3001\u540e\u4e09\u53f7\u7801\uff0c\u5956\u91d1"+jiang4D+"\u5143",
        "3D": "\u6309\u4f4d\u7ade\u731c\u5f00\u5956\u53f7\u7801\u540e\u4e09\u4f4d\u6570\u5b57\uff0c\u5956\u91d1"+jiang3D+"\u5143",
        F3: "\u81f3\u5c11\u9009\u62e92\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiangF3+"\u5143",
        F6: "\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        "2D": "\u6309\u4f4d\u7ade\u731c\u5f00\u5956\u53f7\u7801\u540e\u4e24\u4f4d\u6570\u5b57\uff0c\u5956\u91d1"+jiang2D+"\u5143",
        F2: "\u7ade\u731c\u5f00\u5956\u53f7\u540e\u4e24\u4f4d\uff0c\u987a\u5e8f\u4e0d\u9650\uff08\u4e0d\u542b\u5bf9\u5b50\u53f7\uff09\uff0c\u5956\u91d1"+jiangF2+"\u5143",
        "1D": "\u7ade\u731c\u5f00\u5956\u53f7\u7801\u6700\u540e\u4e00\u4f4d\uff0c\u5956\u91d1"+jiang1D+"\u5143",
        R1: "\u7ade\u731c\u5f00\u5956\u53f7\u7801\u7684\u4efb\u610f\u4e00\u4f4d\uff0c\u5956\u91d111\u5143",
        R2: "\u7ade\u731c\u5f00\u5956\u53f7\u7801\u7684\u4efb\u610f\u4e24\u4f4d\uff0c\u5956\u91d1116\u5143",
        DD: "\u7ade\u731c\u5f00\u5956\u53f7\u5341\u4f4d\u3001\u4e2a\u4f4d\u7684\u5c5e\u6027\uff0c\u5956\u91d1"+jiangDD+"\u5143",
		
		DW: "\u4efb\u610f\u9009\u4e2d\u4e00\u4e2a\u53f7\u7801\uff0c\u5355\u6ce8\u5956\u91d1"+jiangDW+"\u5143",
		
        SD: "\u9009\u0031\u4e2a\u80c6\u7801\u3001\u0031\uff5e\u0039\u4e2a\u62d6\u7801\uff0c\u80c6\u7801\u52a0\u62d6\u7801\u4e0d\u5c11\u4e8e\u0032\u4e2a\uff0c\u5956\u91d1"+jiangF3+"\u5143",
        LD: "\u9009\u0031\uff5e\u0032\u4e2a\u80c6\u7801\u3001\u0031\uff5e\u0039\u4e2a\u62d6\u7801\uff0c\u80c6\u7801\u52a0\u62d6\u7801\u4e0d\u5c11\u4e8e\u0033\u4e2a\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        "3H": "\u767e\u3001\u5341\u3001\u4e2a\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiang3D+"\u5143",
        "HD": "\u4ece\u4e00\u884c\u4e2d\u4efb\u9009\u5176\u4e2d\u4e00\u4e2a\u6570\u5b57\u4f5c\u4e3a\u6295\u6ce8\u53f7\u7801\uff0c\u5956\u91d1"+jiangF6+"\u5230"+jiang3D+"\u5143",
        "Q3": "\u6bcf\u884c\u81f3\u5c11\u9009\u0031\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiang3D+"\u5143",
        QH: "\u4e07\u3001\u5343\u3001\u767e\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiang3D+"\u5143",
        FQ: "\u81f3\u5c11\u9009\u62e9\u0032\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiangF3+"\u5143",
		SQ: "\u9009\u0031\u4e2a\u80c6\u7801\u3001\u0031\uff5e\u0039\u4e2a\u62d6\u7801\uff0c\u80c6\u7801\u52a0\u62d6\u7801\u4e0d\u5c11\u4e8e\u0032\u4e2a\uff0c\u5956\u91d1"+jiangF3+"\u5143",
        Q6: "\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        LQ: "\u9009\u0031\uff5e\u0032\u4e2a\u80c6\u7801\u3001\u0031\uff5e\u0039\u4e2a\u62d6\u7801\uff0c\u80c6\u7801\u52a0\u62d6\u7801\u4e0d\u5c11\u4e8e\u0033\u4e2a\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        QD: "\u4ece\u4e00\u884c\u4e2d\u4efb\u9009\u5176\u4e2d\u4e00\u4e2a\u6570\u5b57\u4f5c\u4e3a\u6295\u6ce8\u53f7\u7801\uff0c\u5956\u91d1"+jiangF6+"\u5230"+jiangF3+"\u5143",
        Z3: "\u6bcf\u884c\u81f3\u5c11\u9009\u0031\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiang3D+"\u5143",
        ZH: "\u5343\u3001\u767e\u3001\u5341\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiang3D+"\u5143",
        FZ: "\u81f3\u5c11\u9009\u62e9\u0032\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiangF3+"\u5143",
		SZ: "\u9009\u0031\u4e2a\u80c6\u7801\u3001\u0031\uff5e\u0039\u4e2a\u62d6\u7801\uff0c\u80c6\u7801\u52a0\u62d6\u7801\u4e0d\u5c11\u4e8e\u0032\u4e2a\uff0c\u5956\u91d1"+jiangF3+"\u5143",
        Z6: "\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        LZ: "\u9009\u0031\uff5e\u0032\u4e2a\u80c6\u7801\u3001\u0031\uff5e\u0039\u4e2a\u62d6\u7801\uff0c\u80c6\u7801\u52a0\u62d6\u7801\u4e0d\u5c11\u4e8e\u0033\u4e2a\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        ZD: "\u4ece\u4e00\u884c\u4e2d\u4efb\u9009\u5176\u4e2d\u4e00\u4e2a\u6570\u5b57\u4f5c\u4e3a\u6295\u6ce8\u53f7\u7801\uff0c\u5956\u91d1"+jiangF6+"\u5230"+jiangF3+"\u5143",
        "3Q": "\u4e07\u3001\u5343\u3001\u767e\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiangF3+"\u5143",
        "3Z": "\u5343\u3001\u767e\u3001\u5341\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiangF3+"\u5143",
        "6Q": "\u4e07\u3001\u5343\u3001\u767e\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiangF6+"\u5143",
        "6Z": "\u5343\u3001\u767e\u3001\u5341\u4f4d\u53f7\u7801\u4e4b\u548c\uff0c\u5956\u91d1"+jiangF6+"\u5143",
		DH: "\u9009\u62e9\u80c6\u7801\u4e00\u4e2a\u5230\u4e24\u4e2a\u002c\u80c6\u7801\u548c\u62d6\u7801\u4e0d\u5c11\u4e8e\u0034\u4e2a\uff0c\u5956\u91d1"+jiang3D+"\u5143",
		DQ: "\u9009\u62e9\u80c6\u7801\u4e00\u4e2a\u5230\u4e24\u4e2a\u002c\u80c6\u7801\u548c\u62d6\u7801\u4e0d\u5c11\u4e8e\u0034\u4e2a\uff0c\u5956\u91d1"+jiang3D+"\u5143",
		DZ: "\u9009\u62e9\u80c6\u7801\u4e00\u4e2a\u5230\u4e24\u4e2a\u002c\u80c6\u7801\u548c\u62d6\u7801\u4e0d\u5c11\u4e8e\u0034\u4e2a\uff0c\u5956\u91d1"+jiang3D+"\u5143",
		LHWQ:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHWB:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHWS:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHWG:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHQB:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHQS:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHQG:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHBS:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHBG:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a",
		LHSG:"\u4ece\u4e07\u4f4d\u3001\u5343\u4f4d\u201c\u9f99\u3001\u864e\u3001\u548c\u201d\u6216\u201c\u5927\u3001\u5c0f\u3001\u5355\u3001\u53cc\u201d\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a"
    },
    n.mobile.jjprice = {
        DD: jiangDD,
        R1: 11,
        R2: 116,
        "5T": jiang5T,
        "5D": jiang5D,
        "4D": jiang4D,
        "3D": jiang3D,
        "2D": jiang2D,
        "1D": jiang1D,
        F2: jiangF2,
        F3: jiangF3,
        F6: jiangF6,
        Z3: 385,
        Z6: 190,
        Z2: 58,
        "5T3": 30,
		 DW:jiangDW,
		 
		 SD:jiangF3,
		 LD:jiangF6,
		 "3H":jiang3D,
		 HD:jiangF6,
		 Q3:jiang3D,
		 QH:jiang3D,
		 FQ:jiangF3,
		 SQ:jiangF3,
        Q6: jiangF6,
		 LQ:jiangF3,
		 QD:jiangF6,
		 Z3:jiang3D,
		 ZH:jiang3D,
		 FZ:jiangF3,
		 SZ:jiangF3,
        Z6: jiangF6,
		 LZ:jiangF3,
		 ZD:jiangF6,
		 "3Q":jiangF3,
		 "3Z":jiangF3,
		 "6Q":jiangF6,
		 "6Z":jiangF6,
		 DH:jiang3D,
		 DQ:jiang3D,
		 DZ:jiang3D,
		 'LHWQ':jiangLH,
		 'LHWB':jiangLH,
		 'LHWS':jiangLH,
		 'LHWG':jiangLH,
		 'LHQB':jiangLH,
		 'LHQS':jiangLH,
		 'LHQG':jiangLH,
		 'LHBS':jiangLH,
		 'LHBG':jiangLH,
		 'LHSG':jiangLH
    },
    n.mobile.dxds = {
        "\u5927": 0,
        "\u5c0f": 1,
        "\u5355": 2,
        "\u53cc": 3
    },
    n.mobile.ItemID = {
        "3D": 27033,
        F3: 27405,
        F6: 27463,
        "2D": 27032,
        F2: 27042,
        "1D": 1005,
        R1: 1001,
        R2: 27222,
        DD: 27462,
		SD: 27406,
		LD: 27407,
		"3H": 27408,
		HD: 27409,
		Q3: 27410,
		QH: 27411,
		FQ: 27412,
		SQ: 27413,
		Q6: 27414,
		LQ: 27415,
		QD: 27416,
		Z3: 27417,
		ZH: 27418,
		FZ: 27419,
		SZ: 27420,
		Z6: 27421,
		LZ: 27422,
		ZD: 27423,
		"3Q": 27424,
		"3Z": 27425,
		"6Q": 27426,
		"6Z": 27427,
		DH:27428,
		DQ:27429,
		DZ:27430
    },
    n.mobile.des = {
        zhi: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002",
        zhu3: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a5\uff5e9\u5c5e\u5927\u53f7\uff0c0\uff5e4\u5c5e\u5c0f\u53f7\u3002<br>\u5927\u5c0f\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u540e\u4e09\u4f4d\uff08\u767e\u4f4d\u3001\u5341\u4f4d\u548c\u4e2a\u4f4d\uff09\u5927\u6570\u548c\u5c0f\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e09\u4f4d\u5f00\u51fa497\uff0c\u5927\u5c0f\u6bd4\u5373\u4e3a2\uff1a1\u3002<br>\u5947\u5076\u53f7\uff1a1\u30013\u30015\u30017\u30019\u5c5e\u5947\u6570\uff0c0\u30012\u30014\u30016\u30018\u5c5e\u5076\u6570\u3002<br>\u5947\u5076\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u540e\u4e09\u4f4d\uff08\u767e\u4f4d\u3001\u5341\u4f4d\u548c\u4e2a\u4f4d\uff09\u5947\u6570\u548c\u5076\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e09\u4f4d\u5f00\u51fa497\uff0c\u5947\u5076\u6bd4\u5373\u4e3a2\uff1a1\u3002<br>\u8de8\u5ea6\uff1a\u5f00\u5956\u53f7\u7801\u540e\u4e09\u4f4d\uff08\u767e\u4f4d\u3001\u5341\u4f4d\u548c\u4e2a\u4f4d\uff09\u4e2d\u6700\u5927\u53f7\u7801\u51cf\u53bb\u6700\u5c0f\u53f7\u7801\u540e\u7684\u5dee\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e09\u4f4d\u5f00\u51fa497\uff0c\u8de8\u5ea6\u503c\u4e3a5(9-4=5)\u3002<br>\u7ec4\u516d\uff1a\u767e\u3001\u5341\u3001\u4e2a\u4f4d\u5956\u53f7\u5404\u4e0d\u76f8\u540c\u5373\u4e3a\u7ec4\u516d\u5f62\u6001\u3002\u793a\u4f8b\uff1a386\u3002<br>\u7ec4\u4e09\uff1a\u767e\u3001\u5341\u3001\u4e2a\u4f4d\u5956\u53f7\u4e2d\u6709\u4e14\u4ec5\u67092\u4e2a\u76f8\u540c\u5373\u4e3a\u7ec4\u4e09\u5f62\u6001\u3002\u793a\u4f8b\uff1a272\u3002<br>\u8c79\u5b50\uff1a\u767e\u3001\u5341\u3001\u4e2a\u4f4d\u5956\u53f7\u5168\u90e8\u5f00\u51fa\u540c\u4e00\u53f7\u7801\u5373\u4e3a\u8c79\u5b50\u5f62\u6001\u3002\u793a\u4f8b\uff1a555\u3002",
        zhi2: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a5\uff5e9\u5c5e\u5927\u53f7\uff0c0\uff5e4\u5c5e\u5c0f\u53f7\u3002<br>\u5947\u5076\u53f7\uff1a1\u30013 \u30015\u30017\u30019\u5c5e\u5947\u6570\uff0c0\u30012\u30014\u30016\u30018\u5c5e\u5076\u6570\u3002<br>\u8d28\u5408\u53f7\uff1a1\u30012\u30013\u30015\u30017\u5c5e\u8d28\u6570\uff0c0\u30014\u30016\u30018\u30019\u5c5e\u5408\u6570\u3002",
        zhu2: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a5\uff5e9\u5c5e\u5927\u53f7\uff0c0\uff5e4\u5c5e\u5c0f\u53f7\u3002<br>\u5927\u5c0f\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u540e\u4e24\u4f4d\uff08\u5341\u4f4d\u548c\u4e2a\u4f4d\uff09\u5927\u6570\u548c\u5c0f\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e24\u4f4d\u5f00\u51fa72\uff0c\u5927\u5c0f\u6bd4\u5373\u4e3a1\uff1a1\u3002<br>\u5947\u5076\u53f7\uff1a1\u30013\u30015\u30017\u30019\u5c5e\u5947\u6570\uff0c0\u30012\u30014\u30016\u30018\u5c5e\u5076\u6570\u3002<br>\u5947\u5076\u6bd4\uff1a\u6bcf\u671f\u5f00\u5956\u53f7\u7801\u4e2d\u540e\u4e24\u4f4d\uff08\u5341\u4f4d\u548c\u4e2a\u4f4d\uff09\u5947\u6570\u548c\u5076\u6570\u7684\u6bd4\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e24\u4f4d\u5f00\u51fa72\uff0c\u5947\u5076\u6bd4\u5373\u4e3a1\uff1a1\u3002<br>\u8de8\u5ea6\uff1a\u5f00\u5956\u53f7\u7801\u540e\u4e24\u4f4d\uff08\u5341\u4f4d\u548c\u4e2a\u4f4d\uff09\u4e2d\u6700\u5927\u53f7\u7801\u51cf\u53bb\u6700\u5c0f\u53f7\u7801\u540e\u7684\u5dee\u503c\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e24\u4f4d\u5f00\u51fa72\uff0c\u8de8\u5ea6\u503c\u4e3a5(7-2=5)\u3002<br>\u5bf9\u5b50\uff1a\u5341\u4f4d\u548c\u4e2a\u6570\u5956\u53f7\u76f8\u540c\u5373\u4e3a\u5bf9\u5b50\u3002<br>\u8fde\u53f7\uff1a\u5341\u4f4d\u548c\u4e2a\u4f4d\u5956\u53f7\u76f8\u51cf\u5f971\u5373\u4e3a\u8fde\u53f7\u3002\u793a\u4f8b\uff1a\u5956\u53f7\u540e\u4e24\u4f4d\u4e3a67\u621654\uff0c\u5747\u4e3a\u8fde\u53f7\u5f62\u6001\u3002",
        zhi1: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a5\uff5e9\u5c5e\u5927\u53f7\uff0c0\uff5e4\u5c5e\u5c0f\u53f7\u3002<br>\u5947\u5076\u53f7\uff1a1\u30013 \u30015\u30017\u30019\u5c5e\u5947\u6570\uff0c0\u30012\u30014\u30016\u30018\u5c5e\u5076\u6570\u3002<br>\u8d28\u5408\u53f7\uff1a1\u30012\u30013\u30015\u30017\u5c5e\u8d28\u6570\uff0c0\u30014\u30016\u30018\u30019\u5c5e\u5408\u6570\u3002<br>012\u8def\uff1a\u5956\u53f7\u96643\u5f97\u5230\u7684\u4f59\u6570\u5206\u5e03\u30021\u30014\u30017\u5c5e1\u8def\uff0c2\u30015\u30018\u5c5e2\u8def\uff0c0\u30013\u30016\u30019\u5c5e0\u8def\u3002<br>\u632f\u5e45\uff1a\u4e0a\u671f\u4e2a\u4f4d\u5956\u53f7\u4e0e\u672c\u671f\u4e2a\u4f4d\u5956\u53f7\u7684\u5dee\u503c\u3002",
        dd: "\u9057\u6f0f\u6570\u636e\uff1a\u81ea\u4e0a\u671f\u5f00\u51fa\u5230\u672c\u671f\u95f4\u9694\u7684\u671f\u6570\u3002<br>\u5927\u5c0f\u53f7\uff1a5\uff5e9\u5c5e\u5927\u53f7\uff0c0\uff5e4\u5c5e\u5c0f\u53f7\u3002<br>\u5927\u5c0f\u53f7\uff1a5\uff5e9\u5c5e\u5927\u53f7\uff0c0\uff5e4\u5c5e\u5c0f\u53f7\u3002"
    },
    n.mobile.AsynDownData = function() {
        var e = t("#setting"),
        r = t("#navtit"),
        i = n.string.getUrlParam("pt") || e.attr("pt") || "F6",
        s = "btn-pop-on",
        o = t("#container"),
        u = n.localstorage.getItem(n.mobile.storageName),
        a = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1,
        f = '<p>{cur}\u671f\u5f00\u5956\uff1a<strong class="red">{number}</strong></p>';
        u && (n.mobile.cart.code = u + ";", n.mobile.cart.group = u.split(/;/g).length, n.mobile.cart.count = a),
        o.find("a[play='" + i + "']").addClass(s),
        r.html(caizhong+'-<cite id="game">' + n.mobile.title[i] + '</cite><span class="head-arr"><em></em></span>'),
        t("#group").text(n.mobile.cart.group),
        t.getJSON(n.mobile.clearCacheUrl_dev + "?r=" + t.now(),
        function(r) {
            if (r) {
                var s = r.info,
                o = r.blist,
                u, a, l, c, h = [];
                e.attr({
                    endtime: s.EndTime,
                    prevtime: s.DsTimeSpace,
                    issale: s.IsOpen
                }),
                n.mobile.distance = s.issue,
                n.mobile.countDownInit(s.EndTime, s.DsTimeSpace);
                for (var p = 0; p < o.length; p++) c = o[p].issue,
                a = c.replace(/^\d{7}/g, "") * 1,
                u = n.mobile.distance.replace(/^\d{7}/g, "") * 1,
                a = a = a < 10 ? "0" + a: a,
                l = o[p].number.split("").join(" "),
                u = u = u < 10 ? "0" + u: u,
                p === 0 ? (n.mobile.kjQi = c, t("#fq1").text(a), t("#fq2").text(u), t("#fcode").text(l)) : h.push(f.replace(/{cur}/g, a).replace(/{number}/g, l));
                n.mobile.defaults(i),
                t("#kjlist").html(h.join(""))
            }
        })
    },
    n.mobile.defaults = function(e) {
        var r = t(".pick-box"),
        i = t("#setting"),
        s = t("#selected"),
        o = t("#detxt"),
        u = "none",
        a = "btn-pop-on",
        f;
        i.attr("pt", e) || "F6",
		console.log(e);
       s.attr("href","Cart.asp?pt=" + e+"&type="+czname);
	    if ("LHWQ|LHWB|LHWS|LHWG|LHQB|LHQS|LHQG|LHBS|LHBG|LHSG".indexOf(e) >=0 )
		{
         f = r.eq(8);
		}
	    else if (n.mobile.play == "loss"){
			 f = r.eq(4);
		}
        else if (/^DD$/.test(e))  
		{	
			f = r.eq(3);
		}
        //else if ((/^SD$/.test(e)) || (/^LD$/.test(e)))
        //else if ((/^S\D{1}$/.test(e)) || (/^LD$/.test(e)))
        else if ((/^S\D{1}$/.test(e)) || (/^L\D{1}$/.test(e)) || ((/^D\D{1}$/.test(e)) && e!="DD" && e!="DW") )
		{	
console.log(e);
			f = r.eq(4);
		}
		
        else if ((/^F\d{1}$/.test(e)) || (/\DD$/.test(e)) || (/^F\D{1}$/.test(e)) || (/^\D{1}6$/.test(e)))
	    {	 
			f = r.eq(2);
		}
		//else if(/^3H$/.test(e))
		else if(e.indexOf("H") > -1)
		{
			f = r.eq(5);
		}
		else if(e=="3Q" || e=="3Z")
		{
			f = r.eq(6);
		}
		else if(e=="6Q" || e=="6Z")
		{
			f = r.eq(7);
		}
        else {
				f = r.eq(1);
				var l = f.find("dl"),
				c = f.find(".line-3");
				l.addClass(u),
				c.addClass(u);
				if (/[F|D]/.test(e)) 
				{
					var h =e == "DW"?"5":e.replace(/[F|D]/, "") * 1;
					for (var p = 5 - h; p < 5; p++){
					p < 4 && c.eq(p).removeClass(u),l.eq(p).removeClass(u)}
				}
				else{
					if(/^\D{1}3$/.test(e))
					{
						if(e=="Q3")forp0=0,forp1=3;
						if(e=="Z3")forp0=1,forp1=4;
						for(var pq3=forp0;pq3<forp1;pq3++) c.eq(pq3).removeClass(u),l.eq(pq3).removeClass(u);
					}
					else
					{
						l.removeClass(u),c.removeClass(u);
					}
				}
        	}
        r.addClass(u),
        f.removeClass(u),
        n.mobile.play == "charts" && r.eq(0).removeClass(u),
        o.html(n.mobile.desc[e]),
        n.mobile.play != "loss" && (n.mobile.box = f.find("dl").not("." + u).find("ul"), n.mobile.updataMiss(n.mobile.kjQi))
    },
    n.mobile.dealPlus = function(e, r) {
        var i = t("#setting").attr("pt"),
        s = t("#detxt");
        if (/^(DD|2D|R2|F6)$/.test(i)) {
            var o = e.replace(/^\d{7}/g, "") * 1;
            o >= 35 && o <= 84 ? (n.mobile.jjprice.DD = 5, n.mobile.jjprice["2D"] = 150, n.mobile.jjprice.R2 = 150, n.mobile.jjprice.F6 = 230, n.mobile.desc.DD = '\u7ade\u731c\u5f00\u5956\u53f7\u5341\u4f4d\u3001\u4e2a\u4f4d\u7684\u5c5e\u6027\uff0c\u52a0\u5956<strong class="red">1</strong>\u5143\uff0c\u5956\u91d1<strong class="red">5</strong>\u5143', n.mobile.desc["2D"] = '\u6309\u4f4d\u7ade\u731c\u5f00\u5956\u53f7\u7801\u540e\u4e24\u4f4d\u6570\u5b57\uff0c\u52a0\u5956<strong class="red">34</strong>\u5143\uff0c\u5956\u91d1<strong class="red">150</strong>\u5143', n.mobile.desc.R2 = '\u7ade\u731c\u5f00\u5956\u53f7\u7801\u7684\u4efb\u610f\u4e24\u4f4d\uff0c\u52a0\u5956<strong class="red">34</strong>\u5143\uff0c\u5956\u91d1<strong class="red">150</strong>\u5143', n.mobile.desc.F6 = '\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801\uff0c\u52a0\u5956<strong class="red">40</strong>\u5143\uff0c\u5956\u91d1<strong class="red">230</strong>\u5143') : (n.mobile.jjprice.DD = 4, n.mobile.jjprice["2D"] = 116, n.mobile.jjprice.F2 = 116, n.mobile.jjprice.F6 = 190, n.mobile.desc.DD = "\u7ade\u731c\u5f00\u5956\u53f7\u5341\u4f4d\u3001\u4e2a\u4f4d\u7684\u5c5e\u6027\uff0c\u5956\u91d14\u5143", n.mobile.desc["2D"] = "\u6309\u4f4d\u7ade\u731c\u5f00\u5956\u53f7\u7801\u540e\u4e24\u4f4d\u6570\u5b57\uff0c\u5956\u91d1116\u5143", n.mobile.desc.R2 = "\u7ade\u731c\u5f00\u5956\u53f7\u7801\u7684\u4efb\u610f\u4e24\u4f4d\uff0c\u5956\u91d1116\u5143", n.mobile.desc.F6 = "\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801\uff0c\u5956\u91d1190\u5143"),
            s.html(n.mobile.desc[i])
        }
    },
    n.mobile.selectCodeInit = function() {
        new t.touchSlider(".filt-popc", {
            wrap: ".filt-popc-cont",
            trigger: ".filt-popc-nav",
            duration: 500
        }),
        t(".pick-box").on(n.lottery.tap, "li",
        function() {
            var r = t("#setting").attr("pt"),
            i = t(".pick-box"),
            s = n.mobile.box,
            o = "selected",
            u = t(this),
            a = s.length,
            f = 0;
			if(r!="SD" && r!="SQ" && r!="SZ" && r!="LD" && r!="LQ" && r!="LZ" && r!="DH" && r!="DQ" && r!="DZ") u.toggleClass(o);
            if (r == "F2") {
                if (s.find("." + o).length >= 8) {
                    u.removeClass(o),   
				   n.lightBox.alert({
					content: "\u4e8c\u661f\u7ec4\u9009\u81f3\u5c11\u90093\u4e2a\uff0c\u6700\u591a\u90097\u4e2a",
					confirmFn: function(){this.close();}})	
                    return
                }
            }else r == "DD" && u.hasClass(o) && u.siblings().removeClass(o);
            if(r!="SD" && r!="SQ" && r!="SZ" && r!="LD" && r!="LQ" && r!="LZ" && r!="DH" && r!="DQ" && r!="DZ") n.mobile.count();
        }),
        t("#myloss").on(n.lottery.tap, "div",
        function() {
            var e = t(this),
            r = "num-box-on";
            e.hasClass(r) ? e.removeClass(r) : e.addClass(r),
            n.mobile.count()
        }),
        t(".pop-box2").on("click", "a",function(e) {
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
            v = r.parent().parent().attr("action"),
            m = t("#game"),
            g = t("#star_d,#star_f,#star_dd,#star_fdt,#star_fh,#star_3h,#star_6h,#star_lgway"),
            y = t("#loss"),
            b = t("#charts"),
            w = "btn-pop-on",
            E = "none",
            S = "fix"; 
            n.mobile.play = v,
            t(".btn-pop").removeClass(w),
            r.addClass(w),
            t(".head-arr").removeClass("head-arron"),
            t(".pop-box2").addClass("spill"),
            s.attr("pt", i),
            m.text(n.mobile.title[i]),
            t(".pick-box").addClass(E);
            v != "charts" ? (s.parent().removeClass(E), c.addClass(E), h.removeClass(E), o.removeClass(E), p.addClass(E), d.removeClass("fix")) : (s.parent().addClass(E), c.removeClass(E), p.removeClass(E), h.addClass(E), o.addClass(E), d.addClass("fix"));
			n.mobile.play = n.mobile.play == "loss"?"charts":n.mobile.play;
            switch (n.mobile.play) {
            case "normal":
                g.removeClass(E);
                break;
            case "loss":
                y.removeClass(E);
                var x = t("#lossr");
                if (/^R\d{1}$/.test(i)) {
                    var T = [];
                    x.removeClass(E);
                    if (i == "R1") {
                        var N = ["\u4e07", "\u5343", "\u767e", "\u5341", "\u4e2a"];
                        for (var C = 0; C < N.length; C++) T.push('<option value="100' + (C + 1) + '">' + N[C] + "\u4f4d</option>")
                    } else T.push('<option value="27222">\u4e07\u767e\u4f4d</option>								  <option value="27223">\u4e07\u5341\u4f4d</option>								  <option value="27224">\u4e07\u4e2a\u4f4d</option>								  <option value="27225">\u5343\u767e\u4f4d</option>								  <option value="27226">\u5343\u5341\u4f4d</option>								  <option value="27227">\u5343\u4e2a\u4f4d</option>								  <option value="27228">\u767e\u5341\u4f4d</option>								  <option value="27229">\u767e\u4e2a\u4f4d</option>');
                  x.html(T.join(""))
                } else x.html("").addClass(E);
                n.mobile.getmyplayLoss("init");
                break;
            case "charts":
                g.removeClass(E),
                b.removeClass(E),
                t("#chartsH2").text(n.mobile.title[i]);
                var k, L = /^F(\d{1})$/g,
                A = /^(\d{1})[DT]$/g,
                O = /^(DD)$/g;
                L.test(i) ? k = 3 : A.test(i) ? (k = i.replace(A, "$1") * 1, k < 3 && (k = 3)) : k = 1,
                n.mobile.touchSlider ? n.mobile.touchSlider.reset({
                    steps: 0,
                    left: 0,
                    curIndex: 0,
                    len: k
                }) : n.mobile.touchSlider = new t.touchSlider(".in-entry", {
                    wrap: ".chart-tab",
                    trigger: ".xq-nav-chart",
                    duration: 500,
                    len: k,
                    callback: function() {
                        n.mobile.getCharts()
                    }
                }),
                n.mobile.clearTemplate(),
                n.mobile.getCharts()
            }
            n.mobile.defaults(i),
            n.mobile.clear(u, a, f, o, i)
        }),
        t("#navtit").on(n.lottery.tap,function() {
            var e = t(".head-arr"),
            r = t(".pop-box2"),
            i = "head-arron",
            s = t(".btn-menu"),
            o = "btn-menu-on",
            u = "spill";
            s.hasClass(o) && s.trigger(n.lottery.tap),
            e.hasClass(i) ? (e.removeClass(i), r.addClass(u)) : (e.addClass(i), r.removeClass(u))
        });
        t(".top-date").on(n.lottery.tap,function() {
            var e = t("#kjlist"),
            n = e.find("p"),
            r = t(".top-arr"),
            i = "top-arr-on",
            s = t("#setting"),
            o = "none";
            r.hasClass(i) ? (r.removeClass(i), n.addClass(o), e.css("height", 0), s.css("height", 22)) : (r.addClass(i), n.removeClass(o), e.css("height", 88), s.css("height", 110))
        }),
        t(".btn-chart").on(n.lottery.tap,
        function() {
            n.mobile.goChart.call(null, "F6", 2);
        }),
        t(".btn-menu").on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t(this),
            i = "btn-menu-on",
            s = "spill",
            o = t(".pop-box2"),
            u = t("#navtit");
            o.hasClass(s) || u.trigger(n.lottery.tap),
            r.hasClass(i) ? (e.addClass(s), r.removeClass(i)) : (e.removeClass(s), r.addClass(i))
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
        t("#bets").on({
            click: function() {
                var r = n.mobile.cart.group || 0,i, s, o = t("#setting").attr("pt") || "F6";
                n.mobile.play == "loss" ? (i = t("#myloss"), s = "num-box-on") : (i = n.mobile.box, s = "selected");
				//r || i.find("." + s).length > 1 ? n.mobile.pickBall(t(this)) :n.mobile.pickBall(t(this)):e.location.href = "./Cart.asp";	
				!r || i.find("." + s).length > 0 ? n.mobile.pickBall(t(this)) : e.location.href = "Cart.asp?pt=" + e+"&type="+czname   
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        }),
        t("#myhandle").on(n.lottery.tap,
        function() {
            var e = function() {
                var e = t("#mytools"),
                r = t("#arrows"),
                i = t("#myhelpr");
                e.hasClass("none") ? (n.mobile.isHelp = 1, r.removeClass("arr-on"), e.removeClass("none"), i.removeClass("none"), n.mobile.myHelper()) : (e.addClass("none"), i.addClass("none"), r.addClass("arr-on"), n.mobile.isHelp = 0)
            };
            n.cookie.get("Q") ? e() : n.lightBox.login(e)
        }),
        t(".helphanle").on(n.lottery.tap,
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
        t("#lossmore").on("click",
        function() {
            var e = t("#lossmore"),
            r = e.attr("total"),
            i = e.attr("curpage");
            i++,
            i > r ? i = r: (e.text("\u6b63\u5728\u83b7\u53d6..."), e.attr("curpage", i), n.mobile.getmyplayLoss("next"))
        }),
        t("#lossr").on("change",
        function() {
            var e = t(this),
            r = e.val(),
            i = t("#lossmore");
            i.attr("curpage", 1),
            n.mobile.getmyplayLoss("init")
        });
        var r = n.string.getJsonHash();
        if (r.play) {
            var i = "F6",
            s = 2,
            o = 0,
            u = null;
            r.pt && (i = r.pt),
            r.play == "chart" ? r.sub && (o = r.sub) : r.play == "loss" && (s = 1, o = "no"),
            u = setTimeout(function() {
                n.mobile.goChart.call(null, i, s, o)
            },
            400)
        }
    },
	t("#star_fdt").on(n.lottery.tap, "li",
	function() {
		var e = t("#setting").attr("pt"),
		r = t(this),
		i = t("#star_fdt").find("ul"),
		s = r.parent().attr("type"),
		o = t.trim(r.find("span").text());
		//u = e.replace(/^(r|zhu)/, "") * 1 - 1;
		//if(e=="SD" || e=="SQ"){u=1;}
		if(/^S\D{1}$/.test(e)){u=1;}
		//if(e=="LD"){u=2;}
		if((/^L\D{1}$/.test(e)) || ((/^D\D{1}$/.test(e)) && e!="DD" && e!="DW") ){u=2;}
		r.toggleClass("selected");
		if (s == "d") {
			var a = i.eq(0).find(".selected").length,
			f = i.eq(1).find(".selected").length;
			a > u ? (r.removeClass("selected"), alert(n.mobile.title[e] + "\u6700\u591a\u53ea\u80fd\u9009" + u + "\u4e2a\u80c6\u7801")) : i.eq(1).find("li").eq(o * 1).removeClass("selected")
		} else i.eq(0).find("li").eq(o * 1).removeClass("selected");
		t("#count").text("0"),
		t("#price").text("0"),
		t("#calcu").html(""),
		n.mobile.count()
	}),
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
        var i = t("#setting").attr("pt") || "F6",
        s = r.attr("id");
        if (n.mobile.play == "loss") {
            var o = t("#myloss").find(".num-box-on");
            if (!o.length){
			    n.lightBox.alert({
				content: "\u8bf7\u5148\u9009\u62e9\u4e00\u6ce8\u53f7\u7801\u518d\u6295\u6ce8\uff01",
				confirmFn: function(){this.close();}})	
				return
            }
            for (var u = 0; u < o.length; u++) {
                var a = t(o[u]).find("cite").text(),
                f = [],
                l = "";
                if (i == "DD") {
                    f = a.split("");
                    var c = {
                        "\u5927": "2",
                        "\u5c0f": "1",
                        "\u5355": "5",
                        "\u53cc": "4"
                    };
                    l = c[f[0]] + "" + c[f[1]]
                } else if (/D/.test(i)) f = a.split(","),
                l = ["-", "-", "-", "-", "-"].slice(f.length).concat(f).join(",");
                else if (/F/.test(i)) f = a.split(" "),
                l = f.join(",");
                else if (/R/.test(i)) {
                    var h = i.replace(/R/, "") * 1;
                    if (h === 2) l = a.replace(/_/g, "-");
                    else {
                        var p = t.trim(t("#lossr").val()).substring(3) * 1 - 1 || 0,
                        d = ["-", "-", "-", "-", "-"];
                        d[p] = a,
                        l = d.join(",")
                    }
                }
                n.mobile.cart.code += i + "|1|" + l + ";",
                n.mobile.cart.count += 1,
                n.mobile.cart.group += 1;
            }
        } else {
            var v = t(".pick-box"),
            u = ["\u4e07", "\u5343", "\u767e", "\u5341", "\u4e2a"],
            m = 0,
            g,
            y = 0,
            b = "",
            w = t("#count").text() * 1,
            E = n.mobile.box,
            S = E.length,
            x = /^(R)\d{1}$/.test(i);
			//if(i == "SD" || i == "LD")
			if ("LHWQ|LHWB|LHWS|LHWG|LHQB|LHQS|LHQG|LHBS|LHBG|LHSG".indexOf(i) >=0 ){
			   if (w==0){
			      n.lightBox.alert({
					content: "\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6ce8\u53f7\u7801",
					confirmFn: function(){this.close();}})	
					return
			      }
				  x = true ;
				  var LH =[];
				 var  sLH = t("ul[type='lh']").find(".selected");
				  var sDXDS = t("ul[type='dxds']").find(".selected");
				  sLH.each(function(index,items){
				      LH.push(t(items).text()); 
				  })
				  sDXDS.each(function(index,items){
				      LH.push(t(items).text()); 
				  })
				  usd=t("#count").text() * 1 || 0;
				  b += i + "|" + usd + "|" + LH.join(",") + ";";
			}
			else if((/^S\D{1}$/.test(i)) || (/^L\D{1}$/.test(i)) || ((/^D\D{1}$/.test(i)) && i!="DD" && i!="DW") )
			{
				
				if(w==0){
					n.lightBox.alert({
					content: "\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6ce8\u53f7\u7801",
					confirmFn: function(){this.close();}})	
					return
				}
				x=true;
				var Ssd = [],
				xsd = [],
				usd=t("#count").text() * 1 || 0;
				
				Ssd = t.map($("ul[type='d']").find(".selected"),
				function(e) {
					return t.trim(t(e).find("span").text())
				}),
				xsd = t.map($("ul[type='t']").find(".selected"),
				function(e) {
					return t.trim(t(e).find("span").text())
				}),
				b += i + "|" + usd + "|" + Ssd.join(" ") + "\u62d6" + xsd.join(" ").replace(/^,|,$/g, "") + ";";
//console.log(x,b);
//console.log(b);
			}
			//else if(i == "HD")
			else if((/^\D{1}D$/.test(i)) && i!="DD" && i!="DW")
			{
				if($("#star_f").find(".selected").length==0){
					n.lightBox.alert({
					content: "\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6ce8\u53f7\u7801",
					confirmFn: function(){this.close();}})	
					return
				}
				Shqzd = t.map($("#star_f").find(".selected"),
				function(e) {
					return t.trim(t(e).find("span").text())
				})
				b = Shqzd.join(",");
			}
			else if(i.indexOf("H") > -1 || i=="3Q" || i=="3Z" || i=="6Q" || i=="6Z")
			{
				if(typeof(zhs_xh)=="undefined"){
					ifb=0;
				}
				else{
					ifb=zhs_xh.length>0?1:0;
				}
				if(ifb){
					b = zhs_xh.join(",");
					zhs_xh=new Array();
				}
				else{
					n.lightBox.alert({
					content: "\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6ce8\u53f7\u7801",
					confirmFn: function(){this.close();}})	
					return
				}
			}
			else if(i == "DW")
			{
				var str = "";
				 E.each(function(e) {
                        var r = t.map(t(this).find(".selected"),
                        function(e) {
                            return t.trim(t(e).find("span").text())
                        }),
                        s = r.length;
						r == ""?str+= ",-":str+=","+r.join("");
                    })
					if (str == ",-,-,-,-,-") {
						n.lightBox.alert({
						content: "\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6ce8\u53f7\u7801",
						confirmFn: function(){this.close();}})	
						return
               		}
					b = str.replace(/^,/,"");
			}
           else if ((i.indexOf("D") > -1 && i != "DD" && i != "DW")|| i.indexOf("T") > -1 || ((/^\D{1}3$/.test(i)) && i!="F3")) {
                g = i.replace(/[D|T|Q]/g, "") * 1,
                m = Math.abs(5 - g);
				if(i=="Q3")fort0=0;
				if(i=="Z3")fort0=1;
				else fort0=m;
                for (var T = fort0,N = 0; T < 5, N < S; T++, N++) if (E.eq(N).find(".selected").length < 1) {
				n.lightBox.alert({
				content: "\u8bf7\u81f3\u5c11\u5728" + u[T] + "\u4f4d\u9009\u62e9\u4e00\u4e2a\u53f7\u7801",
				confirmFn: function(){this.close();}})	
				return
                }
                if(i=="Q3"){
					for (var T = 0; T < 5; T++) T <= m ? b += t.map(E.eq(T).find(".selected"),
					function(e) {
						return t.trim(t(e).find("span").text())
					}).join("") + ",": b += "-,"
				}
				else if(i=="Z3"){
					var fortm=0;
					for (var T = 0; T < 5; T++){
						if(T>=1 && T<=3)fortm=1;
						else fortm=0;
						fortm ? b += t.map(E.eq(T-1).find(".selected"),
						function(e) {
							return t.trim(t(e).find("span").text())
						}).join("") + ",": b += "-,"
//console.log(b);
					}
				}
				else{
					for (var T = 0; T < 5; T++) T >= m ? b += t.map(E.eq(T - m).find(".selected"),
					function(e) {
						return t.trim(t(e).find("span").text())
					}).join("") + ",": b += "-,"
				}
//console.log(b);
            }
           /*else if ((i.indexOf("D") > -1 && i != "DD" )|| i.indexOf("T") > -1) {
                g = i.replace(/[D|T|Q]/g, "") * 1,
                m = Math.abs(5 - g);
                for (var T = m,N = 0; T < 5, N < S; T++, N++) if (E.eq(N).find(".selected").length < 1) {
				n.lightBox.alert({
				content: "\u8bf7\u81f3\u5c11\u5728" + u[T] + "\u4f4d\u9009\u62e9\u4e00\u4e2a\u53f7\u7801",
				confirmFn: function(){this.close();}})	
				return
                }
                for (var T = 0; T < 5; T++) T >= m ? b += t.map(E.eq(T - m).find(".selected"),
                function(e) {
                    return t.trim(t(e).find("span").text())
                }).join("") + ",": b += "-,"
            } */
			else if (i.indexOf("F") > -1 || (/^\D{1}6$/.test(i))) {
                g = i.replace(/[F]/g, "") * 1
				if(/^F\D{1}$/.test(i))g=3;
                g == 3 ? m = 2 : m = 3;
                if (g == 2) {
					m = 2;
					if (E.find(".selected").length < m || E.find(".selected").length > 7) {
					n.lightBox.alert({
					content: "\u4e8c\u661f\u7ec4\u9009\u81f3\u5c11\u9009\u0032\u4e2a\uff0c\u6700\u591a\u9009\u0037\u4e2a",
					confirmFn: function(){this.close();}})	
					return
					}				
				}
				else if ( E.find(".selected").length < m) {
					n.lightBox.alert({
					content: n.mobile.title[i] +"\u81f3\u5c11\u9009"+ m + "\u4e2a\u53f7\u7801",
					confirmFn: function(){this.close();}})	
					return
				}
				else if(/^\D{1}6$/.test(i)){
					if (E.find(".selected").length > 8) {
					n.lightBox.alert({
					content: "\u7ec4\u516d\u6700\u591a\u9009\u62e9\u516b\u4e2a\u53f7\u7801",
					confirmFn: function(){this.close();}})	
					return
					}
				}
				
                b += t.map(E.find(".selected"),
                function(e) {
                    return t.trim(t(e).find("span").text())
                }).join(",")
            }
			else if (i.indexOf("R") > -1) 
			{
                if (i == "R1") {
                    if (w < 1) {
						n.lightBox.alert({
						content: "\u8bf7\u5728\u4efb\u610f\u4e00\u4f4d\u9009\u81f3\u5c111\u4e2a\u53f7\u7801",
						confirmFn: function(){this.close();}})	
						return
                    }
                    E.each(function(e) {
                        var n = ["-", "-", "-", "-", "-"],
                        r = t.map(t(this).find(".selected"),
                        function(e) {
                            return t.trim(t(e).find("span").text())
                        }),
                        s = r.length;
                        s && (n[e] = r.join(""), b += i + "|" + s + "|" + n.join(",").replace(/^,|,$/g, "") + ";")
                    })
                } else if (i == "R2") {
                    if (w < 1) {
						n.lightBox.alert({
						content: "\u8bf7\u5728\u4efb\u4e24\u4f4d\u5404\u81f3\u5c11\u9009\u53d61\u4e2a\u53f7\u7801",
						confirmFn: function(){this.close();}})	
						return
                    }
                    var C = [],
                    k,
                    L = [];
                    E.each(function(e) {
                        var n = t.map(t(this).find(".selected"),
                        function(e) {
                            return t.trim(t(e).find("span").text())
                        }),
                        r = n.length;
                        r && C.push(n.join("") + "+" + e)
                    });
                    var A = n.number.eachCombo(C, 2);
                    t.each(A,
                    function(e, t) {
                        var n = ["-", "-", "-", "-", "-"],
                        r = t[0].split("+"),
                        s = t[1].split("+"),
                        o = r[0].length * 1 * s[0].length;
                        n[r[1] * 1] = r[0],
                        n[s[1] * 1] = s[0],
                        b += i + "|" + o + "|" + n.join(",").replace(/^,|,$/g, "") + ";"
                    })
                }
            } 
			else if (i == "DD") 
			{
                if (E.eq(0).find(".selected").length < 1) {
						n.lightBox.alert({
						content: "\u8bf7\u5728\u5341\u4f4d\u9009\u62e9\u4e00\u79cd\u5c5e\u6027",
						confirmFn: function(){this.close();}})	
					return
                }
                if (E.eq(1).find(".selected").length < 1) {
						n.lightBox.alert({
						content: "\u8bf7\u5728\u4e2a\u4f4d\u9009\u62e9\u4e00\u79cd\u5c5e\u6027",
						confirmFn: function(){this.close();}})	
					return
                }
				
                for (var T = 0; T < 2; T++) b += t.map(E.eq(T).find(".selected"),
                function(e) {
                    return t.trim(t(e).attr("n"))+","
                }).join("")
            }
            n.mobile.cart.code += x ? b: i + "|" + w + "|" + b.replace(/^,|,$/g, "") + ";",
            n.mobile.cart.count += w,
            n.mobile.cart.group += 1;
        }
		//console.log(e);return;
        var b = n.mobile.cart.code.replace(/;$/g, ""),
        O = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName, b),
        n.localstorage.setItem(n.mobile.storageMulName, O),
        s == "addcart" ? (t("#group").text(n.mobile.cart.group), n.mobile.clear(t("#count"), t("#price"), t("#calcu"))) : e.location.href = "Cart.asp?pt=" + e+"&type="+czname
    },
    n.mobile.clear = function(e, r, i) {
        var s = n.mobile.box,
        o = "selected",
        u = "num-box-on",
        a = t("#myloss");
        n.mobile.play == "loss" ? a.find("." + u).removeClass(u) : s.find("." + o).removeClass(o),
        e.text(0),
        r.text(0),
        i.html("")
    },
    n.mobile.getmyplayLoss = function(e, r) {
        var i = t("#myloss"),
        s = t("#lossname"),
        o = t("#lossmore"),
        u = r || "",
        a = t("#setting").attr("pt") || "F6",
        f;
        e == "init" ? f = 1 : f = o.attr("curpage") * 1 || 1;
        var l = n.mobile.ItemID[a];
        /R/.test(a) && (l = t.trim(t("#lossr").val())),
        t.ajax({
            url: n.mobile.getlossstatUrl_dev + "?LotID=" + n.mobile.lotType + "&LotIssue=" + u + "&IssueCount=0&Page=" + f + "&ItemID=" + l + "&rnd" + Math.random(),
            dataType: "json",
            success: function(t) {
                var s = t.Data,
                u = t.Total * 1 > 5 ? 5 : t.Total * 1;
                if (s) {
                    var a = [],
                    l;
                    for (var c = 0; c < s.length; c++) e == "init" && c < 3 ? l = '<td><b class="red">' + s[c].CurLoss + "<b></td><td>" + s[c].PreLoss + "</td><td>" + s[c].MaxLoss + "</td>": l = "<td>" + s[c].CurLoss + "</td><td>" + s[c].PreLoss + "</td><td>" + s[c].MaxLoss + "</td>",
                    a.push('<tr><td><div class="num-box"><cite class="b">' + s[c].Code + "</cite><em>\u221a</em></div></td>" + l + "</tr>");
                    e == "next" ? (i.append(a.join("")), o.attr("curpage", f)) : (i.html(a.join("")), o.attr("curpage", 1)),
                    o.attr("total", u),
                    f == u ? o.text("\u5df2\u83b7\u53d6\u5168\u90e8") : o.text("\u83b7\u53d6\u66f4\u591a")
                } else setTimeout(function() {
                    n.mobile.getmyplayLoss("init", r)
                },
                1e4)
            }
        }),
        s.text(n.mobile.title[a])
    },
    n.mobile.getBouns = function(e) {
        t.ajax({
            url: n.mobile.getkpkjcodeUrl_dev + "?lotid=" + n.mobile.lotType + "&issue=" + e + "&rnd=" + Math.random(),
            dataType: "json",
            success: function(r) {
                var i, s, r = r[0];
                r.issue == e && r.code ? (s = e.replace(/^\d{7}/g, "") * 1, s == 84 && (s = 0), t("#fcode").text(r.code), n.mobile.kjQi = e, n.mobile.play == "normal" && (n.mobile.myHelper(n.mobile.kjQi), n.mobile.updataMiss(n.mobile.kjQi)), n.mobile.play == "charts" && (setTimeout(function() {
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
        s = i.replace(/^\d{7}/g, "") * 1,
        o = t("#setting"),
        u = o.find("p"),
        a;
        n.mobile.distance = r,
        a = n.mobile.distance.replace(/^\d{7}/g, "") * 1,
        a = a = a < 10 ? "0" + a: a,
        o.attr("issale", e.IsOpen),
        t("#kjlist").prepend("<p>" + t("#fq1").text() + '\u671f\u5f00\u5956\uff1a<strong class="red">' + t("#fcode").text() + "</strong></p>"),
        t("#fq1").text(s = s < 10 ? "0" + s: s),
        t("#fq2").text(a),
        t("#fcode").text("\u5f00\u5956\u4e2d..."),
        n.mobile.getBouns(i),
        (n.mobile.play == "normal" || n.mobile.play == "loss") && n.mobile.myHelper(),
        n.mobile.countDownInit(e.EndTime, e.FsTimeSpace)
    },
    n.mobile.checkIssue = function(e) {
        var t = e.Issue == n.mobile.distance;
        return ! t
    },
    n.mobile.getActIssue = function(e) {
        var r = n.mobile.issuefreq || 5e3;
        t.ajax({
            url: n.mobile.qcurissueUrl_dev + "?LotID=" + e + "&t=" + Math.random(),
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
        u = n.mobile.distance.replace(/^\d{7}/g, "") * 1;
        u = u = u < 10 ? "0" + u: u,
        s ? (o.html('\u8ddd<em id="fq2">' + u + "</em>\u671f\u622a\u6b62:"), n.countdown.start({
            endTime: e * 1 - r * 1,
            sid: ".countdown",
            freq: 1e4,
            style: "mm:ss",
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
    n.mobile.calcu = function(e, r, i) {
        var s = n.mobile.jjprice[r],
        o,
        u,
        a,
        f,
        l = t("#calcu");
        if (e < 1) l.html("");
		else if ("LHWQ|LHWB|LHWS|LHWG|LHQB|LHQS|LHQG|LHBS|LHBG|LHSG".indexOf(r) >=0){
		   var ss = s.split(",");
		   console.log(ss);
		   var we = "龙虎合大小单双";
		   s       = 0 ;
		   for(var ts=0 ; ts < i.length;ts++){
		      var index = we.indexOf(i[ts]);
			  console.log(ss[index]);
			  s += Number(ss[index]);
		   }
		   o = s - i.length *2 ;
		   o < 0 ? (f = "\u4e8f\u635f", u = "green") : (f = "\u8d62\u5229", u = "red");
		   l.html('\u5956\u91d1:<em class="red">' + s + "</em>\u5143," + f + '<em class="' + u + '">' + Math.abs(o) + "</em>\u5143");
		}
        else if (e == 1) l.html('\u5956\u91d1:<em class="red">' + s + '</em>\u5143,\u8d62\u5229<em class="red">' + (s - n.mobile.price * e) + "</em>\u5143");
        else if (r == "5T" || r == "4D") {
            if (r == "5T") {
                var c = n.mobile.jjprice["5T3"] || 30;
                o = 2e4 + (i[0] * i[1] + i[3] * i[4]) * 200 + (i[0] * i[1] * i[2] + i[2] * i[3] * i[4]) * c - n.mobile.price * e,
                e == 1e5 ? minMoney = (i[0] * i[1] * i[2] + i[2] * i[3] * i[4]) * c - n.mobile.price * e: minMoney = Math.min(i[0] * i[1] * i[2], i[2] * i[3] * i[4]) * c - n.mobile.price * e
            } else o = s - n.mobile.price * e,
            e == 1e4 ? minMoney = s - n.mobile.price * e: minMoney = Math.min(i[0], i[3]) * 88 - n.mobile.price * e;
            o < 0 ? (f = "\u4e8f\u635f", u = "green") : (f = "\u8d62\u5229", u = "red"),
            a = minMoney < 0 ? "green": "red",
            minMoney == o ? l.html('\u5956\u91d1:<em class="red">' + s + "</em>\u5143," + f + '<em class="' + u + '">' + Math.abs(o) + "</em>\u5143") : l.html('\u5956\u91d1:<em class="red">' + (minMoney + n.mobile.price * e) + '</em>\u81f3<em class="red">' + (o + n.mobile.price * e) + "</em>\u5143," + f + '<em class="' + a + '">' + Math.abs(minMoney) + '</em>\u81f3<em class="' + u + '">' + Math.abs(o) + "</em>\u5143")
        } else o = s - n.mobile.price * e,
        o >= 0 ? (f = "\u8d62\u5229", u = "red") : (f = "\u4e8f\u635f", u = "green"),
        l.html('\u5956\u91d1:<em class="red">' + s + "</em>\u5143," + f + '<em class="' + u + '">' + Math.abs(o) + "</em>\u5143")
    },
    n.mobile.count = function() {
        var e = t("#setting").attr("pt"),
        r = 1,
        i = t("#count"),
        s = t("#price");
        if (n.mobile.play == "loss") {
            var o = t("#myloss");
            r = o.find(".num-box-on").length
        } else {
            var u = t(".pick-box"),
            a = [],
            f,
            l,
            c = n.mobile.box;
			if("LHWQ|LHWB|LHWS|LHWG|LHQB|LHQS|LHQG|LHBS|LHBG|LHSG".indexOf(e) >=0){	
			   var lhh = t('ul[type="lh"]').find(".selected"),dxds= t('ul[type="dxds"]').find(".selected");
			   //console.log(lhh,dxds);
			   r = t('ul[type="lh"]').find(".selected").size() + t('ul[type="dxds"]').find(".selected").size();
			   lhh.each(function(index, ee) {
                   a.push(ee.innerHTML.replace(/<span>/g,'').replace(/<\/span>/g,''));
               });
			   dxds.each(function(index, element) {
                a.push(element.innerHTML.replace(/<span>/g,'').replace(/<\/span>/g,''));
              });
			  
			}
			//if(e == "SD" || e == "LD") {
			else if((/^S\D{1}$/.test(e)) || (/^L\D{1}$/.test(e)) || ((/^D\D{1}$/.test(e)) && e!="DD" && e!="DW") ) {
			dlen=$("ul[type='d']").find(".selected").length;
			tlen=$("ul[type='t']").find(".selected").length;
//console.log($("ul[type='d']").find(".selected").length);
//console.log($("ul[type='t']").find(".selected").length);
			//if(e == "SD")r = n.number.perm(tlen, 2-dlen)*2;
			if((/^S\D{1}$/.test(e)))r = n.number.perm(tlen, 2-dlen)*2;
			//if(e == "LD")r = n.number.combo(tlen, 3-dlen);
			if(/^L\D{1}$/.test(e))r = n.number.combo(tlen, 3-dlen);
			if((/^D\D{1}$/.test(e)) && e!="DD" && e!="DW"){
				r = n.number.combo(tlen, 3-dlen)*6;
				if(dlen+tlen<4) r=0;
			}
			if(dlen==0) r=0;
			}
			//else if (e == "HD"){
			else if ((/^\D{1}D$/.test(e)) && e!="DD" && e!="DW"){
				r=c.find(".selected").length*55;
			}
			else if (e.indexOf("H") > -1 || e=="3Q" || e=="3Z" || e=="6Q" || e=="6Z"){
				r=0;
				if(e=="3Q" || e=="3Z"){
					var zhs_ex3xhz= new Array(0,1,2,1,3,3,3,4,5,4,5,5,4,5,5,4,5,5,4,5,4,3,3,3,1,2,1,0);
				}
				else if(e=="6Q" || e=="6Z"){
					var zhs_ex3xhz= new Array(0,0,0,1,1,2,3,4,5,7,8,9,10,10,10,10,9,8,7,5,4,3,2,1,1,0,0,0);
				}
				else{
					var zhs_ex3xhz = new Array(1,3,6,10,15,21,28,36,45,55,63,69,73,75,75,73,69,63,55,45,36,28,21,15,10,6,3,1);
				}
				zhs_xh = t.map(c.find(".selected"),
				function(e) {
					return t.trim(t(e).find("span").text())
				});
				
				for (var ifor=0; ifor<zhs_xh.length; ifor++)
				{
					r += zhs_ex3xhz[zhs_xh[ifor]];
				}
//console.log(r);
			}
            else if (e == "F3" || e == "FQ" || e == "FZ") r = n.number.perm(c.find(".selected").length, 2);
			
            else if (e == "F6" || e == "Q6" || e == "Z6") r = c.find(".selected").length>8 ? 0 :n.number.combo(c.find(".selected").length, 3);
			
            else if (e == "F2") l = c.find(".selected").length-1,
            	l < 1 || l > 6 ? r = 0 : r = n.number.combo(l, 2) + l;
            else if (e == "R1") r = c.find(".selected").length;
            else if (e == "R2") {
                r = 0,
                c.each(function(e) {
                    var n = t(this).find(".selected").length;
                    n && a.push(n)
                });
                var h = n.number.eachCombo(a, 2);
                t.each(h,
                function(e, t) {
                    r += t[0] * t[1]
                })
            } 
			else if (e == "DW") r = n.number.combo(c.find(".selected").length, 1);
			else c.each(function() {
                var e = t(this).find(".selected").length;
                r *= e,
                a.push(e)
            });
//console.log(r, e, a);
            n.mobile.calcu(r, e, a)
        };
        i.text(r),
        s.text(r * n.mobile.price)
    },
    n.mobile.clearTemplate = function() {
        var e = 3,
        n, r, i = t("#setting").attr("pt");
        for (var s = 0; s < e; s++) n = t("#hd" + (s + 1)),
        r = t("#bd" + (s + 1)),
        s == 0 ? n.html('<tr><td colspan="12">\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...</td></tr>') : i == "DD" ? n.html("") : n.html('<tr><td colspan="12">\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...</td></tr>'),
        r.html("")
    },
    n.mobile.getChartNum = function(e, n) {
        var r = e[0].Body,
        i = e[1].Body,
        s = [];
        return t.each(r,
        function(e, t) {
            var r = [],
            o = t[0].S,
            u = i[e],
            a = "";
            for (var f = 0; f < u.length; f++) {
                var l = "class='k'",
                c = "",
                h = u[f].T * 1,
                p = u[f].S * 1,
                d = u[f].E * 1;
                d && d > 1 && (c = "<i>" + d + "</i>");
                if (h == 2 || h == 3) {
                    l = "class = 'pitch'";
                    if (!d) {
                        var v = o.split("");
                        for (var m = 0; m < v.length; m++) m == 5 - n ? a += "<b>" + v[m] + "</b>": a += v[m]
                    } else a = o
                }
                r.push('<td class="loss"><span ' + l + ">" + c + p + "</span></td>")
            }
            s.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + '</td><td class="num">' + a + "</td>" + r.join("") + "</tr>")
        }),
        s || []
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
        var e = t("#setting").attr("pt"),
        r = t(".chart-tab"),
        i = t("#des"),
        s,
        o = 0,
        u = /^(F)\d{1}$/g.test(e),
        a = /^\d{1}[DT]$/.test(e),
        f = /^(DD)$/.test(e),
        l = "none",
        c = [592, 604],
        h = [];
        u ? (o = e.replace(/^F(\d{1})$/, "$1") * 1, o > 2 ? (h = ["\u5f00\u5956\u53f7\u7801", "\u5927\u5c0f/\u5947\u5076", "\u8de8\u5ea6/\u91cd\u53f7\u7c7b\u578b"], i.html(n.mobile.des.zhu3)) : o === 2 && (h = ["\u5f00\u5956\u53f7\u7801", "\u5927\u5c0f/\u5947\u5076", "\u8de8\u5ea6/\u95f4\u8ddd\u7c7b\u578b"], i.html(n.mobile.des.zhu2))) : a ? (o = e.replace(/^(\d{1})[DT]$/, "$1") * 1, o == 5 ? (h = ["\u4e07\u4f4d", "\u5343\u4f4d", "\u767e\u4f4d", "\u5341\u4f4d", "\u4e2a\u4f4d"], i.html(n.mobile.des.zhi)) : o == 4 ? (h = ["\u5343\u4f4d", "\u767e\u4f4d", "\u5341\u4f4d", "\u4e2a\u4f4d"], i.html(n.mobile.des.zhi)) : o == 3 ? (h = ["\u767e\u4f4d\u5956\u53f7", "\u5341\u4f4d\u5956\u53f7", "\u4e2a\u4f4d\u5956\u53f7"], i.html(n.mobile.des.zhi)) : o == 2 ? (h = ["\u5341\u4f4d\u5956\u53f7", "\u4e2a\u4f4d\u5956\u53f7", "\u540e\u4e8c\u5f62\u6001"], i.html(n.mobile.des.zhi2)) : o == 1 && (h = ["\u4e2a\u4f4d\u5956\u53f7", "\u5f62\u6001\u5206\u5e03", "\u4e2a\u4f4d\u632f\u5e45"], i.html(n.mobile.des.zhi1))) : f && (h = [], i.html(n.mobile.des.dd));
        var p = t(".xq-nav-chart"),
        d = p.find("a");
        if (h.length) {
            p.show(),
            p.parent().show();
            for (var v = 0; v < h.length; v++) d.eq(v).text(h[v])
        } else p.hide(),
        p.parent().hide();
        var m = t("#hd_chart3,#hd_chart4"),
        g = t("#bd_chart4,#bd_chart5");
        t(".chart-tab-box").find("div").removeClass(l),
        a ? o == 5 ? (m.show(), g.removeClass(l)) : o == 4 ? (m.eq(1).hide(), g.eq(1).addClass(l), m.eq(0).show(), g.eq(0).removeClass(l)) : o < 4 && (m.hide(), g.addClass(l)) : (m.hide(), g.addClass(l));
        var y = p.find(".sel").attr("m") * 1 || 0;
        f && (y = 0);
        switch (y) {
        case 0:
            u ? s = "x" + (o > 2 ? 3 : 2) + "zxm": a ? s = "dww" + (6 - o) + "m": f && (s = "dxdsm");
            break;
        case 1:
            u ? s = "x" + (o > 2 ? 3 : 2) + "dxjom": a && (o == 1 ? s = "dw5xtm": s = "dww" + (6 - o + 1) + "m");
            break;
        case 2:
            u ? o === 3 || o === 6 ? s = "x3kdchm": o === 2 && (s = "x2kdjjm") : a && (o == 2 ? s = "x2zhxm": o == 1 ? s = "dw5zfm": s = "dww" + (6 - o + 2) + "m");
            break;
        case 3:
            s = "dww" + (6 - o + 3) + "m";
            break;
        case 4:
            s = "dww5m"
        }
        var b = ['<tr><th width="28">\u671f\u53f7</th><th width="42">\u5956\u53f7</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th rowspan="2" class="br2">\u5956\u53f7</th><th colspan="4" class="br2">\u5341\u4f4d</th><th colspan="4">\u4e2a\u4f4d</th></tr><tr><th>\u5927</th><th>\u5c0f</th><th>\u5355</th><th class="br2">\u53cc</th><th >\u5927</th><th>\u5c0f</th><th>\u5355</th><th>\u53cc</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="6" class="br2">\u5f62\u6001\u5206\u5e03</th><th colspan="3">012\u8def</th></tr><tr><th>\u5927</th><th>\u5c0f</th><th>\u5947</th><th>\u5076</th><th>\u8d28</th><th class="br2">\u5408</th><th>0</th><th>1</th><th>2</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="5" class="br2">\u5927\u5c0f</th><th colspan="5">\u5947\u5076</th></tr><tr><th>\u5f62\u6001</th><th>0:3</th><th>1:2</th><th>2:1</th><th class="br2">3:0</th><th>\u5f62\u6001</th><th>0:3</th><th>1:2</th><th>2:1</th><th>3:0</th></tr>', '<tr><th width="28">\u671f\u53f7</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="6" class="br2">\u7b2c\u4e00\u4f4d</th><th colspan="6">\u7b2c\u4e8c\u4f4d</th></tr><tr><th>\u5927</th><th>\u5c0f</th><th>\u5947</th><th>\u5076</th><th>\u8d28</th><th class="br2">\u5408</th><th>\u5927</th><th>\u5c0f</th><th>\u5947</th><th>\u5076</th><th>\u8d28</th><th>\u5408</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="4" class="br2">\u5927\u5c0f</th><th colspan="4">\u5947\u5076</th></tr><tr><th>\u5f62\u6001</th><th>0:2</th><th>1:1</th><th class="br2">2:0</th><th>\u5f62\u6001</th><th>0:2</th><th>1:1</th><th>2:0</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="10" class="br2">\u8de8\u5ea6</th><th colspan="3">\u91cd\u53f7\u7c7b\u578b</th></tr><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th class="br2">9</th><th>\u7ec4\u516d</th><th>\u7ec4\u4e09</th><th>\u8c79\u5b50</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="10" class="br2">\u8de8\u5ea6</th><th colspan="2">\u95f4\u8ddd\u7c7b\u578b</th></tr><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th class="br2">9</th><th>\u5bf9\u5b50</th><th>\u8fde\u53f7</th></tr>'];
        t.ajax({
            url: n.mobile.getchartUrl_dev + "?lotId=" + zoust + "&chartType=" + s + "&r=" + t.now(),
            dataType: "jsonp",
            success: function(e) {
                if (e) switch (y) {
                case 0:
                    var i;
                    if (f) {
                        r.css("height", c[1]),
                        t("#hd1").html(b[1]);
                        var s = e[0].Body,
                        l = e[1].Body,
                        h = e[2].Body,
                        p = [];
                        t.each(s,
                        function(e, t) {
                            var n = [],
                            r = t[0].S,
                            i = l[e],
                            s = h[e];
                            for (var o = 0; o < i.length; o++) {
                                var u = "loss",
                                a = "",
                                f = i[o].S;
                                if (f == "\u5927" || f == "\u5c0f") u = "ball01";
                                else if (f == "\u5355" || f == "\u53cc") u = "ball09";
                                o == i.length - 1 && (a = " br2"),
                                n.push("<td class='" + u + a + "'><span>" + f + "</span></td>")
                            }
                            for (var o = 0; o < s.length; o++) {
                                var u = "loss",
                                f = s[o].S;
                                if (f == "\u5927" || f == "\u5c0f") u = "ball10";
                                else if (f == "\u5355" || f == "\u53cc") u = "ball06";
                                n.push("<td class=" + u + "><span>" + f + "</span></td>")
                            }
                            p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + '</td><td class="num br2"><span>' + r + "</span></td>" + n.join("") + "</tr>")
                        }),
                        i = p
                    } else r.css("height", c[0]),
                    t("#hd1").html(b[0]),
                    i = n.mobile.getChartNum.apply(null, [e, o]);
                    t("#bd1").html(i.join(""));
                    break;
                case 1:
                    var i;
                    if (u) {
                        r.css("height", c[1]),
                        o > 2 ? t("#hd2").html(b[3]) : t("#hd2").html(b[6]);
                        var d = e[0].Body,
                        v = e[1].Body,
                        m = e[2].Body,
                        g = e[3].Body,
                        p = [];
                        t.each(d,
                        function(e, t) {
                            var n = v[e],
                            r = m[e],
                            i = g[e],
                            s = [];
                            for (var o = 0; o < t.length; o++) {
                                var u = t[o].S;
                                s.push("<td>" + u + "</td>")
                            }
                            for (var o = 0; o < n.length; o++) {
                                var a = "loss",
                                f = "",
                                l = n[o].T * 1,
                                u = n[o].S;
                                l == 2 && (a = "ball06"),
                                o == n.length - 1 && (f = " br2"),
                                s.push("<td class='" + a + f + "'><span>" + u + "</span></td>")
                            }
                            for (var o = 0; o < r.length; o++) {
                                var u = r[o].S;
                                s.push("<td>" + u + "</td>")
                            }
                            for (var o = 0; o < i.length; o++) {
                                var a = "loss",
                                l = i[o].T * 1,
                                u = i[o].S;
                                l == 2 && (a = "ball07"),
                                s.push("<td class='" + a + "'><span>" + u + "</span></td>")
                            }
                            p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + "</td>" + s.join("") + "</tr>")
                        }),
                        i = p
                    } else if (a) if (o > 1) r.css("height", c[0]),
                    t("#hd2").html(b[0]),
                    i = n.mobile.getChartNum.apply(null, [e, o - 1]);
                    else {
                        r.css("height", c[1]),
                        t("#hd2").html(b[2]);
                        var w = e[0].Body,
                        E = e[1].Body,
                        p = [];
                        t.each(w,
                        function(e, t) {
                            var n = [],
                            r = E[e];
                            for (var i = 0; i < t.length; i++) {
                                var s = "loss",
                                o = "",
                                u = t[i].S;
                                if (u == "\u5927" || u == "\u5c0f") s = "ball01";
                                else if (u == "\u5947" || u == "\u5076") s = "ball02";
                                else if (u == "\u8d28" || u == "\u5408") s = "ball03";
                                i == t.length - 1 && (o = " br2"),
                                n.push("<td class='" + s + o + "'><span>" + u + "</span></td>")
                            }
                            for (var i = 0; i < r.length; i++) {
                                var s = "loss",
                                a = r[i].T * 1,
                                u = r[i].S;
                                a == 2 && (s = "ball04"),
                                n.push("<td class=" + s + "><span>" + u + "</span></td>")
                            }
                            p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + "</td>" + n.join("") + "</tr>")
                        }),
                        i = p
                    }
                    t("#bd2").html(i.join(""));
                    break;
                case 2:
                    var i;
                    if (a) if (o > 2) r.css("height", c[0]),
                    t("#hd3").html(b[0]),
                    i = n.mobile.getChartNum.apply(null, [e, o - 2]);
                    else {
                        if (o == 1) {
                            r.css("height", c[0]),
                            t("#hd3").html(b[4]);
                            var w = e[0].Body,
                            p = [];
                            t.each(w,
                            function(e, t) {
                                var n = [];
                                for (var r = 0; r < t.length; r++) {
                                    var i = "loss",
                                    s = "",
                                    o = t[r].T * 1,
                                    u = t[r].S;
                                    o == 2 && (i = "ball05"),
                                    r == t.length - 1 && (s = " br2"),
                                    n.push("<td class='" + i + s + "'><span>" + u + "</span></td>")
                                }
                                p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + "</td>" + n.join("") + "</tr>")
                            })
                        } else if (o == 2) {
                            r.css("height", c[1]),
                            t("#hd3").html(b[5]);
                            var w = e[0].Body,
                            E = e[1].Body,
                            p = [];
                            t.each(w,
                            function(e, t) {
                                var n = [],
                                r = E[e];
                                for (var i = 0; i < t.length; i++) {
                                    var s = "loss",
                                    o = "",
                                    u = t[i].T * 1,
                                    a = t[i].S;
                                    if (a == "\u5927" || a == "\u5c0f") s = "ball01";
                                    else if (a == "\u5947" || a == "\u5076") s = "ball02";
                                    else if (a == "\u8d28" || a == "\u5408") s = "ball03";
                                    i == t.length - 1 && (o = " br2"),
                                    n.push("<td class='" + s + o + "'><span>" + a + "</span></td>")
                                }
                                for (var i = 0; i < r.length; i++) {
                                    var s = "loss",
                                    o = "",
                                    u = r[i].T * 1,
                                    a = r[i].S;
                                    if (a == "\u5927" || a == "\u5c0f") s = "ball01";
                                    else if (a == "\u5947" || a == "\u5076") s = "ball02";
                                    else if (a == "\u8d28" || a == "\u5408") s = "ball03";
                                    i == t.length - 1 && (o = " br2"),
                                    n.push("<td class='" + s + o + "'><span>" + a + "</span></td>")
                                }
                                p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + "</td>" + n.join("") + "</tr>")
                            })
                        }
                        i = p
                    } else if (u) {
                        r.css("height", c[1]);
                        var p = [];
                        if (o > 2) {
                            t("#hd3").html(b[7]);
                            var S = e[0].Body,
                            x = e[1].Body;
                            t.each(S,
                            function(e, t) {
                                var n = [],
                                r = x[e];
                                for (var i = 0; i < t.length; i++) {
                                    var s = "loss",
                                    o = "",
                                    u = t[i].T * 1,
                                    a = t[i].S;
                                    u == 2 && (s = "greenbg"),
                                    i == t.length - 1 && (o = " br2"),
                                    n.push("<td class='" + s + o + '\'><span class="k">' + a + "</span></td>")
                                }
                                for (var i = 0; i < r.length; i++) {
                                    var s = "loss",
                                    u = r[i].T * 1,
                                    a = r[i].S;
                                    if (u == 2 || u == 3) s = "ball11";
                                    n.push("<td class=" + s + ">" + a + "</td>")
                                }
                                p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + "</td>" + n.join("") + "</tr>")
                            })
                        } else if (o == 2) {
                            t("#hd3").html(b[8]);
                            var S = e[0].Body,
                            T = e[1].Body;
                            t.each(S,
                            function(e, t) {
                                var n = [],
                                r = T[e];
                                for (var i = 0; i < t.length; i++) {
                                    var s = "loss",
                                    o = "",
                                    u = t[i].T * 1,
                                    a = t[i].S;
                                    u == 2 && (s = "greenbg"),
                                    i == t.length - 1 && (o = " br2"),
                                    n.push("<td class='" + s + o + '\'><span class="k">' + a + "</span></td>")
                                }
                                for (var i = 0; i < r.length; i++) {
                                    var s = "loss",
                                    u = r[i].T * 1,
                                    a = r[i].S;
                                    if (u == 2 || u == 3) s = "ball11";
                                    n.push("<td class=" + s + ">" + a + "</td>")
                                }
                                p.push("<tr><td>" + e.replace(/^(\d{6})/g, "") + "</td>" + n.join("") + "</tr>")
                            })
                        }
                        i = p
                    }
                    t("#bd3").html(i.join(""));
                    break;
                case 3:
                    var i;
                    r.css("height", c[0]),
                    t("#hd4").html(b[0]),
                    i = n.mobile.getChartNum.apply(null, [e, o - 3]),
                    t("#bd4").html(i.join(""));
                    break;
                case 4:
                    var i;
                    r.css("height", c[0]),
                    t("#hd5").html(b[0]),
                    i = n.mobile.getChartNum.apply(null, [e, o - 4]),
                    t("#bd5").html(i.join(""))
                }
            }
        })
    },
    n.mobile.updataMiss = function(e) {
        var r = t("#setting").attr("pt"),
        i = t.trim(e),
        s = location.host == "./index.htm";
        t.ajax({
            url: n.mobile.qmissedanaUrl_dev + "?LotID=255401&Side=&Issue=151010050&lottType="+czname+"&pt=" + r + "&rnd=" + Math.random(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.updataMiss.call(null, i)
                },
                n.mobile.ylfreq)
            },
            success: function(e) {
                if (e) {
                    var o = [e.wei1, e.wei2, e.wei3, e.wei4, e.wei5],
                    u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    a = n.mobile.box,
                    f = 1,
                    l,
                    c,
                    h,
                    p;
                    if (r == "DD") {
                        o = [e.dxds1, e.dxds2];
                        if (!o[0] && s) {
                            setTimeout(function() {
                                n.mobile.updataMiss.call(null, i)
                            },
                            n.mobile.ylfreq);
                            return
                        }
                        for (var d = 0; d < 2; d++) l = h = 0,
                        c = a.eq(d).find("em"),
                        c.each(function(e) {
                            var n = t(this).attr("r");
							n=n.replace('大','0').replace('小','1').replace('单','2').replace('双','3');
                            p = o[d][n],
                            h < p * 1 && (h = p * 1, l = e),
                            t(this).removeClass("red").html(p)
                        }),
                        c.eq(l).addClass("red")
                    } else if (r.indexOf("F") > -1) {
                        o = [e.zhu2x, e.zhu3x];
                        var d = 1;
                        r == "F2" && (d = 0);
                        if (!o[d] && s) {
                            setTimeout(function() {
                                n.mobile.updataMiss.call(null, i)
                            },
                            n.mobile.ylfreq);
                            return
                        }
                        l = h = 0,
                        c = a.find("em"),
                        c.each(function(e) {
                            p = o[d][e],
                            h < p * 1 && (h = p * 1, l = e),
                            t(this).removeClass("red").html(p)
                        }),
                        c.eq(l).addClass("red")
                    } else {
						r == "DW"?f = 5:r.indexOf("D") > -1 || r.indexOf("Q3")>-1 || r.indexOf("T") > -1 ? f = r.replace(/[D|T]/g, "") * 1 : r.indexOf("R") > -1 && (f = 5);
                        if (!o[5 - f] && s) {
                            setTimeout(function() {
                                n.mobile.updataMiss.call(null, i)
                            },
                            n.mobile.ylfreq);
                            return
                        }
                        var v = a.length;
						var ford0=5 - f;
						if(r.indexOf("Q3")>-1) ford0=0;
						if(r.indexOf("Z3")>-1) ford0=1;
                        for (var d = ford0, m = 0; d < 5, m < v; d++, m++) 
						
						l = h = 0,
                        c = a.eq(m).find("em"),
                        c.each(function(e) {
                            p = o[d][u[e]],
                            h < p * 1 && (h = p * 1, l = e),
                            t(this).removeClass("red").html(p)
                        }),
                        c.eq(l).addClass("red")
                    }
                } else setTimeout(function() {
                    n.mobile.updataMiss.call(null, i)
                },
                n.mobile.ylfreq)
            }
        }),
        n.mobile.myHelper = function(e) {
            var r = n.mobile.isHelp || 0,
            i = e ? "&Issue=" + e: "";
            if (!r) return;
            t.ajax({
                type: "POST",
                url: n.mobile.qtopbetlistUrl_dev + "?LotID=" + n.mobile.lotType + "&TopCount=9" + i + "&rnd=" + +(new Date),
                dataType: "json",
                success: function(r) {
                    if (r) {
                        var i = r.length,
                        s = [];
                        if (e && location.host == "./index.htm" && i && r[1].status == "\u7b49\u5f85\u5f00\u5956") {
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
                            f = r[o].issue.replace(/^\d{5}/g, "").replace(/(^\d\d)/g, "$1-"),
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
        }
    },

    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),                                                
        n.mobile.selectCodeInit();
        $('#kk1').trigger("click");
    })
})(window);

}   });

