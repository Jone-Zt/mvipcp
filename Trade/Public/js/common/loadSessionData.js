var Balance={
	ltId:0,
	Wid:0,
	Pid:0,
	Name:"",
	Type:'ssc',
	ini:function(){
	   var ds=this; 	
	   $("#topnav").find("title").html("购彩篮");
	   ds.TouCode();
	   var conf="config_"+Balance.ltId;
	   var config=window.localStorage.getItem(conf);
	   config=JSON.parse(config);
	   var lojs={
		   "ssc"        :    "../Public/js/ssc/Ssc.js",
		   "syxw"       :    "../Public/js/syxw/syxw.js",
		   "ks"         :    "",
		   "ssq"        :    "../Public/js/ssq/ssq.js",
		   "dlt"        :    "../Public/js/dlt/Dlt.js",
		   "sd"         :    "../Public/js/sd/fcsd.js",
		   "pls"        :    "../Public/js/sd/fcsd.js",
		   "plw"        :    "../Public/js/plw/Plw.js",
		   "qlc"        :    "../Public/js/qlc/qlc.js",
		   "qxc"        :    "../Public/js/qxc/qxc.js",
		   'pk10'       :    '../Public/js/pk10/pks.js'   
	   };
	   ds.Type=config.cp.class;
	   ds.LoadJs(lojs[config.cp.class]);
	   Url.start  =  config.lt_id;
	   ds=null;
	   
	},
	TouCode:function(){
	   var ds=this;
	   var list=window.localStorage.getItem("code");
	   list=JSON.parse(list);
	   var str="";
	   if(list==null || list.length == 0){
	      str="<li class='mui-table-view-cell mui-text-center'>暂无投注内容</li>";
		  $(".mui-table-view").html(str);
		  return;
	   }
	   var money=0;
	   ds.ltId=list[0].ltId;
	   ds.Pid =list[0].play;
	   ds.Wid =list[0].way;
	   ds.Name=list[0].name; 
	   for(i=0;i<list.length;i++){
	     str+='<li class="mui-table-view-cell" code="'+list[i].code+'" way="'+list[i].way+'" play="'+list[i].play+'" ltId="'+list[i].ltId+'" money="'+list[i].qian+'" zhu="'+list[i].zhu+'">';
		 str+='<div class="mui-slider-left mui-disabled"><a class="mui-btn mui-btn-red">删除</a></div>';
		 str+='<div class="mui-slider-right mui-disabled"><a class="mui-btn mui-btn-red">删除</a></div>';
		 str+='<div class="mui-slider-handle">['+list[i].name+']'+list[i].code+'<span class="mui-pull-right">'+'['+list[i].zhu+'注，'+list[i].qian+'元]</span></div></li>'; 
		 money+=list[i].qian;
	   }
	   $("#OA_task_2").html(str);
	   $("#ZJQ").html(money);
	   ds.showMonye();
	},
	LoadJs:function(filename){
	    var script=document.createElement("script");
	    script.setAttribute("src",filename);
	    script.setAttribute("type", "text/javascript");
		if(script!='undefined'){
		   document.getElementsByTagName("head").item(0).appendChild(script);
        }
	},
	showMonye:function(){
	   var bei=parseInt($("#touBei").html());
	   var zhq=parseInt($("#zhuiQi").html());
	   var money=0;
	   var zhu=0;
	   var list=$("#OA_task_2").find("li");
	   $.each(list,function(index,obj){
	      money+=parseInt($(obj).attr("money"));
		  zhu+=parseInt($(obj).attr("zhu"));
	   })
	   money=money*zhq*bei;

	   var a_RGQ = isNaN(Number($("#RGQ").text())) ? 0 : parseInt($("#RGQ").text());
	   var bdNum = isNaN(Number($("#BDQ").text())) ? 0 : parseInt($("#BDQ").text());
	   var allM = $("#HM").css('display') == 'inline' ? (a_RGQ+bdNum) : money;
	   // alert($("#HM").css('display'))
	   $("#totalZhu").html(zhu);
	   $("#totalMoney").html(money);
	   $("#ZJQ").html(allM); 
	},
	hmSet:function(){
       var money=$("#totalMoney").text();
       var halfMoney = Math.ceil(money/2);
	   $("#BuyCount").html(halfMoney);
	   $("#BuyZB").html("50%");
	   $("#RGQ").html($("#BuyCount").html());
	   //2017-05-05  自动保底分数
	   $("#BaoCount").html(money-halfMoney);
	   //2017-05-05
	   $("#BDQ").html($("#BaoCount").html()|0); 
	   if(tou.hm==1){
	      $("#ZJQ").html(Number($("#BuyCount").text())+ Number($("#BaoCount").text()));
	   }
	},
	resetHM:function(){
       var buy = $("#BuyCount").text();
	   var bd  = $("#BaoCount").text();
	   
	},
	Success:function(){
	   window.localStorage.setItem("code","[]");
	   $("#touBei").html("1");
	   $("#zhuiQi").html("1");
	   $("#ZJQ").html("0");
	   $("#BuyCount").html("");
	   $("#BaoCount").html("");
	   $("#inline-range").val(0);
	   $("#xc-bt").val("");
	   $("#xc-nr").val("");
	   $("#OA_task_2").html("");
	}
	 
}
