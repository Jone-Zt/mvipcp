(function(e){var t=e.$,n=e.qh360cp;n.mobile.week=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],n.mobile.tpl="<div class='jc-tit' name='{key}' id='game_{key}'><div class='jc-arr jc-arr-on'><i></i></div><cite>{matchday}</cite><cite>{wd}</cite><em class='red'>{count}</em>\u573a\u6bd4\u8d5b\u53ef\u6295\u6ce8</div>",n.mobile.jz_rspUrl_dev="data/dxfapi.asp",n.mobile.jz_statsinfoUrl_dev="data/statsinfo.asp",n.mobile.matches=[],n.mobile.rv=[],n.mobile.times=[],n.mobile.scrollBet=null,n.mobile.limit=2,n.mobile.dgbet=function(e){var e=+e;/*return(e>>4&1)==0?0:1*/ return 1;},n.mobile.cal=function(){var e=n.mobile.selectGame,r=n.mobile.selectGameMap,i=e.length,s=t("#group"),o=0;for(var u=0;u<e.length;u++){var a=r[e[u]].dg*1;o+=a}i?o==0?(n.mobile.limit=1,i>0?s.text("\u5df2\u9009"+i+"\u573a\u6bd4\u8d5b"):s.text("\u8bf7\u9009\u62e9\u6bd4\u8d5b\u7ed3\u679c")):(n.mobile.limit=2,i>1?s.text("\u5df2\u9009"+i+"\u573a\u6bd4\u8d5b"):i==1?s.text("\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b"):s.text("\u8bf7\u9009\u62e9\u6bd4\u8d5b\u7ed3\u679c")):(n.mobile.limit=2,s.text("\u8bf7\u9009\u62e9\u6bd4\u8d5b\u7ed3\u679c"))},n.mobile.AsynDownData=function(){t.ajax({url:n.mobile.jz_rspUrl_dev+"?page=0&r="+t.now(),dataType:"json",timeout:2e4,success:function(e){if(e){n.mobile.Tplmatch(e);var r=e.leagues;if(r){var i=[];t.each(r,function(e,n){n["name"]=="NBA"&&t("#NBA").removeClass("none"),i.push('<li><span class="btn-pop btn-pop-on" matches="'+e+'">'+n.name+"</span></li>")}),t("#leagues").html(i.join(""))}n.mobile.scrollBet&&n.mobile.scrollBet.refresh()}},error:function(){setTimeout(function(){n.mobile.Analysis.call(null)},1e4)}})},n.mobile.Tplmatch=function(e){var r=t("#betgame"),i=t("#guide"),s=0,o=e.battle;if(!o){i.remove(),r.html("<p class='nodata'>\u6682\u65e0\u6bd4\u8d5b\uff0c\u7b49\u5f85\u5b98\u65b9\u516c\u5e03\u6700\u65b0\u8d5b\u7a0b\uff01</p>");return}var u=n.mobile.selectGame,a=n.mobile.selectGameMap;t.each(o,function(o,f){var l=[],c=f.length;if(c){s=1,n.mobile.times.push(o);var h=o.replace(/(\d{4})(\d{2})(\d{2})/g,"$1-$2-$3"),p=n.mobile.week[(new Date(h.replace(/-/g,"/"))).getDay()],d=t("#game_"+o),v=t("#table_"+o);if(!d.length){var m=l.length,g=n.mobile.tpl.replace(/{key}/g,o).replace(/{matchday}/,h).replace(/{wd}/,p).replace(/{count}/,e.count?e.count[o]:c);l.push(g)}var y=[],b=0;for(var w=0;w<c;w++){var E=f[w];E.matchcode=o+E.itemId,E.endTimeHHMM=E.endTime.split(" ")[1];var S=E.matchcode,x=["",""];if(E.sf2==-1||E.sf1==-1){b++,b==c&&l.pop();continue}var T=t.inArray(S,u);if(T>-1){var N=a[S].indexs,C=" active";if(N){for(var k=0,L=N.length;k<L;k++)N[k]=="1"?x[0]=C:N[k]=="2"&&(x[1]=C);L==0&&(delete a[S],u.splice(T,1))}}E.selected=x;var A=n.mobile.dgbet(+E.isDgDisable),O="",M="";A==0&&(O="<span class='triangle'></span><span class='dgtext'>\u5355</span>",A==0&&(M="class=can")),E.dgtr=O,E.dgdxf=M,E.dg=A,y.push(n.template("matchs_list_dxf",E)),E.matchId&&n.mobile.matches.push(E.matchId),n.mobile.rv.push(E.VsReverseFlag||0)}b>0&&b<c&&(l[m]=n.mobile.tpl.replace(/{key}/g,o).replace(/{matchday}/,h).replace(/{wd}/,p).replace(/{count}/,e.count?e.count[o]-b:c-b)),i.remove(),v.length?v.append(y.join("")):l.push('<table width="100%" id="table_'+o+'"><tbody>'+y.join("")+"</tbody></table>"),r.append(l.join(""))}}),s||(i.remove(),r.html("<p class='nodata'>\u6682\u65e0\u6bd4\u8d5b\uff0c\u7b49\u5f85\u5b98\u65b9\u516c\u5e03\u6700\u65b0\u8d5b\u7a0b\uff01</p>")),n.mobile.cal(),n.mobile.Analysis()},n.mobile.Analysis=function(){var e=n.mobile.matches,r=n.mobile.rv;if(!e.length)return!1;var i=e.join(","),s=r.join(",");t.ajax({url:n.mobile.jz_statsinfoUrl_dev,data:{matchids:i,rv:s,play:"zhh"},dataType:"json",type:"POST",timeout:2e4,success:function(e){e&&(t.each(e,function(e,r){var i=t("#stats_"+e),s=t("#match_"+e);r.matchid=e,r.rv=s.attr("rv")*1,r.homeTeam=s.attr("hometeam"),r.rq=+s.attr("rq"),r.color="",r.rq>0?(r.color="red",r.rq="+"+r.rq):r.color="green";var o=r.ratio;r.spf0="--",r.spf3="--",r.rsq0="--",r.rsq3="--",r.dxf0="--",r.dxf3="--";if(o){var u=o[0];if(u){r.spf0=+u.code0,r.spf3=+u.code3;var a=r.spf0+r.spf3;a&&(r.spf0=n.number.format(r.spf0/a*100,2,0)+"%",r.spf3=n.number.format(r.spf3/a*100,2,0)+"%")}var f=o[1];if(f){r.rsq0=+f.code0,r.rsq3=+f.code3;var l=r.rsq0+r.rsq3;l&&(r.rsq0=n.number.format(r.rsq0/l*100,2,0)+"%",r.rsq3=n.number.format(r.rsq3/l*100,2,0)+"%")}var c=o[2];if(f){r.dxf0=+c.code0,r.dxf3=+c.code3;var h=r.dxf0+r.dxf3;h&&(r.dxf0=n.number.format(r.dxf0/h*100,2,0)+"%",r.dxf3=n.number.format(r.dxf3/h*100,2,0)+"%")}}if(r.his.home){var p=r.his.home,d=r.his.away;p.hhwRatio>=.5&&s.attr("wr0","1"),d.aawRatio>=.5&&s.attr("wr1","1"),p.hhhbwRatio>=.5&&s.attr("whr0","1"),d.aahbwRatio>=.5&&s.attr("whr1","1"),p.hhoRatio>=.5&&s.attr("whr2","1"),d.aaoRatio>=.5&&s.attr("whr3","1")}i.html(n.template("analysis_tpl",r)),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()}),t("#whr").removeClass("none"))},error:function(){n.mobile.Analysis.call(null)}})},n.mobile.selectCodeInit=function(){var r=t("#betgame"),i=t("#themore"),s=t("#betgame"),o=t("#betScroll"),u=t(".ui-panel-dismiss"),a="none",f=t("#MS-wrapper");f.height("2500px"),e.scrollTo(0,0),setTimeout(function(){var t=e.innerHeight-156;o.height(t),s.css("min-height",t),f.css("height",e.innerHeight+"px"),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()},0),r.on(n.lottery.tap,".jc-tit",function(){var e=t(this),n=e.attr("name"),r=t("#table_"+n),i="jc-arr-on",s=e.find("div");s.hasClass(i)?(s.removeClass(i),r.hide()):(s.addClass(i),r.show())}),r.on(n.lottery.tap,".stats",function(){var r=t(this),i=r.attr("m");if(i=="0")return n.lottery.alert("\u8d5b\u4e8b\u4fe1\u606f\u540c\u6b65\u4e2d\uff0c\u8bf7\u7a0d\u540e\uff01"),!1;var s=t("#stats_"+i),o=r.find("i");s.hasClass(a)?(s.removeClass(a),o.addClass("down"),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),s.position().top+111>t(e).height()-50&&n.mobile.scrollBet.scrollTo(0,111,0,"relative")):(s.addClass(a),o.removeClass("down"))}),r.on(n.lottery.tap,".bet-dxf",function(){var e=t(this),r=e.parents("tr"),i=r.attr("matchcode"),s=[],o=t.inArray(i,n.mobile.selectGame),u=[],a=[],f=e.parent().hasClass("can")?0:1,l,c="active";if(!i)return!1;e.toggleClass(c),r.find(".bet-dxf").each(function(){var e=t(this),n=e.find("cite").text().replace("--",0),r=e.attr("index");e.hasClass(c)&&(s.push(n),u.push(r)),a.push(n)});if(s.length===0)delete n.mobile.selectGameMap[i],n.mobile.selectGame.splice(o,1);else if(o<0){if(n.mobile.selectGame.length>=15)return e.removeClass(c),n.lottery.alert("\u6700\u591a\u53ea\u80fd\u6dfb\u52a015\u573a\u6bd4\u8d5b"),!1;n.mobile.selectGameMap[i]={dan:!1},n.mobile.selectGameMap[i].indexs=u,n.mobile.selectGameMap[i].sp=s,n.mobile.selectGameMap[i].spall=a,n.mobile.selectGameMap[i].dg=f,n.mobile.selectGameMap[i].endtime=r.attr("endtime"),n.mobile.selectGameMap[i].mid=r.attr("mid"),n.mobile.selectGameMap[i].homeTeam=r.attr("homeTeam"),n.mobile.selectGameMap[i].awayTeam=r.attr("awayTeam"),n.mobile.selectGame.push(i)}else n.mobile.selectGameMap[i].indexs=u,n.mobile.selectGameMap[i].sp=s,n.mobile.selectGameMap[i].dg=f;n.mobile.cal()}),t("#tab").on(n.lottery.tap,"li",function(){var e=t(this),r="on",o=e.attr("id")||"all";e.siblings().removeClass(r),e.addClass(r);var f=s.find(".matchinfo");o!="more"&&i.addClass(a),n.mobile.clearBet();switch(o){case"all":t.each(f,function(e,n){t(n).removeClass(a)}),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),n.mobile.count();break;case"hot":t.each(f,function(e,n){var r=t(n),i=t(n).attr("ishot");i?r.removeClass(a):r.addClass(a)}),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),n.mobile.count();break;case"filter":i.hasClass(a)?(i.removeClass(a),u.show()):(i.addClass(a),u.hide())}}),t("#navtit").on(n.lottery.tap,function(){var e=t(".head-arr"),r=t("#playing"),i="head-arron",s=t(".btn-menu"),o="btn-menu-on";s.hasClass(o)&&s.trigger(n.lottery.tap),e.hasClass(i)?(e.removeClass(i),r.addClass(a)):(e.addClass(i),r.removeClass(a))}),t(".btn-menu").on(n.lottery.tap,function(){var e=t("#tools"),r=t(this),i="btn-menu-on",s=t("#playing"),o=t("#navtit");s.hasClass(a)||o.trigger(n.lottery.tap),r.hasClass(i)?(e.addClass(a),r.removeClass(i)):(e.removeClass(a),r.addClass(i))}),t("#cancel").on("click",function(){i.addClass(a);var e="on";t("#more").removeClass(e),t("#all").addClass(e).trigger(n.lottery.tap),u.hide()}),t("#confirm").on("click",function(){var e=s.find(".matchinfo"),r="btn-pop-on",o=t("#leagues").find("."+r),f=t("#whr").find("."+r),l=t.map(o,function(e){return t.trim(t(e).attr("matches"))});t.each(e,function(e,n){var r=t(n),i=r.attr("league");t.inArray(i,l)>-1?(r.removeClass(a),f.length&&t.map(f,function(e){var n=t(e).attr("data-target");r.attr(n)!=1&&r.addClass(a)})):r.addClass(a)}),u.hide(),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),n.mobile.count(),i.addClass(a)}),t("#leagues").on("click","span",function(){var e=t(this),n="btn-pop-on";e.toggleClass(n)}),t("#whr").on("click","span",function(){var e=t(this),n="btn-pop-on";e.hasClass(n)?e.removeClass(n):(t("#whr").find(".btn-pop").removeClass(n),e.addClass(n))}),t("#selall").on("click",function(){t("#leagues span").addClass("btn-pop-on")}),t("#inverse").on("click",function(){t("#leagues span").trigger("click")}),t("#sps").on("click","span",function(){var e=t(this),n="btn-pop-on";t("#sps").find("span").removeClass(n),e.addClass(n)}),t("#clear").on(n.lottery.tap,function(){n.mobile.clearBet()}),t(document.body).on(n.lottery.tap,function(e){setTimeout(function(){var r=n.lottery.getActionTarget(e,-1,"cmd",null),i="none",s=t("#playing"),o=t("#tools"),u=t(".btn-menu"),a=t(".head-arr");r||(u.removeClass("btn-menu-on"),a.removeClass("head-arron"),s.addClass(i),o.addClass(i))},80)}),setTimeout(function(){n.mobile.scrollBet=new iScroll("betScroll",{hScrollbar:!1,vScrollbar:!1}),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()},400)},n.mobile.count=function(){var e=n.mobile.times,r,i;for(var s=0;s<e.length;s++)r=t("#table_"+e[s]),i=t("#game_"+e[s]).find("em"),i.text(r.find(".matchinfo").not(".none").length||0)},n.mobile.clearBet=function(){var e="active",r=t("#betgame"),i="none";r.find("."+e).removeClass(e),r.find(".matches").addClass(i),r.find(".down").removeClass("down"),n.mobile.selectGame=[],n.mobile.selectGameMap={},n.mobile.cal()},n.mobile.confirmCodeInit=function(){var r=t("#submit"),i="btntap";r.on({click:function(){if(n.mobile.selectGame.length<n.mobile.limit)return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e9"+n.mobile.limit+"\u573a\u6bd4\u8d5b"),!1;n.localstorage.setItem(n.mobile.storageGameMap,JSON.stringify(n.mobile.selectGameMap)),n.localstorage.setItem(n.mobile.storageGame,JSON.stringify(n.mobile.selectGame)),e.location.href="dxfcart.htm"},touchstart:function(){t(this).addClass(i)},touchend:function(){t(this).removeClass(i)}})},n.mobile.dealStorage=function(){var e=n.date.format(new Date,"YYYY/MM/DD hh:mm"),r=(new Date(e)).getTime(),i=n.mobile.storageGame,s=n.mobile.storageGameMap;n.mobile.selectGame=n.localstorage.getItem(i)?JSON.parse(n.localstorage.getItem(i)):[],n.mobile.selectGameMap=n.localstorage.getItem(s)?JSON.parse(n.localstorage.getItem(s)):{},t.each(n.mobile.selectGameMap,function(e){var t=e.match(/^(\d{4})/g)[0]+"-"+n.mobile.selectGameMap[e].endtime,i=(new Date(t.replace(/-/g,"/"))).getTime();i-r<0&&(delete n.mobile.selectGameMap[e],n.array.remove(n.mobile.selectGame,e))})},t(function(){n.mobile.storageGameMap="storage_130043_dxf_map",n.mobile.storageGame="storage_130043_dxf_game",n.mobile.dealStorage(),n.mobile.AsynDownData(),n.mobile.selectCodeInit(),n.mobile.confirmCodeInit()})})(window);