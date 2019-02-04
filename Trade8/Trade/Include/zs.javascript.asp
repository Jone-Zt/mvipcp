<script language="jscript" runat="server">
//var code = "[105]-,-,0123456789,0123456789,01234$[105]-,-,0,8,2";
function getzs_run(code,id){
    //Response.write(code );
    var _getzs = new getzs(code,id);
    return _getzs.get();
}
function getzs(code,id){

    var lotteryType;

    var allType = ["ssc","ks","syxw","sd","ssq","dlt","zc","swxw","qxc","qlc","plw","pls","klsf","klse","eexw"];

    id = id.toLowerCase();

    for(var i=0;i<allType.length;i++){
    //Response.write("["+id.indexOf(allType[i])+"]");
        if(id == "syydj"){
            lotteryType = "syxw";
            break;
        }
        if(id == "hnwfc" || id == "ynwfc" || id == "txffc"){
            lotteryType = "ssc";
            break;
        }
        if(id.indexOf(allType[i]) >= 0){
            lotteryType = allType[i];
            break;
        }
    }

    //Response.write("[-"+lotteryType+"-]");
    var getCount = {
        "ssc":getzs.GetZhuShu_ssc,
        "ks":getzs.GetZhuShu_ks,
        "syxw":getzs.GetZhuShu_syxw,
        "sd":getzs.GetZhuShu_sd,
        "ssq":getzs.GetZhuShu_ssq,
        "dlt":getzs.GetZhuShu_dlt,
        "zc":getzs.GetZhuShu_zc,
        "swxw":getzs.GetZhuShu_swxw,
        "qxc":getzs.GetZhuShu_qxc,
        "qlc":getzs.GetZhuShu_qlc,
        "plw":getzs.GetZhuShu_plw,
        "pls":getzs.GetZhuShu_pls,
        "klsf":getzs.GetZhuShu_klsf,
        "klse":getzs.GetZhuShu_klse,
        "eexw":getzs.GetZhuShu_eexw
    }
    if(lotteryType!=""){

        var codes = code.split("$");
        var getPlay = /\[(\d+?)\]/;
        var play = codes[0].match(getPlay);
        var _code = codes[0].replace(play[0], "");

        for(var i=0;i<codes.length;i++){
            var play = codes[i].match(getPlay);//获取玩法
            var _code = codes[i].replace(play[0], "");//获取号码
            this.count += getCount[lotteryType](_code,play[1]);
        }
    }
}
getzs.prototype = {
    count:0,
    get:function(){
        return this.count;
    }
}
getzs.GetZhuShu_ssc = function(codes, checkType) {//时时彩

    var zhs_exzxhz = new Array(1,1,2,2,3,3,4,4,5,5,5,4,4,3,3,2,2,1,1);
    //三星组选和值
    var zhs_ex3xzxhz = new Array(1,1,2,3,4,5,7,8,10,12,13,14,15,15,15,15,14,13,12,10,8,7,5,4,3,2,1,1);
    //三星直选和值
    var zhs_ex3xhz = new Array(1,3,6,10,15,21,28,36,45,55,63,69,73,75,75,73,69,63,55,45,36,28,21,15,10,6,3,1);
    //二星直选和值
    var zhs_ex2xcxhz= new Array(1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1);
    //组三和值
    var zhs_ex3xz3hz= new Array(0,1,2,1,3,3,3,4,5,4,5,5,4,5,5,4,5,5,4,5,4,3,3,3,1,2,1,0);
    //三星组六和值
    var zhs_ex3xz6hz= new Array(0,0,0,1,1,2,3,4,5,7,8,9,10,10,10,10,9,8,7,5,4,3,2,1,1,0,0,0);

    
    if (codes.length == 0) {
        return 0;
    }
    var zs = 0;


 if (checkType == 116){ //二星组选复式
        //-,-,-,5,6,7,8,9
        //var arrcode = codes.split(",");
		var arrcode = codes.replace(/\,/g,"");
        var l = arrcode.length-3;
        if (l >= 2 && l <= 10) {
            zs = l * (l - 1) / 2;
        }

    } 

else if (checkType == 117){ //二星组选单式
        zs = 1;
    } 
 
else if (checkType == 118) //二星组选和值
    {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_exzxhz[arrcode[i]];
        }
    } 

else if (checkType == 315 || checkType == 335 || checkType == 235) //组三
    {
        //var arrcode = codes.split(",");
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase = 2;
        var ddmp = 2;
        zs = Combination(n, ddbase) * ddmp;
    } 

else if (checkType == 157) {
        //var arrcode = codes.split(",");
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase = 3;
        var ddmp = 6;
        zs = Combination(n, ddbase) * ddmp;
    } 

else if (checkType == 177 || checkType == 178 || checkType == 179) {
        //var arrcode = codes.split(",");
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase = 1;
        var ddmp = 55;
        zs = Combination(n, ddbase) * ddmp;
    } 

else if (checkType == 313) //组三单式
    {
        zs = 1;
    } 

else if (checkType == 316 || checkType == 336 || checkType == 236) //组六
    {
		if(/\d{2}/.test(codes)){
			zs = 999999;
		}else{
			//var arrcode = codes.split(",");
			var arrcode = codes.replace(/\,/g,"");
			var n = arrcode.length;
			var ddbase = 3;
			var ddmp = 1;
        	zs = Combination(n, ddbase) * ddmp;
		}
    } 

else if (checkType == 314 || checkType == 704) //组六单式---------------------------------------
    {
		if(/\d{2}/.test(codes)){
			zs = 999999;
		}else{
			zs = 1;
		}
    } 

else if (checkType == 317) //组选包胆
    {
        var arrcode = codes.split(",");
        var n = arrcode.length;
        if (n == 1 && arrcode[0].length == 1) {
            zs = 55
        } else if (n == 2 && arrcode[0].length == 1 && arrcode[1].length == 1) {
            zs = 10
        } else {
            zs = 0
        }
    } 

else if (checkType == 318) //三星组选和值
    {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_ex3xzxhz[arrcode[i]];
        }
    } 

else if (checkType == 705 || checkType == 725 || checkType==715) //组三和值
    {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_ex3xz3hz[arrcode[i]];
        }
    } 

else if (checkType == 706 || checkType==726 || checkType==716) //三星组六和值
    {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_ex3xz6hz[arrcode[i]];
        }
    } 

else if (checkType == 701) //组三胆拖
    {
        var arrcode = codes.split(";");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp = 2;
        var numbase = 2;
        zs = Combination(cnum, numbase - cnun) * ddmp;
    } 

else if (checkType == 702) //组六胆拖
    {
        var arrcode = codes.split(";");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp = 1;
        var numbase = 3;
        zs = Combination(cnum, numbase - cnun) * ddmp;
    } 

else if (checkType == 704) //组选单式
    {
        zs = 1;
    } 

else if (checkType == 703 || checkType == 201 || checkType == 231) //三星组三单式
    {
        zs = 2;
    } 

else if (checkType == 319) //三星直选组合复式
    {
        //var arrcode = codes.split(",");
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase = 3;
        var ddmp = 6;
        zs = Combination(n, ddbase) * ddmp;

    } 

else if (checkType == 304 || checkType == 364 || checkType == 264) //三星直选和值
    {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_ex3xhz[arrcode[i]];
        }
    } 

else if (checkType == 197) {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_ex3xzxhz[arrcode[i]];
        }
    } 

else if (checkType == 704) //直选胆拖
    {
        var arrcode = codes.split(";");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp = 6;
        var numbase = 3;
        zs = Combination(cnum, numbase - cnun) * ddmp;
    } 

else if (checkType == 305) //二星直选和值
    {
        var arrcode = codes.split(",");
        for (var i = 0; i < arrcode.length; i++) {
            zs += zhs_ex2xcxhz[arrcode[i]];
        }
    } 

else if (checkType == 311) //二星组选包胆
    {
        var arrcode = codes.split(",");
        zs += arrcode.length * 10;
    }
    /*else if(checkType==424 || checkType==425 ) //前一和二
        {
            var arrcode = codes.split(","); 
            zs = 1;
            for (var i=0; i<arrcode.length; i++)
            {
                zs *= arrcode[i].length;
            }
        }*/
    //胆拖
    else if (checkType == 401 || checkType == 402 || checkType == 203 || checkType == 204 || checkType == 103 || checkType == 102 || checkType==405 || checkType ==406 || checkType ==407) {
        var arrcode = codes.split(";");

        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        if (checkType == 402 || checkType == 204 || checkType == 102) {
            var numbase = 3;
            var ddmp = 1;
        } else if (checkType == 401 || checkType == 203 || checkType == 103) {
            var numbase = 2;
            var ddmp = 2;
        } else if (checkType==405 || checkType ==406 || checkType ==407) {
            var numbase = 3;
            var ddmp = 6;
        }

        zs = Combination(cnum, numbase - cnun) * ddmp;
    } 

    
else if(checkType == 999){

	var arrcode = codes.split(",");

	for(var ii = 0,jj = arrcode.length;ii<jj;ii++){
		if(arrcode[ii].indexOf("-") == -1){
			zs += arrcode[ii].length; 
		}
	}
}
//龙虎大小单双"|1000-1009";
else if (checkType.toString().substr(0,3)=="100"){
    var arrcode = codes.replace(/\,/g,"").replace(/\-/g,"");
    zs = arrcode.length;
}
else {
        var arrcode = codes.split(",");
        zs = 1;
        for (var i = 0; i < arrcode.length; i++) {
            zs *= arrcode[i].length;
        }

        if (Combination == 108) {
            zs *= 5;
        } else if (Combination == 180) {
            zs *= 4;
        } else if (Combination == 109) {
            zs *= 3;
        } else if (Combination == 110) {
            zs *= 2;
        }
    }
    return zs;
}

getzs.GetZhuShu_ks = function(codes, checkType) {//快3
    //Response.write("["+codes+" This is ks! "+checkType+"]");
    if (codes.length == 0) {
        return 0;
    }
    var zs = 0;;
    //前一复式
    if (checkType == 101) {
        var arrcode = codes.split(",");
        zs = arrcode.length;

    }
    if (checkType == 107 || checkType == 108) {

        var arrcode = codes.split(" ");
        zs = arrcode.length;

    }
    //任选复式 选二.... 选八
    else if (checkType == 103 || checkType == 104 || checkType == 105 || checkType == 106) {
        //var arrcode = codes.split(",");
		var arrcode = codes.replace(/\,/g,"");		
        if (checkType == "103") {
            var ddbase = 1;
			var n = arrcode.length/2;
        } else if (checkType == "104") {
            var ddbase = 2;
			var n = arrcode.length;
        } else if (checkType == "105") {
            var ddbase = 3;
			var n = arrcode.length;
        } else if (checkType == "106") {
            var ddbase = 1;
			var n = arrcode.length/3;
        }
        var ddmp = 1;
        zs = Combination(n, ddbase) * ddmp;
    }
    //任选胆拖  选二.... 选八
    else if (checkType == 102) {
        var arrcode = codes.split("*");
		
		
		//var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length/2;
        var cnum = arrcodeb.length;
        //alert(cnun+"--"+cnum)
        //var ddmp=1;
        //if (checkType==102)
        //{var numbase=2;}
        zs = cnun * cnum
        if (arrcode[0] == "") {
            zs = 0
        }
        if (arrcode[1] == "") {
            zs = 0
        }
        //zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    return zs;
}


getzs.GetZhuShu_syxw = function(codes,checkType){//11选5
    if(codes.length == 0)
    {
        return 0;
    }
    var zs = 0;;
    //前一复式
    if (checkType==101) 
    {
        
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
		var arrcode = arrcode.replace(/\ /g,"");
        zs = arrcode.length/2;
        
    }
    //任选复式 选二.... 选八
    else if (checkType==102 || checkType==103 || checkType==104 || checkType==105 || checkType==106 || checkType==107 || checkType==108)
    {
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length/2;
        if (checkType=="102")
        {var ddbase=2;}
        else if(checkType=="103")
        {var ddbase=3;}
        else if(checkType=="104")
        {var ddbase=4;}
        else if(checkType=="105")
        {var ddbase=5;}
        else if(checkType=="106")
        {var ddbase=6;}
        else if(checkType=="107")
        {var ddbase=7;}
        else if(checkType=="108")
        {var ddbase=8;}
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp;
    }
    //任选单式 选一,选二.... 选八单式
    else if (checkType==201 || checkType==502 || checkType==504 || checkType==403 || checkType==405 || checkType==202 || checkType==203 || checkType==204 || checkType==205 || checkType==206 || checkType==207 || checkType==208)
    {
        zs=1;
    }
    //任选胆拖  选二.... 选八
    else if(checkType==302 || checkType==303 || checkType==304 || checkType==305 || checkType==306 || checkType==307 || checkType==308 || checkType ==309 || checkType ==310) 
    {
        var arrcode = codes.split(";");
         
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length/2;
        var cnum = arrcodeb.length/2;
        var ddmp=1;
        if (checkType==302)
        {var numbase=2;}
        else if(checkType==303)
        {var numbase=3;}
        else if(checkType==304)
        {var numbase=4;}
        else if(checkType==305)
        {var numbase=5;}
        else if(checkType==306)
        {var numbase=6;}
        else if(checkType==307)
        {var numbase=7;}
        else if(checkType==308)
        {var numbase=8;}
        else if(checkType==309)
        {var numbase=3;}
        else if(checkType==310)
        {var numbase=2;}
        
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    if(checkType==401)  //前三直选复式
    {
        var arrcode = codes.split("*"); 
        var tt1=arrcode[0].split(",");
        var tt2=arrcode[1].split(",");
        var tt3=arrcode[2].split(",");
        
        for (var i=0; i<tt1.length; i++)
        {
            if(tt1[i] == '')continue;  
            for (var k=0;k<tt2.length;k++)
            {
               if(tt2[k] == '')continue;    
               for (var n=0; n<tt3.length;n++)
               {
                  if(tt3[n] == '')continue;  
                  if(tt1[i] != tt3[n] && tt2[k] != tt3[n] && tt1[i] != tt2[k])
                  {
                    zs++;
                  }
                }
            }
        }
    }
    else if(checkType==404)  //前三组选
    {
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length/2;
        var ddbase=3;
        var ddmp=1;
        zs = Combination(n,ddbase)*ddmp; 
    }
    else if (checkType==501) //前二直选复式
    {
        var arrcode = codes.split("*"); 
        var tt1 = arrcode[0].split(",");
        var tt2 = arrcode[1].split(",");

        for (var i=0; i<tt1.length; i++)
        {
            if(tt1[i] == '')continue;  
            if(tt1[i].length>2) Response.End();
            for (var k=0;k<tt2.length;k++)
            {
                if(tt2[k] == '')continue;  
				if(tt2[i].length>2) Response.End();
                if(tt1[i] != tt2[k])
                {
                    zs++;
                }
            }
        }
    }
    else if (checkType==503) //前二组选复式
    {
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length/2;
        var ddbase=2;
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp; 
    }
    return zs;
}


getzs.GetZhuShu_sd = function(codes,checkType){ //3D
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split("|"); 
        zs = 1;
        for (var i=0; i<3; i++)
        {
            zs *= arrcode[i].length;
        }
    }
    else if(checkType==103) //直选和值
    {
        var arrcode = codes.split(","); 
        for (var i=0; i<arrcode.length; i++)
        {
            zs += zhs_ex3xhz[arrcode[i]];
        }
    }
    else if(checkType==104)  //直选胆拖
    {
        var arrcode = codes.split("][");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=6;
        var numbase=3;
        zs = Combination(cnum,numbase-cnun)*ddmp;
    }
    else if (checkType==201) //组六复式
    { 
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase=3;
        var ddmp=1;
        zs = Combination(n,ddbase)*ddmp;  
    }
    else if(checkType==202) //组六和值
    {
        var arrcode = codes.split(","); 
        
        for (var i=0; i<arrcode.length; i++)
        {
            zs += zhs_ex3xz6hz[arrcode[i]];
        }
    }
    else if(checkType==203)  //组六胆拖
    {
        var arrcode = codes.split("][");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=1;
        var numbase=3;
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    else if (checkType == 301) //组三复式
    { 
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase = 2;
        var ddmp = 2;
        zs = Combination(n,ddbase)*ddmp;  
    }
    
    else if(checkType==302) //组三和值
    {
        var arrcode = codes.split(","); 
        
        for (var i=0; i<arrcode.length; i++)
        {
            zs += zhs_ex3xz3hz[arrcode[i]];
        }
    }
    else if(checkType==303)  //组三胆拖
    {
        var arrcode = codes.split("][");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=2;
        var numbase=2;
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    return zs;
}


getzs.GetZhuShu_ssq = function(codes,checkType){//双色球
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split("|"); 
        //var n = arrcode[0].split(",").length;
		var n = arrcode[0].replace(/\,/g,"").length/2;
        var ddbase=6;
        //var ddmp=arrcode[1].split(",").length;
		var ddmp = arrcode[1].replace(/\,/g,"").length/2;
        if(n>=6 && arrcode[1].length > 0 && ddmp>=1)
        {
            zs=Combination(n,ddbase)*ddmp;
        }
        else
        {
            zs = 0
        }
    }
    else if (checkType==103) //胆拖
    {
        var arrcode = codes.split("|"); 
        var hongarr = arrcode[0].split("][");
        var dtxt = hongarr[0].substr(3,hongarr[0].length-3)
        var dlen = dtxt.replace(/,/g,"").length/2
        var ttxt = hongarr[1].substr(2,hongarr[1].length-3)
        var tlen = ttxt.replace(/,/g,"").length/2
        var ddbase=6;
        var ddmp=arrcode[1].replace(/,/g,"").length/2;
        if(dlen>=1 && dlen<=5 && tlen>=2 && ddmp>=1)
        {
            zs=Combination(tlen,ddbase-dlen)*ddmp;
        }
        else
        {
            zs = 0
        }
    }
    return zs;
}


getzs.GetZhuShu_dlt = function(codes,checkType){//大乐透
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split("|"); 
        //var n = arrcode[0].split(",").length;
		var n = arrcode[0].replace(/\,/g,"").length/2;
        var ddbase=5;
        //var ddmp=arrcode[1].split(",").length;
		var ddmp = arrcode[1].replace(/\,/g,"").length/2;
        var ddbase2=2;
        if(n>=5 && ddmp>=2)
        {
            zs=Combination(n,ddbase)*Combination(ddmp,ddbase2);
        }
        else
        {
            zs = 0
        }
    }
    else if (checkType==103) //胆拖
    {
        var arrcode = codes.split("|"); 
        var hongarr = arrcode[0].split("][");
        var dtxt = hongarr[0].substr(3,hongarr[0].length-3)
        var dlen = dtxt.replace(/,/g,"").length/2
        var ttxt = hongarr[1].substr(2,hongarr[1].length-3)
        var tlen = ttxt.replace(/,/g,"").length/2
        
        var lanarr = arrcode[1].split("][");
        var l_dtxt = lanarr[0].substr(3,lanarr[0].length-3)
        var l_dlen = l_dtxt.replace(/,/g,"").length/2
        var l_ttxt = lanarr[1].substr(2,lanarr[1].length-3)
        var l_tlen = l_ttxt.replace(/,/g,"").length/2
        
        
        var ddbase=5;
        var ddbase2=2;
        var ddmp=arrcode[1].replace(/,/g,"").length/2;
        if(dlen>=1 && dlen<=4 && tlen>=2 && (tlen+dlen)>=6  && l_dlen <=1 && l_tlen>=2)
        {
            zs=Combination(tlen,ddbase-dlen)*Combination(l_tlen,ddbase2-l_dlen);
        }
        else
        {
            zs = 0
        }
    }
    else if (checkType==201) //12C5复式
    {
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length/2;
        var ddbase=  2;
        var ddmp = 1;
        if(n>=2)
        {
            zs=Combination(n,ddbase)*ddmp;
        }
        else
        {
            zs = 0
        }
    }
    return zs;
}

getzs.GetZhuShu_zc = function(codes){//足彩
    if(codes.length == 0)
    {
        return 0;
    }
    
    if(LottType == "Rxjc")
    {
    var zs = 0;
    var arrcode = codes.split(","); 
    if(arrcode.length==9)
    {
        zs = 1;
        for(var i=0; i<arrcode.length; i++)
        {
            zs = zs*arrcode[i].length
    if(zs >= 10000)
    {
        alertdiv.alert("单个游戏投注额不能超过2万");
        return ;
    }
        }
    }
    }
    else
    {
    var zs = 1;
    var arrcode = codes.split(","); 
    for(var i=0; i<arrcode.length; i++)
    {
        zs = zs*arrcode[i].length
    }
    }
    return zs;
}



getzs.GetZhuShu_swxw = function(codes,checkType){//15选5
    if(codes.length == 0){
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length/2;
        var ddbase=5;
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp;
    }
    return zs;
}



getzs.GetZhuShu_qxc = function(codes,checkType){//七星彩
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split("|"); 
        zs = 1;
        for (var i=0; i<arrcode.length; i++)
        {
            zs *= arrcode[i].length;
        }
    }
    return zs;
}


getzs.GetZhuShu_qlc = function(codes,checkType){ //七乐彩
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length/2;
        var ddbase=7;
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp;
    }
    return zs;
}


getzs.GetZhuShu_plw = function(codes,checkType){//排列五
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split("|"); 
        zs = 1;
        for (var i=0; i<5; i++)
        {
            zs *= arrcode[i].length;
        }
    }
    return zs;
}


getzs.GetZhuShu_pls = function(codes,checkType){//排列三
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split("|"); 
        zs = 1;
        for (var i=0; i<3; i++)
        {
            zs *= arrcode[i].length;
        }
    }
    else if(checkType==103) //直选和值
    {
        var arrcode = codes.split(","); 
        for (var i=0; i<arrcode.length; i++)
        {
            zs += zhs_ex3xhz[arrcode[i]];
        }
    }
    else if(checkType==104)  //直选胆拖
    {
        var arrcode = codes.split("][");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=6;
        var numbase=3;
        zs = Combination(cnum,numbase-cnun)*ddmp;
    }
    else if (checkType==201) //组六复式
    { 
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase=3;
        var ddmp=1;
        zs = Combination(n,ddbase)*ddmp;  
    }
    else if(checkType==202) //组六和值
    {
        var arrcode = codes.split(","); 
        
        for (var i=0; i<arrcode.length; i++)
        {
            zs += zhs_ex3xz6hz[arrcode[i]];
        }
    }
    else if(checkType==203)  //组六胆拖
    {
        var arrcode = codes.split("][");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=1;
        var numbase=3;
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    else if (checkType == 301) //组三复式
    { 
        //var arrcode = codes.split(","); 
		var arrcode = codes.replace(/\,/g,"");
        var n = arrcode.length;
        var ddbase = 2;
        var ddmp = 2;
        zs = Combination(n,ddbase)*ddmp;  
    }
    
    else if(checkType==302) //组三和值
    {
        var arrcode = codes.split(","); 
        
        for (var i=0; i<arrcode.length; i++)
        {
            zs += zhs_ex3xz3hz[arrcode[i]];
        }
    }
    else if(checkType==303)  //组三胆拖
    {
        var arrcode = codes.split("][");
        //var arrcodea = arrcode[0].split(",");
		var arrcodea = arrcode[0].replace(/\,/g,"");
        //var arrcodeb = arrcode[1].split(",");
		var arrcodeb = arrcode[1].replace(/\,/g,"");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=2;
        var numbase=2;
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    return zs;
}


getzs.GetZhuShu_klsf = function(codes,checkType){//快乐十分
    if(codes.length == 0)
    {
        return 0;
    }
    var zs = 0;;
    //前一复式
    if (checkType==101 || checkType==102) 
    {
        
        var arrcode = codes.split(","); 
        zs = arrcode.length;
        
    }
    //任选复式 选二.... 选八
    else if (checkType==202 || checkType==302 || checkType==401 || checkType==501 || checkType==601 || checkType==701)
    {
        var arrcode = codes.split(","); 
        var n = arrcode.length;
        if(checkType=="202")
        {var ddbase=2;}
        else if(checkType=="302")
        {var ddbase=3;}
        else if(checkType=="401")
        {var ddbase=2;}
        else if(checkType=="501")
        {var ddbase=3;}
        else if(checkType=="601")
        {var ddbase=4;}
        else if(checkType=="701")
        {var ddbase=5;}
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp;
    }
    //任选胆拖  选二.... 选八
    else if(checkType == 203 || checkType == 303 || checkType == 402 || checkType == 502 || checkType == 602 || checkType == 702) 
    {
        var arrcode = codes.split(";");
         
        var arrcodea = arrcode[0].split(",");
        var arrcodeb = arrcode[1].split(",");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=1;
        if (checkType==202)
        {var numbase=2;}
        else if(checkType==302)
        {var numbase=3;}
        else if(checkType==402)
        {var numbase=2;}
        else if(checkType==502)
        {var numbase=3;}
        else if(checkType==602)
        {var numbase=4;}
        else if(checkType==702)
        {var numbase=5;}
        
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    if(checkType==301)  //前三直选复式
    {
        var arrcode = codes.split("*"); 
        var tt1=arrcode[0].split(",");
        var tt2=arrcode[1].split(",");
        var tt3=arrcode[2].split(",");
        
        for (var i=0; i<tt1.length; i++)
        {
            if(tt1[i] == '')continue;  
            for (var k=0;k<tt2.length;k++)
            {
               if(tt2[k] == '')continue;    
               for (var n=0; n<tt3.length;n++)
               {
                  if(tt3[n] == '')continue;  
                  if(tt1[i] != tt3[n] && tt2[k] != tt3[n] && tt1[i] != tt2[k])
                  {
                    zs++;
                  }
                }
            }
        }
    }
    else if (checkType==201) //前二直选复式
    {
        var arrcode = codes.split("*"); 
        var tt1 = arrcode[0].split(",");
        var tt2 = arrcode[1].split(",");

        for (var i=0; i<tt1.length; i++)
        {
            if(tt1[i] == '')continue;  
            for (var k=0;k<tt2.length;k++)
            {
                if(tt2[k] == '')continue;  
                if(tt1[i] != tt2[k])
                {
                    zs++;
                }
            }
        }
    }
    return zs;
}



getzs.GetZhuShu_klse = function(codes,checkType){//快乐十二
    if(codes.length == 0)
    {
        return 0;
    }
    var zs = 0;;
    //前一复式
    if (checkType==101) 
    {
        
        var arrcode = codes.split(","); 
        zs = arrcode.length;
        
    }
    //任选复式 选二.... 选八
    else if (checkType==102 || checkType==103 || checkType==104 || checkType==105 || checkType==106 || checkType==107 || checkType==108)
    {
        var arrcode = codes.split(","); 
        var n = arrcode.length;
        if (checkType=="102")
        {var ddbase=2;}
        else if(checkType=="103")
        {var ddbase=3;}
        else if(checkType=="104")
        {var ddbase=4;}
        else if(checkType=="105")
        {var ddbase=5;}
        else if(checkType=="106")
        {var ddbase=6;}
        else if(checkType=="107")
        {var ddbase=7;}
        else if(checkType=="108")
        {var ddbase=8;}
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp;
    }
    //任选单式 选一,选二.... 选八单式
    else if (checkType==201 || checkType==202 || checkType==203 || checkType==204 || checkType==205 || checkType==206 || checkType==207 || checkType==208)
    {
        zs=1;
    }
    //任选胆拖  选二.... 选八
    else if(checkType==302 || checkType==303 || checkType==304 || checkType==305 || checkType==306 || checkType==307 || checkType==308 || tztype ==309 || tztype ==310) 
    {
        var arrcode = codes.split(";");
         
        var arrcodea = arrcode[0].split(",");
        var arrcodeb = arrcode[1].split(",");
        var cnun = arrcodea.length;
        var cnum = arrcodeb.length;
        var ddmp=1;
        if (checkType==302)
        {var numbase=2;}
        else if(checkType==303)
        {var numbase=3;}
        else if(checkType==304)
        {var numbase=4;}
        else if(checkType==305)
        {var numbase=5;}
        else if(checkType==306)
        {var numbase=6;}
        else if(checkType==307)
        {var numbase=7;}
        else if(checkType==308)
        {var numbase=8;}
        else if(checkType==309)
        {var numbase=3;}
        else if(checkType==310)
        {var numbase=2;}
        
        zs=Combination(cnum,numbase-cnun)*ddmp;
    }
    if(checkType==401)  //前三直选复式
    {
        var arrcode = codes.split("*"); 
        var tt1=arrcode[0].split(",");
        var tt2=arrcode[1].split(",");
        var tt3=arrcode[2].split(",");
        
        for (var i=0; i<tt1.length; i++)
        {
            if(tt1[i] == '')continue;  
            for (var k=0;k<tt2.length;k++)
            {
               if(tt2[k] == '')continue;    
               for (var n=0; n<tt3.length;n++)
               {
                  if(tt3[n] == '')continue;  
                  if(tt1[i] != tt3[n] && tt2[k] != tt3[n] && tt1[i] != tt2[k])
                  {
                    zs++;
                  }
                }
            }
        }
    }
    else if(checkType==404)  //前三组选
    {
        var arrcode = codes.split(","); 
        var n = arrcode.length;
        var ddbase=3;
        var ddmp=1;
        zs = Combination(n,ddbase)*ddmp; 
    }
    else if (checkType==501) //前二直选复式
    {
        var arrcode = codes.split("*"); 
        var tt1 = arrcode[0].split(",");
        var tt2 = arrcode[1].split(",");

        for (var i=0; i<tt1.length; i++)
        {
            if(tt1[i] == '')continue;  
            for (var k=0;k<tt2.length;k++)
            {
                if(tt2[k] == '')continue;  
                if(tt1[i] != tt2[k])
                {
                    zs++;
                }
            }
        }
    }
    else if (checkType==503) //前二组选复式
    {
        var arrcode = codes.split(","); 
        var n = arrcode.length;
        var ddbase=2;
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp; 
    }
    return zs;
}


getzs.GetZhuShu_eexw = function(codes,checkType){//22选5
    if(codes.length == 0)
    {
        return 0;
    }
    
    var zs = 0;
    if (checkType==101) //直选复式
    {
        var arrcode = codes.split(","); 
        var n = arrcode.length;
        var ddbase=5;
        var ddmp=1;
        zs=Combination(n,ddbase)*ddmp;
    }
    return zs;
}

function Combination(n, m) {
    var n1 = 1,
        n2 = 1;
    for (var i = n, j = 1; j <= m; n1 *= i--, n2 *= j++);
    return n1 / n2;
}
</script>