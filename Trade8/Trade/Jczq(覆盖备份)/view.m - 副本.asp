<!--#include file="../../conn.asp"-->
<!--#include file="../../JScript.asp"-->
<!--#include file="us.asp"-->
<script language="Jscript" runat="server">
	var all = {};
	all.leStr = "";
	all.sgStr = "";
	all.state = "������";
	function main(conn){

		var typeToStr = function(typenum){
			var o = {"91":"ƽ���Ż�","92":"�н��Ż�","93":"�����Ż�","0":"��Ͷ","1":"����","2":"��ѡһ"};
			return o[typenum];
		}
	    var w = function(s){
	        if(s==7) s = 0;
	        var arr = ["��һ","�ܶ�","����","����","����","����","����"];
	        return arr[s];
	    } 

	    var mod = function(obj){

			return '<div class="lot_title"><span class="lot_week">'+obj.orderid+'</span>'+obj.team.replace(/,/,' <span style="font-size:12px;">VS</span> ')+'</div>'+
					'<div class="lot_text">'+obj.plan+'</div>';
			// return '<tr>'
			// 	+'<td>'+obj.orderid+'</td>'
			// 	+'<td>'+obj.lid+'</td>'
			// 	+'<td>'+obj.team.replace(/,/," VS ")+'</td>'
			// 	+'<td>'+obj.plan+'</td>'
			// 	+'<td class="sg sg2"><table style="width:100%"><tr>'+obj.sg+'</tr></table></td>'
			// 	+'<td>'+obj.isdan+'</td>'
			// +'</tr>';
	    }
	    var sgmod = function(obj){
			return '<div class="lot_title"><span class="lot_week">'+obj.orderid+'</span>'+obj.team.replace(/,/,' <span style="font-size:12px;">VS</span> ')+'</div>'+
					'<div class="lot_text lot_over">'+obj.plan+'</div>';
			// return '<tr>'
			// 	+'<td>'+obj.orderid+'</td>'
			// 	+'<td>'+obj.lid+'</td>'
			// 	+'<td>'+obj.team.replace(/,/," VS ")+'</td>'
			// 	+'<td>'+obj.plan+'</td>'
			// 	+'<td class="sg sg2"><table style="width:100%"><tr>'+obj.sg+'</tr></table></td>'
			// 	+'<td>'+obj.isdan+'</td>'
			// +'</tr>';
	    }
		var vf = {};
		vf.spf = {
			"1":[0,"ʤ"],
			"0":[1,"ƽ"],
			"-1":[2,"��"]
		};
		vf.rqspf = {
			"1":[0,"ʤ(��)"],
			"0":[1,"ƽ(��)"],
			"-1":[2,"��(��)"]
		};
		vf.bqc = {
			"1:1":[0,"ʤʤ"],
			"1:0":[1,"ʤƽ"],
			"1:-1":[2,"ʤ��"],
			"0:1":[3,"ƽʤ"],
			"0:0":[4,"ƽƽ"],
			"0:-1":[5,"ƽ��"],
			"-1:1":[6,"��ʤ"],
			"-1:0":[7,"��ƽ"],
			"-1:-1":[8,"����"]
		};
		vf.bf = {
			"1:0":[0],
			"2:0":[1],
			"2:1":[2],
			"3:0":[3],
			"3:1":[4],
			"3:2":[5],
			"4:0":[6],
			"4:1":[7],
			"4:2":[8],
			"5:0":[9],
			"5:1":[10],
			"5:2":[11],
			"1":[12,"ʤ����"],
			"0:0":[13],
			"1:1":[14],
			"2:2":[15],
			"3:3":[16],
			"0":[17,"ƽ����"],
			"0:1":[18],
			"0:2":[19],
			"1:2":[20],
			"0:3":[21],
			"1:3":[22],
			"2:3":[23],
			"0:4":[24],
			"1:4":[25],
			"2:4":[26],
			"0:5":[27],
			"1:5":[28],
			"2:5":[29],
			"-1":[30,"������"]
		};//31
		vf.zjq = {
			"0":[0],
			"1":[1],
			"2":[2],
			"3":[3],
			"4":[4],
			"5":[5],
			"6":[6],
			"7+":[7]
		};

		var vfs = {};
		vfs.spf = {
			"1":[0,"ʤ"],
			"0":[1,"ƽ"],
			"-1":[2,"��"]
		};
		vfs.rqspf = {
			"1":[0,"ʤ"],
			"0":[1,"ƽ"],
			"-1":[2,"��"]
		};
		vfs.bqc = {
			"1:1":[0,"ʤʤ"],
			"1:0":[1,"ʤƽ"],
			"1:-1":[2,"ʤ��"],
			"0:1":[3,"ƽʤ"],
			"0:0":[4,"ƽƽ"],
			"0:-1":[5,"ƽ��"],
			"-1:1":[6,"��ʤ"],
			"-1:0":[7,"��ƽ"],
			"-1:-1":[8,"����"]
		};
		vfs.bf = {
			"1:0":[0],
			"2:0":[1],
			"2:1":[2],
			"3:0":[3],
			"3:1":[4],
			"3:2":[5],
			"4:0":[6],
			"4:1":[7],
			"4:2":[8],
			"5:0":[9],
			"5:1":[10],
			"5:2":[11],
			"1":[12,"ʤ����"],
			"0:0":[13],
			"1:1":[14],
			"2:2":[15],
			"3:3":[16],
			"0":[17,"ƽ����"],
			"0:1":[18],
			"0:2":[19],
			"1:2":[20],
			"0:3":[21],
			"1:3":[22],
			"2:3":[23],
			"0:4":[24],
			"1:4":[25],
			"2:4":[26],
			"0:5":[27],
			"1:5":[28],
			"2:5":[29],
			"-1":[30,"������"]
		};//31
		vfs.zjq = {
			"0":[0],
			"1":[1],
			"2":[2],
			"3":[3],
			"4":[4],
			"5":[5],
			"6":[6],
			"7+":[7]
		};
		var colorClass = function(n){
			var overList = {"����ʤ":0,"����ƽ":1,"����":2,"ʤ":0,"ƽ":1,"��":2};
			k = n in overList ? overList[n] : 4;
			return ["sheng","ping","fu",""][k];
		}
		var query = new Adodb(conn);
		var id = M.GET("Id");
		all.id=id;
		if(isNaN(id)) return;//id�Ƿ�
		var row = query.open("SELECT * FROM KR_Football_Buy WHERE Id="+id);
		if(!row.Eof){
			all.planUser = row("username").value.substr(0,2);
			try{
				var froms = G.b(row("BuyMemo").value);
			}catch(e){
				return;//Ͷע���ݲ���ȷ
			}
			all.play = row("Play").value.replace(/_/g,"x").replace(/,/g,"&nbsp;&nbsp;");
			var c = ['spf','rqspf','bqc','bf','zjq'];
			var leStr = "";
			var sgStr = "";
			all.type = typeToStr(row("type").value);
			all.winMoney = row("IsWin").value;
			all.addtime = row("DateTime").value;
			all.overtime = row("OverTime").value;
			all.orderid = froms["code"][0].lid.toString().substring(2,12)+"JCZQ"+id;
			all.buymoney = row("Num").value*row("Mul").value*2;
			all.state = row("State").value == "1" ? all.winMoney > 0 ? "���� <span style='color:#f22;'>"+all.winMoney+"</span> "+setting(56)+"" : "δ�н�" : "������";
			all.bd = row("bd").value;
			all.tc = row("tc").value;
			all.jd = 100-100*row("Total").value/all.buymoney;
			all.lostnum = row("Total").value;
			all.num = 1;
			if(row("hm").value==1) all.num = all.buymoney;
			for(var p in froms["code"]){
				var _this = froms["code"][p];
				var lid = _this.lid.toString();
				//var lis = get_v(lid);
				var tm = [lid.substring(0,4),lid.substring(4,6),lid.substring(6,8),lid.substring(8,9),lid.substring(9,12)];
				var rowTeam = query.open("SELECT a.Memo,b.[Plan] FROM  KR_Football_List a left join KR_Football_Code b ON b.OrderId=a.OrderId Where a.OrderId='"+lid+"'");
				//var rowTeam = query.open("SELECT Team FROM KR_Football_List WHERE OrderId="+lid);
				var team = "-,-",
					plans = "NO PLAN",
					leagueName = "���ر���";
				if(!rowTeam.Eof){
					var toJson = eval("("+rowTeam("Memo").value+")");
					team = toJson.hostName+","+toJson.guestName;
					leagueName = toJson.leagueName;
					plans = rowTeam("Plan").value;
				}
				rowTeam.close();
				var plan = {'spf':{},'rqspf':{},'zjq':{},'bf':{},'bqc':{}};
				var tp = ['spf','rqspf','zjq','bf','bqc'];
				var opencode = "<span>δ����</span>";
				if(plans!="NO PLAN" && plans!=null){
					var m = plans.split("|");
					opencode = "";
					for(var i=0;i<m.length;i++){
						//Response.write(lid+"-------"+i+"<br>");
						var kv = m[i].split("~")
						var ttp = tp[i];
						plan[ttp][kv[0]]=kv[1];
						var _vf = vfs[ttp][kv[0]];

						if(_vf.length == 1){
							if(kv[0].toString().indexOf(":")>0 && kv[0]!="7+"){
								_vf[1] = kv[0];
							}else{
								_vf[1] = kv[0];
							} 
						}
						//opencode += "<th>"+_vf[1]+"<br>"+plan[ttp][kv[0]]+"</th>";
						opencode += "<span class='"+colorClass(_vf[1])+"'>"+_vf[1]+"["+plan[ttp][kv[0]]+"]</span>";
					}
				}
				//leStr += "<div class='yh_l_list' data-id='"+lid+"'><span class='yh_l_sp1'>"+w(tm[3]-1)+tm[4]+"</span><span class='yh_l_sp2'>"+team[0]+"</span><span class='yh_l_sp3'>"+team[1]+"</span>";
				//leStr += "<span class='yh_l_sp4'>"
				var planStr = "";
				for(var p_c in c){
					var that = _this[c[p_c]];
					if(that!="" && that!="undefined"){
						for(var p in that){
							var _vf = vf[c[p_c]][that[p]];
							if(_vf.length == 1){
								if(that[p].toString().indexOf(":")>0 && that[p]!="7+"){
									_vf[1] = "�ȷ�("+that[p]+")";
								}else{
									_vf[1] = "�ܽ���("+that[p]+")"
								} 
							}
							//<span class="sheng">ʤ</span>
							if(that[p] in plan[c[p_c]]){
								planStr += "<span class='"+colorClass(_vf[1])+"'>"+_vf[1]+"["+plan[c[p_c]][that[p]]+"]</span>";
							}else{
								planStr += "<span class='"+colorClass(_vf[1])+"'>"+_vf[1]+"</span>";
							}
						}
					}
				}
				var isdan = M.indexOf(froms.dan,lid)>=0 ? "��" : "-";
				leStr += mod({
					orderid:w(tm[3]-1)+tm[4],
					lid:leagueName,
					team:team,
					plan:planStr,
					isdan:isdan
				});
				sgStr += sgmod({
					orderid:w(tm[3]-1)+tm[4],
					team:team,
					plan:opencode
				});
				//leStr += "</span></div>"
			}
			all.leStr = leStr;
			all.sgStr = sgStr;
			var bankMod = function(obj){
				return '<div class="lot_all_user_list"><span>'+obj.name+'***</span><span>'+obj.buymoney+'</span><span>'+obj.addtime.substr(5,11)+'</span></div>';
				// return '<tr class="my">'
				// 	+'<td>'+obj.name+'***</td>'
				// 	+'<td><span class="eng">��'+obj.allmoney+' �ʶ�</span></td>'
				// 	+'<td><span class="eng">��'+obj.buymoney+' �ʶ�</span></td>'
				// 	+'<td><span class="eng">��'+obj.sca+'%</span></td>'
				// 	+'<td><span class="eng">'+obj.addtime+'</span></td>'
				// 	+'<td><span class="eng">��'+obj.winmoney+' �ʶ�</span></td>'
				// +'</tr>';
			}
			var rowBank = query.open("SELECT * FROM KR_Bank_Back WHERE LotteryID='"+id+"' AND state IN(18,19,20)");
			all.havecount = rowBank.Recordcount;
			all.haveStr = "";
			all.myHaveStr = "";
			while(!rowBank.Eof){
				all.haveStr += bankMod({
					name:rowBank("UserName").value.substring(0,2),
					allmoney:rowBank("Anumber").value,
					buymoney:rowBank("Hnumber").value,
					sca:(100*rowBank("Hnumber").value/rowBank("Anumber").value).toFixed(2),
					addtime:M.format("yyyy-MM-dd hh:mm:ss",rowBank("addtime").value),
					winmoney:rowBank("win_cost_get").value
				});
				if(isLogin() && rowBank("UserName").value == Session("un")) all.myHaveStr += bankMod({
					name:rowBank("UserName").value.substring(0,2),
					allmoney:rowBank("Anumber").value,
					buymoney:rowBank("Hnumber").value,
					sca:(100*rowBank("Hnumber").value/rowBank("Anumber").value).toFixed(2),
					addtime:M.format("yyyy-MM-dd hh:mm:ss",rowBank("addtime").value),
					winmoney:rowBank("win_cost_get").value
				});
				rowBank.MoveNext();
			}
			if(!isLogin()) all.myHaveStr = '<tr class="my"><td colspan="5">����û��<a href="javascript:void(0)" onclick="alertdiv.login(default_login)" title="���¼">��¼</a>��</td></tr>';
			if(all.myHaveStr == "") all.myHaveStr = '<tr class="my"><td colspan="5">û������Ͷע��¼��</td></tr>'
		}else{
			return;//����������
		}
	}
</script>
<% Call main(conn) %>