var k_tch = $(".k_tch");

var _move = false;
var _left,_x,wa;
k_tch.bind("touchstart",function(e){
    //alert(213);
var k_tcbf_w = $(".k_tc").width();
wa = [0,k_tcbf_w-k_tch.width()];
    var _touch = e.originalEvent.targetTouches[0].pageX;
    _left = $(this).position().left
    _x = _touch;
    _move = true;
});

$(document).bind("touchmove",function(e){
    var _touch = e.originalEvent.targetTouches[0].pageX;
    console.log(_left);
    if(_move){
        var _movexp = _touch-_x;
        var k_left = _left+_movexp;
        if(k_left<wa[0]) k_left=wa[0];
        if(k_left>wa[1]) k_left=wa[1];
        k_tch.text(Math.ceil((k_left-wa[0])*10/wa[1]));
        k_tch.css("left",k_left+"px");
    }
}).bind("touchend",function(){
    //var e2_x = e.originalEvent.changedTouches[0].pageX
    _move = false;
});
var box_hm_h = $(".box-hm").innerHeight();
var buy_btn = $(".buy-bottom");
var chk_hm = $(".chk-hm");
var hm_my = $("#hm_my");
chk_hm.click(function() {
    var totalmoney = $(".totalmoney").text();
    if($(".totalmoney").text()<8){
        alert("合玩彩豆最低8彩豆！");
    }else{
        if(hm_my.val()=="0") hm_my.val(Math.ceil(totalmoney*0.1));
        if(hm_my.val()<totalmoney*0.05) hm_my.val(Math.ceil(totalmoney*0.05));
        var $this = $(this),
            box_hm = $(".box-hm"),
            jj = ["-","+"];
        if(box_hm.css("display")=="none"){
            box_hm.css("display","block");
            $this.addClass('chk-hm-hover');
        }else{
            jj = ["+","-"]
            box_hm.css("display","none");
            $this.removeClass('chk-hm-hover');
        }
        buy_btn.css({"top":jj[0]+"="+box_hm_h,"height":jj[1]+"="+box_hm_h});
    }
});
$(".box-hm").find("input").change(function(){
    var all = $(".totalmoney").text();
    var e = $(this);
    e.val(e.val().replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1'));
    var my = $('#hm_my');
    var bd = $('#hm_bd');

    var minNum = Math.ceil(all*0.05);

    if(Number(my.val())<minNum) my.val(minNum);

    if(Number(my.val())>all) my.val(all);

    if(e.attr("id")=="hm_bd" && bd.val()>all-my.val()) bd.val(all-my.val());
});