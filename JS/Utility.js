
//��ϸ���
function Combination(n,m)
{
	var n1=1, n2=1;
	for (var i=n,j=1; j<=m; n1*=i--,n2*=j++);
	return n1/n2;
}
function FormatNum(obj)
{
	$(obj).val($(obj).val().replace(/[^\d]/g,''));
}
//����һ��min��max���������
function GetRndNum(min,max)
{
	return Math.round((max-min)*Math.random()+min);
}

//��ȡ��׺
function GetSuffix(file,suffixlist){
    var extend = file.substring(file.lastIndexOf(".")+1);
    return extend;
}
//��ȡ�ļ���
function GetFileName(file){
    var extend = file.substring(file.lastIndexOf("\\")+1);
    return extend;
}
//��֤�ļ���׺
function IsValiDateFile(file,suffixlist){
    var extend = file.substring(file.lastIndexOf(".")+1);
    if(extend==""){return false;}
	else
	{
		var extend = extend.toLowerCase();
		var arr = suffixlist.split("|")
		var rt = false;
		for(var i=0; i< arr.length;i++)
		{
			arr[i] = arr[i].toLowerCase();
			if(arr[i] ==extend)
			{
				rt = true;
				break;
			}
		}
		return rt;
    }
}



//JS ���Ҹ�ʽ��
function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	{
		num = "0";
	}
	var sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	var cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	{
		cents = "0" + cents;
	}
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	{
		num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
	}
	return (((sign)?'':'-') + '��' + num + '.' + cents);
}

function formatCurrency2(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	{
		num = "0";
	}
	var sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	var cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	{
		cents = "0" + cents;
	}
	return (((sign)?'':'-') + num + '.' + cents);
}

//ת����д 
Number.prototype.toMoney = function() 
{ 
	var MAXIMUM_NUMBER = 99999999999.99; 
		
 	var CN_ZERO= "��"; 
 	var CN_ONE= "Ҽ"; 
 	var CN_TWO= "��"; 
 	var CN_THREE= "��"; 
 	var CN_FOUR= "��"; 
	var CN_FIVE= "��"; 
 	var CN_SIX= "½"; 
 	var CN_SEVEN= "��"; 
 	var CN_EIGHT= "��"; 
 	var CN_NINE= "��"; 
 	var CN_TEN= "ʰ"; 
 	var CN_HUNDRED= "��"; 
 	var CN_THOUSAND = "Ǫ"; 
 	var CN_TEN_THOUSAND= "��"; 
	var CN_HUNDRED_MILLION= "��"; 
 	var CN_SYMBOL= ""; 
 	var CN_DOLLAR= coinType; 
 	var CN_TEN_CENT = "��"; 
 	var CN_CENT= "��"; 
 	var CN_INTEGER= "��"; 
 
	// Variables: 
	var integral; // Represent integral part of digit number. 
	var decimal; // Represent decimal part of digit number. 
	 var outputCharacters; // The output result. 
	var parts; 
	var digits, radices, bigRadices, decimals; 
	var zeroCount; 
	var i, p, d; 
	var quotient, modulus; 
 
	if (this > MAXIMUM_NUMBER) 
	{ 
		return ""; 
	} 
 
	// Process the coversion from currency digits to characters: 
	// Separate integral and decimal parts before processing coversion: 

	parts = (this + "").split("."); 
	if (parts.length > 1) 
	{ 
		integral = parts[0]; 
		decimal = parts[1]; 
		// Cut down redundant decimal digits that are after the second. 
		decimal = decimal.substr(0, 2); 
	} 
	else 
	{ 
		integral = parts[0]; 
		decimal = ""; 
	} 
	// Prepare the characters corresponding to the digits: 
	digits= new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE); 
	radices= new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND); 
	bigRadices= new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION); 
	decimals= new Array(CN_TEN_CENT, CN_CENT); 
	 
	 
	 // Start processing: 
	outputCharacters = ""; 
	// Process integral part if it is larger than 0: 
	if (Number(integral) > 0) 
	{ 
		zeroCount = 0; 
		for (i = 0; i < integral.length; i++) 
		{ 
			p = integral.length - i - 1; 
			d = integral.substr(i, 1); 
			quotient = p / 4; 
			modulus = p % 4; 
			if (d == "0") 
			{ 
				zeroCount++; 
			} 
			else 
			{ 
				if (zeroCount > 0) 
				{ 
					outputCharacters += digits[0]; 
				} 
				zeroCount = 0; 
				outputCharacters += digits[Number(d)] + radices[modulus]; 
			} 
			if (modulus == 0 && zeroCount < 4) 
			{ 
				outputCharacters += bigRadices[quotient]; 
			} 
		} 
		outputCharacters += CN_DOLLAR; 
	} 
	// Process decimal part if there is: 
	if (decimal != "") 
	{ 
		for (i = 0; i < decimal.length; i++) 
		{ 
			d = decimal.substr(i, 1); 
 			if (d != "0") 
			{ 
				outputCharacters += digits[Number(d)] + decimals; 
			} 
		} 
	} 

	// Confirm and return the final output string: 
	if (outputCharacters == "") 
	{ 
		outputCharacters = CN_ZERO + CN_DOLLAR; 
	} 
	if (decimal == "") 
	{ 
		outputCharacters += CN_INTEGER; 
	} 
	outputCharacters = CN_SYMBOL + outputCharacters; 
	return outputCharacters; 
} 
//�ֻ�������֤��Ϣ
function isMobil(s) {
	var patrn = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
	if (!patrn.exec(s)) {
		return false;
	}
	return true;
} 

function compare(str1, str2){
    if(str1 < str2){
        return -1;
    }else if(str1 > str2){
        return 1;
    }else{
        return 0;
    }
}

function compareNum(int1, int2){
    var iNum1 = Number(int1);
    var iNum2 = Number(int2);
    if(iNum1 < iNum2){
        return -1;
    }else if(iNum1 > iNum2){
        return 1;
    }else{
        return 0;
    }
}

//ʱ��ת��Ϊ�ַ�����ʽ�� yyyy-MM-dd hh:mm:ss
function TimeToStr(dt){
	var str="";
	if(dt.getFullYear){
  		var y,m,d;
  		y=dt.getFullYear();
  		m=dt.getMonth()+1;  //1-12
  		if(m<10)
		{
			m = "0"+m.toString();
		}
	 
		d=dt.getDate();
		if(d<10)
		{
			d = "0"+d.toString();
		}
		h = dt.getHours();
		if(h<10)
		{
			h = "0"+h.toString();
		}
		n = dt.getMinutes();
		if(n<10)
		{
			n = "0"+n.toString();
		}
		str=""+y+"-"+m+"-"+d+" "+h+":"+n;
	}
	return str;
}

/** 
* ɾ������ָ���±��ָ������ 
* arr.remove(2);//ɾ���±�Ϊ2�Ķ��󣨴�0��ʼ���㣩 
* arr.remove(str);//ɾ��ָ������ 
*/  
Array.prototype.remove=function(obj){  
    for(var i =0;i <this.length;i++){  
        var temp = this[i];  
        if(!isNaN(obj)){  
            temp=i;  
        }  
        if(temp == obj){  
            for(var j = i;j <this.length;j++){  
                this[j]=this[j+1];  
            }  
            this.length = this.length-1;  
        }     
    }  
}  



var funarr=[]
funarr.push("");
//�رյ���ʱ����
function ColseCountdownWin(divid,sytime,sysecond,funindex,fun)
{
	if(funindex){}
	else
	{
		funarr.push(fun);
		funindex = funarr.length-1;
	}
	var ColseCountdown = Number($('#'+sysecond).val())
	if(ColseCountdown <=1)
	{
		$('#'+sysecond).val(10)
		$('#'+divid).dialog('close');
		$('#'+divid).find('#'+sytime).text('10����Զ��ر�');
		
		if(funarr[funindex])
		{
			fun = funarr[funindex];
			fun();
		}
	}
	else
	{
		ColseCountdown = ColseCountdown - 1
		$('#'+sysecond).val(ColseCountdown)
		$('#'+sytime).text(ColseCountdown+'����Զ��ر�');
		window.setTimeout("ColseCountdownWin('"+divid+"','"+sytime+"','"+sysecond+"',"+funindex+")",1000)
	}
}

var page ={
	pagesize:20,
	pageindex:1,
	countpage:0,
	countrs:0,
	closesize:false
}

function createpage(){
	$("#page_wrapper").empty()
	if(page.countrs >0)
	{
		var str = "";
		if(page.closesize)
		{
			str += "ÿҳ: <a href='javascript:;' onclick='setpagesize(20)' style='"+(page.pagesize==20?"color:red;":"")+"'>20</a>";
			str += " <a href='javascript:;' onclick='setpagesize(30)' style='"+(page.pagesize==30?"color:red;":"")+"'>30</a> ";
			str += " <a href='javascript:;' onclick='setpagesize(50)' style='"+(page.pagesize==50?"color:red;":"")+"'>50</a> ";
		}
		if(page.pageindex>1)
		{
			str +="<a class='h_l' href='javascript:;' onclick='setpageindex(1)'>��ҳ</a>"
			str +="&nbsp;&nbsp;<a class='pre'  href='javascript:;' onclick='setpageindex("+(page.pageindex-1)+")'>��һҳ</a>"
		}
		else
		{
			str +="<a class='h_l' href='javascript:;'>��ҳ</a>"
			str +="&nbsp;<a class='pre' href='javascript:;'>��һҳ</a>"
		}
		if(page.pageindex<page.countpage)
		{
			str +="&nbsp;&nbsp;<a class='next'  href='javascript:;' onclick='setpageindex("+(page.pageindex+1)+")'>��һҳ</a>"
			str +="&nbsp;<a class='h_l'  href='javascript:;' onclick='setpageindex("+(page.countpage)+")'>βҳ</a>"
		}
		else
		{
			str +="&nbsp;&nbsp;<a class='next'  href='javascript:;'>��һҳ</a>"
			str +="&nbsp;<a class='h_l'  href='javascript:;'>βҳ</a>"
		}
		str += "&nbsp;"+page.pageindex+"/"+page.countpage+"&nbsp;�ܼ�¼��"+page.countrs+"�� "
		$("#page_wrapper").html(str)
	}
}

function setpagesize(pagesize)
{
	page.pagesize=pagesize;
	do_search()
}
function setpageindex(index)
{
	page.pageindex=index;
	do_search()
}

$(function () {
$('.circle').each(function (index, el) {
var num = $(this).find('span').text() * 3.6;
if (num <= 180) {
$(this).find('.right').css('transform', 'rotate(' + num + 'deg)');
} else {
$(this).find('.right').css('transform', 'rotate(180deg)');
 $(this).find('.left').css('transform', 'rotate(' + (num - 180) + 'deg)');
}
;
});
});