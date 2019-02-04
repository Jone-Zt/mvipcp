<script language="jscript" runat="server">
    function GetNoMoney(conn,username,isUpdate){
    	var user = conn.Execute("SELECT NoMoney,DrawMemo FROM KR_User WHERE UserName='"+username+"'");
    	var noMoney = user("NoMoney").value,drawMemo = user("DrawMemo").value;


		var dMemo = {
			time:"2016-01-01",
			underway:{
				hm:[],
				zhui:[]
			}
		}
    	if(drawMemo!=null) dMemo = JSON.parse(drawMemo); //解析计算所需要的信息
    	//Response.Write(dMemo.time);
		var xiaofei = 0,cunKuan = [];
		   	
		var wDeal = {
			hm:[],
			zhui:[]
		};
		if(dMemo.underway.hm.length>0){

			var _isW = dMemo.underway.hm.join(",");
			
			if(!/^'{1}/.test(_isW))
				_isW = "'"+_isW;
			if(!/'{1}$/.test(_isW))
				_isW = _isW+"'";
			
			var rs = conn.Execute("SELECT Left(follows,4) As follows,lotteryID,Anumber,Hnumber,Expect,back_money,back_money2,addtime,b_after,b_befor,Issuccess FROM [KR_Bank_Back]  WHERE username='"+username+"' AND lotteryID IN("+_isW+") AND Left(follows,4) IN('发起投注','发起合玩','参与合玩') ORDER BY Id");
			if(!rs.Eof){
				while(!rs.Eof){
					var lotteryID = rs("lotteryID").value;
					if(rs("Issuccess").value=='进行中'){
						//Response.Write(lotteryID+":"+rs("Issuccess").value+"<br>"+rs("follows").value);
						if(M.indexOf(wDeal.hm,"'"+lotteryID+"'") == -1) wDeal.hm.push("'"+lotteryID+"'"); //记录进行中未处理的
						rs.Movenext;
						continue;
					}else if (rs("Issuccess").value.indexOf("撤单")==-1){
						//'消费支出 back_money
						xiaofei += rs("back_money");
					}
					rs.Movenext;
				}
			}
			rs.Close;
		}
		if(dMemo.underway.zhui.length>0){

			for(var p in dMemo.underway.zhui){
				var _this = dMemo.underway.zhui[p];
				if(_this.expect.length>0){

					var rs = conn.Execute("SELECT Left(follows,4) As follows,lotteryID,Anumber,Hnumber,Expect,back_money,back_money2,addtime,b_after,b_befor,Issuccess FROM [KR_Bank_Back]  WHERE username='"+username+"' AND lotteryID = "+_this.lotteryID+" AND Left(follows,4) IN('发起投注','发起合玩','参与合玩') ORDER BY Id");

					if(!rs.Eof){
						while(!rs.Eof){
							var lotteryID = rs("lotteryID").value;
							var expect = rs("Expect").value.split(",");
							if(expect.length>1){
								var coef = rs("Hnumber").value/rs("Anumber").value;
								var rshmEndMoney = conn.Execute("SELECT SUM(Money) FROM [KR_Zhuihao] WHERE lotteryID='"+lotteryID+"' AND Expect IN("+_this.expect.join(",")+") AND status = '生效成功'");
								var hmEndMoney=0;
								if (! rshmEndMoney.eof) hmEndMoney=rshmEndMoney(0).value;
								xiaofei += hmEndMoney*coef;
								var rsisOver = conn.Execute("SELECT IsOver FROM KR_Buy WHERE lotteryID='"+lotteryID+"'");
								var isOver = 1;
								if (! rsisOver.eof) isOver=rsisOver(0).value;
								if(isOver == '0'){
									//记录进行中未处理的
									var willDeal = conn.Execute("SELECT Expect FROM [KR_Zhuihao] WHERE lotteryID='"+lotteryID+"' AND status  = '等待生效'");
									var zExpect = [];
									if(!willDeal.Eof){
										while(!willDeal.Eof){
											zExpect.push("'"+willDeal("Expect").value+"'");
											willDeal.Movenext;

										}
									}
									if(zExpect.length>0) wDeal.zhui.push({"lotteryID":"'"+lotteryID+"'","expect":zExpect});
								}
							}
							rs.Movenext;
						}
					}
				}
			}
		}

		//Response.Write(xiaofei+"<br>");
		var rs = conn.Execute("SELECT Left(follows,4) As follows,lotteryID,Anumber,Hnumber,Expect,back_money,back_money2,addtime,b_after,b_befor,Issuccess FROM [KR_Bank_Back]  WHERE username='"+username+"' AND addtime>'"+dMemo.time+"' AND Left(follows,4) IN('发起投注','发起合玩','参与合玩') ORDER BY Id");
			//Response.Write("SELECT Left(follows,4) As follows,lotteryID,Anumber,Hnumber,Expect,back_money,back_money2,addtime,b_after,b_befor,Issuccess FROM [KR_Bank_Back]  WHERE username='"+username+"' AND addtime>'"+dMemo.time+"' AND Left(follows,4) IN('发起投注','发起合玩','参与合玩') ORDER BY Id");

		if(!rs.Eof){
			while(!rs.Eof){
				var lotteryID = rs("lotteryID").value;

				if(rs("Issuccess").value=='进行中'){
					if(M.indexOf(wDeal.hm,"'"+lotteryID+"'") == -1) wDeal.hm.push("'"+lotteryID+"'"); //记录进行中未处理的
					rs.Movenext;
					continue;
				}
				if(rs("Issuccess").value.indexOf("撤单")==-1){
					var expect = rs("Expect").value.split(",");
					if(expect.length>1){
						var coef = rs("Hnumber").value/rs("Anumber").value;
						var rshmEndMoney = conn.Execute("SELECT SUM(Money) FROM [KR_Zhuihao] WHERE lotteryID='"+lotteryID+"' AND status = '生效成功'");
						var hmEndMoney = 0;
						if(!rshmEndMoney.eof) hmEndMoney = rshmEndMoney(0).value;
	
						//Response.Write(hmEndMoney*coef+"<br>");
	//Response.Write('xf:'+(xiaofei+hmEndMoney*coef)+"<br>");
						xiaofei = xiaofei + hmEndMoney*coef;
						var rsisOver = conn.Execute("SELECT IsOver FROM KR_Buy WHERE lotteryID='"+lotteryID+"'");
						var isOver = 1;
						if(!rsisOver.eof) isOver=rsisOver(0).value;
						if(isOver == '0'){
							//记录进行中未处理的
							var willDeal = conn.Execute("SELECT Expect FROM [KR_Zhuihao] WHERE lotteryID='"+lotteryID+"' AND status  = '等待生效'");
							var zExpect = [];
							if(!willDeal.Eof){
								while(!willDeal.Eof){
									zExpect.push("'"+willDeal("Expect").value+"'");
									willDeal.Movenext;
								}
							}
							if(zExpect.length>0) wDeal.zhui.push({"lotteryID":"'"+lotteryID+"'","expect":zExpect});
						}
					}else{
						//'消费支出 back_money
						//Response.Write(rs("back_money")+"[HM]<br>");
						xiaofei += rs("back_money");
					}
				}
				rs.Movenext;
			}
		}

		//Response.Write(xiaofei+"<br>");
		rs.Close;

		var _noMoney = noMoney-xiaofei;
		if(_noMoney<0) _noMoney = 0;
		if(isUpdate){
			var toJson = {
				time:M.format("yyyy-MM-dd hh:mm:ss",""),
				underway:wDeal
			}

			var updateStr = JSON.stringify(toJson);
			updateStr = updateStr.replace(/'/g,"''");
			conn.Execute("UPDATE [KR_User] SET NoMoney="+_noMoney+",DrawMemo='"+updateStr+"' WHERE username = '"+username+"'");
		}

		return _noMoney;
    }
</script>
