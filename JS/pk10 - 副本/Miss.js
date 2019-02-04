(function(ds){
 var Pk10Miss = {
	Type:'Pk10',
	code:['','','','','','','','','',''],
	ds  :[],
	Init:function(){
	   $.post('/Trade/Pk10/Interface.asp',{action:'Miss'},function(data){
	      var ccs = {'01':'a','02':'b','03':'c','04':'d','05':'e','06':'f','07':'g','08':'h','09':'i','10':'j'}
		  for( var i=0 ; i < data['msg'].length; i++ ){
			var key = 0 ;
		    for( var index  in data['msg'][i]){
			   var ab = data['msg'][i][index] ;	
			   Pk10Miss['code'][key] += ccs[ab];
			   
			   key += 1 ;
			}
		  }
		  Pk10Miss.PutongMiss(Pk10Miss['code']);
	   },'json');
	},
	PutongMiss:function( data ){
	   var Line = ['table[biaozhi="tabele_1"]','table[biaozhi="tabele_2"]','table[biaozhi="tabele_3"]','table[biaozhi="tabele_4"]','table[biaozhi="tabele_5"]','table[biaozhi="tabele_6"]','table[biaozhi="tabele_7"]','table[biaozhi="tabele_8"]','table[biaozhi="tabele_9"]','table[biaozhi="tabele_10"]'];
	   var miss = [];
	   var abd  = ['a','b','c','d','e','f','g','h','i','j'];
	   for( var j = 0 ; j < data.length  ; j++ ){
		   var em  = $(Line[j]).find('ul.ballRed2').find('em');
		   for( var t = 0 ; t < abd.length ; t++ ){
		       var asd = data[j].indexOf(abd[t]);
			   $(em[t]).html(asd);
		   }
	   }
	}
 }
 Pk10Miss.Init();
})($)


(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth>750) clientWidth=750;
			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
 