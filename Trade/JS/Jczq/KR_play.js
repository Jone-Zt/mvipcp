var M = {
	"window":function(b,c,a,d){
		if($.isFunction(a)) ac="";
		var d = $("<div class='KR_window "+ac+"'><div class='KR_window_body'><div class='KR_window_top'><span class='KR_window_close'>返回</span><div class='KR_window_title'>"+c+"</div></div></div></div>");
		d.find(".KR_window_body").append(b);
		d.find(".KR_window_body > .KR_window_top > .KR_window_close").click(function(){
			d.remove();
		});
		$("body").append(d);
		if($.isFunction(a)) a(d);
	}
}