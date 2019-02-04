<!--#include file="Conn.asp"-->

<!--#include file="us.asp"-->
<script language="jscript" runat="server">

    function main(conn){
            var data = {
                code:String(Request("code")),
                tp:M.POST("type"),
                play:String(Request("play")),
                mul:String(Request("mul")),
                msg:1
            }
            var ishm = M.POST("hm");
            for(var p in data){
                if(data[p] == ''){
                    data.msg = 0;
                    break;
                }
            }

            var a = G.b(data.code);
            var b = G.a(a,data.play);
            if(data.msg && a.state){
                var o = {
                    a:b,
                    //b:b*2*data.mul,
                    c:data.play,
                    d:data.mul,
                    e:data.code
                }
// 'id ID
// 'LotteryID 订单号 ++++
// 'RebateID 0是派奖 1是不派奖 +++++
// 'UserName 用户名 +++++
// 'LotteryName 订单游戏 +++++ 
// 'LotteryType 玩法 ++++
// 'Expect 期号 +++++
// 'Hnumber 投注了的份数 ------
// 'Anumber 跟单合玩总份数 ------
// 'Nexus 是否为发起人 ++++++
// 'Allmoney 合玩总彩豆 +++++ 
// 'Mainpaymoney 投注了的彩豆 ------
// 'Issuccess 状态 +++++
// 'back_money 消费的彩豆 ------
// 'back_money2 收入的彩豆 ++++++
// 'b_befor 操作前的彩豆 +++++++
// 'b_after 操作后的彩豆 ------
// 'win_cost 总奖金 +++++
// 'win_cost_get 分得奖金 +++++++
// 'tc_money 提成彩豆 +++++
// 'addtime 添加时间 +++++
// 'back_state 返回状态 ++++
// 'backtime 处理时间 +++
// 'isreturn 是否停止 ++++
// 'state 状态 ++++
// 'follows 备注说明 +++
// 'daili 是否代理 ++++
                //Total 总彩豆
                // "INSERT INTO KR_Football_Buy(UserName,BuyMemo,Play,Num,Mul,IsWin,State) VALUES('"+Session('un')+"','"+o.e+"','"+o.c+"',"+o.a+",'"+o.d+"',0,0)"
                var query = new Adodb(conn);
                var userRow = query.open("SELECT * FROM KR_User WHERE UserName='"+Session("un")+"'",2);
                var UserMoney = userRow("UerMoney").value;
                var Total = o.a*o.d*2;//总彩豆
                if(o.d.indexOf(",")>0){
                    var o_d = 0;
                    var ods = o.d.split(",");
                    for(var p in ods) o_d += Number(ods[p]);
                    Total = o_d*2;
                }

                var ratio = 1;
                var into = {
                    allNum:Total,//总份数
                    myNum:Total,//当前用户投注的份数
                    TC:0,
                    BD:0
                }
                if(ishm=="1"){
                    //Response.Write("---------"+ishm);
                    var hmo = {
                        all:M.POST("all"),
                        my:M.POST("my"),
                        tc:M.POST("tc"),
                        bd:M.POST("bd")
                    }
                    ratio = Number(hmo.my)/Total;  
                    into.myNum = hmo.my;
                    into.TC = hmo.tc;
                    into.BD = parseInt(hmo.bd);
                }else{
                    ishm = 0;
                }
                var lostMoney = Total*ratio;
                if(UserMoney<lostMoney+into.BD){
                    Response.Write("{err:2}");//彩豆不足
                    return;
                }
                var typeToStr = {
                    "0":"混投",
                    "1":"单关",
                    "2":"二选一",
                    "91":"平均优化",
                    "92":"中奖优化",
                    "93":"奖金优化"
                }

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

                var lidArr = [];
                for(var p3 in a.code){
                    lidArr.push("'"+a.code[p3].lid+"'");
                }
                //Response.write("SELECT OrderId,overtime,Memo FROM KR_Football_List WHERE OrderId IN("+lidArr.join(",")+") Order BY OrderId Asc");
                var overtimeorderid = conn.Execute("SELECT OrderId,overtime,Memo FROM KR_Football_List WHERE OrderId IN("+lidArr.join(",")+") Order BY OverTime Asc");
                var SP = {};
                var overtime = overtimeorderid("overtime").value;
                while(!overtimeorderid.eof){
                    var Memo = eval("("+overtimeorderid("Memo").value+")");
                    SP[overtimeorderid("OrderId")] = {
                        spf:Memo.spTabMix[0],
                        bf:Memo.spTabMix[1],
                        zjq:Memo.spTabMix[2],
                        bqc:Memo.spTabMix[3],
                        rqspf:Memo.spTabMix[4]
                    };
                    overtimeorderid.movenext;
                }

                var plan = {
                    spf:["1","0","-1"],
                    bf:["1:0","2:0","2:1","3:0","3:1","3:2","4:0","4:1","4:2","5:0","5:1","5:2","1","0:0","1:1","2:2","3:3","0","0:1","0:2","1:2","0:3","1:3","2:3","0:4","1:4","2:4","0:5","1:5","2:5","-1"],
                    zjq:["0","1","2","3","4","5","6","7+"],
                    bqc:["1:1","1:0","1:-1","0:1","0:0","0:-1","-1:1","-1:0","-1:-1"],
                    rqspf:["1","0","-1"]
                }

                var _sp_1 = [];
                for(var p in a.code){
                    var a_code_p = a.code[p];

                    var _sp_2 = [];

                    for(var p2 in a_code_p){
                        if(p2!="lid"){
                            var _sp_3 = [];
                            for(var p3 in a_code_p[p2]){
                                var _index = M.indexOf(plan[p2],a_code_p[p2][p3]);
                                _sp_3.push(SP[a_code_p.lid][p2][_index]);
                            }
                            _sp_2.push(_sp_3.join(","));
                        }else{
                            _sp_2.push(a_code_p[p2]);
                        }
                    }
                    _sp_1.push(_sp_2.join("~"));
                }
                var SPPlan = "|"+_sp_1.join("|");
                overtimeorderid = new Date(overtime);
                if(overtimeorderid<new Date()){
                    Response.Write("{err:3}");//已截止
                    return;
                }
                var buyInsert = {
                    from:"KR_Football_Buy",
                    name:["UserName","BuyMemo","Play","Num","Mul","Total","tc","bd","hm","IsWin","State","overtime","type","SP"],
                    value:[[Session('un'),o.e,o.c,o.a,o.d,Total-lostMoney,M.POST("tc"),into.BD,ishm,"0","0",overtimeorderid.Format("yyyy-MM-dd hh:mm:ss"),data.tp,SPPlan]]
                }
                if(ishm=="1") {
                    buyInsert.value[0][10] = "0";
                    //buyInsert.value[0][14] = "true";
                }

                //if(Total-lostMoney-into.BD<=0) buyInsert.value[0][10] = "1";
                userRow("UerMoney") = userRow("UerMoney").value - lostMoney - into.BD;
                userRow("Money") = userRow("Money").value - lostMoney;
                userRow("IceMoney") = userRow("IceMoney").value + into.BD;
                userRow.Update();
                userRow.close();
				
                conn.Execute(M.toInsert(buyInsert));
                var NewId = conn.execute("SELECT @@IDENTITY FROM KR_Football_Buy")(0).value;
                var bankInsert = {
                    from:"KR_Bank_Back",
                    name:["LotteryID","RebateID","UserName","LotteryName","LotteryType","Hnumber","Anumber","Nexus","Allmoney","Mainpaymoney","Issuccess","back_money","b_befor","b_after","back_state","state","follows"],
                    value:[
                        [NewId,"1",Session("un"),"竞彩足球","竞彩足球"+typeToStr[data.tp],into.myNum,Total,"1",Total,lostMoney,"进行中",lostMoney,UserMoney,UserMoney-lostMoney,"未处理","20","发起投注"]
                    ]
                }
                if(ishm=="1"){
                    bankInsert.value[0][16] = "发起合玩";
                    if(into.BD>0) bankInsert.value.push([NewId,"0",Session("un"),"竞彩足球","竞彩足球"+typeToStr[data.tp],into.myNum,Total,"1",Total,into.BD,"保底冻结",into.BD,UserMoney,UserMoney-lostMoney,"未处理","0","保底冻结"]);
                }
                conn.Execute(M.toInsert(bankInsert));
                var plan_code = data.code.split("|");
                var plan_sp = SPPlan.split("|");
                var arr = [];
                for(var p in a.code){
                    var split_str = a.code[p].lid+"~";
                    var buyMemo = String(plan_code[Number(p)+1].split(split_str)[1]);
                    var buySP = String(plan_sp[Number(p)+1].split(split_str)[1]);
                    var dan = a.dan.join(",");
                    arr.push([Number(NewId),Number(a.code[p].lid),buyMemo,0,dan,buySP,0]);
                }
                arr[arr.length-1][6] = 1;
                var inserts = {
                    from:"KR_Football_Plan",
                    name:["BuyId","OrderId","BuyMemo","State","pri","SP","Last"],
                    value:arr
                }
                conn.Execute(M.toInsert(inserts));
                //if(ishm=="1") follow(conn);
            }
            Response.Write('{err:0,msg:'+b+'}');
            if(ishm=="1"){
                return 1;
            }

    }

</script>
<%
    If isLogin() Then
        Call main(conn)
    Else
        Response.Write("{err:1}")
    End If
%>