var  Lately  =  {
	 lt_type: '',
	 Top10:function(data){
	 	// console.log(data);
		var str  = '<table width="100%" cellspacing="0" cellpadding="0" border="0">';
	 	if (!data) {
			$('#dqian').html('<span style="text-align:center">暂时没有开奖数据</span>');
			$("#lskj").html('<tr><td style="text-align:center">暂时没有开奖数据</td><tr></table>');
			return;
	 	}
		var strstr = Lately.newCode(data[0]); 
		for(i=0;i < 10 ; i++ ){
		   var code =  Lately.code(data[i].open_code); 	
		   str += '<tr><td>第'+data[i].issue+'期</td>';
		   str += '<td>'+code+'</td><tr>';
		} 
		str    += '</table>';
		$('#lskj').html(str);
		$("#dqian").html(strstr);
	 },
	 code:function(code){
		 var  list = code.split(',');
		 var  cc   =  "";
		 switch(Lately.lt_type){
		     case 'ssc' :
			 case 'syxw':
			 case  'ks' :
			 case  'pk10': 
			 case  'qxc':
			 case  'pls' :
			 case  'plw' :
			  cc = "<i>"+list.join(" ")+"</i>";
			  break;
			 case 'ssq': 
			   var blue =  list.splice(6,1);
			   cc       =  "<i>"+list.join(" ")+"</i>"+"<b>"+blue.join(" ")+"</b>";
			   break;
			 case 'dlt' :
			   var blue = list.splice(5,2);
			   cc       =  "<i>"+list.join(" ")+"</i>"+"<b>"+blue.join(" ")+"</b>";
			   break;
			 case 'qlc' : 
			   blue      =  list.splice(7,1);
			    cc       =  "<i>"+list.join(" ")+"</i>"+"<b>"+blue.join(" ")+"</b>";
				break;
			 case  'sd' :
			   var shiji =  list.splice(3,3);
			   cc        =  "<i>"+list.join(" ")+"</i>"+"<em style='font-style:normal; color:#CCC'>试机号："+shiji.join(' ')+"</em>";      
			   break ;     	   
		 }
		 return  cc ; 
	 },
	 newCode:function(data){
	    var strcode  =  '' ;
		var code     =  '' ;
		var cc       =  data.open_code.split(','); 
		switch (Lately.lt_type){
		    case 'ssc' :
			 case 'syxw':
			 case  'ks' :
			 case  'pk10': 
			 case  'qxc':
			 case  'pls' :
			 case  'plw' :
			  code =  '<i>'+cc.join(' ')+'</i>';
			  break;
			 case 'ssq' :
			  var blue  =  cc.splice(6,1);
			  code ='<i>'+cc.join(' ')+'</i>'+' <em style="font-style:normal;color:#56c9ff">'+blue.join(' ')+'</em>'; 
			  break;
			 case 'dlt' :
			  var blue  =  cc.splice(5,2);
			  code ='<i>'+cc.join(' ')+'</i>'+' <em style="font-style:normal;color:#56c9ff">'+blue.join(' ')+'</em>';
			  break;
			 case 'sd' :
			  var shijian = cc.splice(3,3);
              code ='<i>'+cc.join(' ')+'</i>'+' <em style="font-style:normal">'+shijian.join(' ')+'</em>';
			  break;   
		}
		strcode      =  '<span>第'+data.issue+'期  开奖号码：'+code+'</span>';
		return strcode;
	 }
}