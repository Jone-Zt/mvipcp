<!--#include file="../../Conn.asp"-->
<!--#include file="us.asp"-->
<script language="jscript" runat="server">

    function main(conn){
            var data = {
                lid:M.POST("id"),
                money:M.POST("money"),
                action:M.POST("action")
            }
            if(data.action=="buy"){
                if(isNaN(data.money) || isNaN(data.lid)){
                    Response.write("{err:3}"+data.money+"{}"+data.lid);//��������
                    return;
                }
                for(var p in data){
                    if(data[p] == ''){
                        data.msg = 0;
                        Response.write("{err:3}");//��������
                        return;
                    }
                }
                var query = new Adodb(conn);
                var row = query.open("SELECT * FROM KR_Football_Buy WHERE Id="+data.lid+" AND (State<80 OR State>89)",2);
                if(!row.Eof){
                    var overtime = row("overtime");
                    if(overtime>new Date()){
                        var userRow = query.open("SELECT * FROM KR_User WHERE UserName='"+Session("un")+"'",2);
                        var UserMoney = userRow("UerMoney").value;
                        var over = row("Total");
                        if(data.money>0 && data.money<=over && data.money<=UserMoney){
                            userRow("Money") = userRow("Money").value - data.money;
                            userRow("UerMoney") = userRow("UerMoney").value - data.money;
                            userRow.Update();
                            row("Total") = row("Total") - data.money;
                            row.Update();
                            var Total = row("Num").value*row("Mul").value*2;
                            var bankInsert = {
                                from:" KR_Bank_Back",
                                name:["LotteryID","RebateID","UserName","LotteryName","LotteryType","Hnumber","Anumber","Nexus","Allmoney","Mainpaymoney","Issuccess","back_money","b_befor","b_after","back_state","state","follows"],
                                value:[[data.lid,"0",Session("un"),"��������","JCZQ",data.money,Total,"1",Total,data.money,"������",data.money,UserMoney,UserMoney-data.money,"δ����","20","�������"]]
                            }
                            conn.Execute(M.toInsert(bankInsert));
                            Response.write("{err:0}");//Ͷע�ɹ�
                        }else{
                            Response.write("{err:5}");//Ͷע���������û���Ͷע������޶�
                        }
                        userRow.close();
                    }else{
                        Response.write("{err:6}");//�����ѽ�ֹͶע
                    }
                }else{
                    Response.write("{err:4}");//����������
                }
                row.close();
            }else{
                    Response.write("{err:2}");//�Ƿ�����
                    return;
            }
    }

</script>
<%
    If isLogin() Then
        call main(conn)
    Else
        Response.Write("{err:1}")
    End If
%>