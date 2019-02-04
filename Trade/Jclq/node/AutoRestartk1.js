var exec = require('child_process').fork;

var last = function(func){
	if(func) func();
	var nowCmd = exec('./testk1.js');
	console.log();
	console.log("启动采集器");

	nowCmd.on('exit', function (code) { 
		setTimeout(last,1000);
	});
	a = function(func){
		func();
	};
	setTimeout(a,10*60*1000,function(){
		nowCmd.kill();
		console.log("重启采集器");
	});
}
setTimeout(last,1000);
