<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="json.asp"-->
<!--#include file="JSCONN.asp"-->
<%
 var id   = Db.G("id");
 var main = Db.getData("select * from kr_basketball_buy where id = "+id);
 var data = {};
 data["id"]       = main[0]["id"];
 data['UserName'] = main[0]['UserName'].substring(0,2)+'***';
 data['zg']       = main[0]['Num'] * main[0]['Mul'] * 2     ;
 data['total']       = main[0]['Num'] * main[0]['Mul'] * 2     ;
 data['danbei']   = main[0]['Num'] * 2                      ;
 data['bd']   = main[0]['bd']                           ;
 data['tc']       = main[0]["Tc"]  
 data['dealtime'] = main[0]["dealtime"];                         ;
 data["copysheet"]=main[0]["copysheet"];
 var   deadtime   = main[0]["deadtime"].replace(/\-|\s|\:/g,'');
 var   now        = Db.FormatDate("YmdHis");
 if ( deadtime > now ){
    data['state'] = '������';
 }else if (now > deadtime && main[0]['state'] == 0 ){
    data['state']  = "�ѽ�ֹ" ;
 }else if( main[0]['state'] > 0 && main[0]['Iswin'] < 1 ){
     data['state']  = "δ�н�" ;
 }else if( main[0]['state'] > 0 && main[0]['Iswin'] > 0 ){
     data['state']  = "���н�";
 }
 data['isWin'] =  main[0]['Iswin'];
 var detail  = Db.getData("select * from kr_basketball_detail where mianId="+id);
 var dtl   = [] ;
 var team  =JSON.parse(main[0]["homeTeam"]);
 var orderid = [];
 for( var index in detail ){
    var obj = {} 
	obj['title'] = [team[index]["homeTeam"],team[index]["awayTeam"]];
	obj['qihao'] = detail[index]['orderid'];
	obj['bet']   = detail[index]['betcontent'];
	obj['betsp']    = detail[index]['betsp'] ;
	obj['winsp'] = detail[index]['winsp']   ;
	obj['open']  ="" ;
	obj['opentime'] = "";
	orderid.push("'"+detail[index]['orderid']+"'");
	dtl.push(obj);
 }
 var open  = Db.getData("select * from KR_BasketBall_Code where orderid in("+orderid.join(',')+")");
 if(open.length > 1 ){
	 for( var index in dtl ){
		 if (!open[index]) continue;
		dtl[index]['open']      =  open[index]['plan'];
		dtl[index]['opentime']  =  open[index]['DateTime']; 
	 }
 }
 data["code"] = dtl;
 data["deadtime"] = main[0]["deadtime"];
 //��ȡ��������Ϣ
/*
 var canyun  = {} ;
 var can = Db.getData("select username,hnumber,follows,addtime from KR_Bank_Back where lotteryid = '"+id+"'");
 var Need = "����Ͷע,�������,���׶���";
 var count = 0 ; 
 var mai = 0;
 var bd    = 0;
 for( var index in can ){
    if( Need.indexOf( can[index]["follows"] >=0 )){
	    var obj  = {};
		obj["UserName"] = can[index]["username"];
		obj["Hnumber"]  = can[index]["hnumber"] ;
		obj["addtime"]  = can[index]["addtime"] ;
		if( obj["UserName"] == data["UserName"] && can[index]['state'] == 20 ){
		  canyun[obj["UserName"]]["Hnumber"] += can[index]["hnumber"] ; 
		}
		canyun[can[index]["username"]] = obj ;
		count += 1 ;
		mai   += can[index]["hnumber"] ;;
	
	}
 }
 data["canyu"]  = canyun ;
 data["count"]  = count - 1 ;
 data["jindu"]  = parseInt((mai-data["bd"]) / data['total'] * 100);
 data["sy"]     = main[0]["total"];
 */
 //��ȡ������Ϣ
 var gdr = Db.getData("select * from kr_gd where lt=2 and buyid="+id);
 var gd  =[];
 var totalm = 0 ;
 for( var index in gdr ){
    var obj = {};
	obj['u']  = gdr[index]["username"].substring(0,2)+'***';
	obj['bs'] = gdr[index]['mul'] ;
	obj['t']  = gdr[index]['addtime'];
	obj['m']  = gdr[index]['mul'] * data['danbei'] ;
	totalm += obj['m'];
	gd.push(obj);  
 } 
 data['gd'] = gd ;
 data['gdtotal'] = totalm;
 if( main[0]['show'] == 1 ){
    //��ֹ�󹫿�
    var dead = Date.parse( main[0]["deadtime"].replace(/\-/g,'/'));
    var now  = new Date();
	if ( Session("un") != main[0]['UserName'] && Session("htadmin") !="" ){
		if ( now.getTime() < dead ){
		   data['code'] = [];
		}
	}
 }else if(main[0]['show'] == 3 ){
    var jian = false ;
	for(var ii=0 ; ii < gd.length ; ii++ ){
	   if(gd[ii]['u'] == Session("un")){
	       jian = true ;
		   break;
	   }
	}
	if(Session("un") == main[0]["UserName"]) jian = true ;
	if(!jian) data['code'] = [];
 }
 data["gdje"]  = main[0]["gdbs"] * main[0]["Num"]* 2 ; 
 Db.Echo(Db.Encode(data));
%>