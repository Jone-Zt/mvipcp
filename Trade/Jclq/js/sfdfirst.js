(function(e){var t=e.$,n=e.qh360cp;n.mobile.week=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],n.mobile.tpl="<div class='jc-tit' name='{key}' id='game_{key}'><div class='jc-arr jc-arr-on'><i></i></div><cite>{matchday}</cite><cite>{wd}</cite><em class='red'>{count}</em>\u573a\u6bd4\u8d5b\u53ef\u6295\u6ce8</div>",n.mobile.jz_spfUrl_dev="data/sfdapi.asp",n.mobile.jz_statsinfoUrl_dev="data/statsinfo.asp",n.mobile.matches=[],n.mobile.rv=[],n.mobile.matchData={},n.mobile.times=[],n.mobile.scrollBet=null,n.mobile.selectTmp=function(){var e={11:"",12:"",13:"",14:"",15:"",16:"","01":"","02":"","03":"","04":"","05":"","06":""};return e},n.mobile.temp_sfd={11:"\u5ba2\u80dc1-5",12:"\u5ba2\u80dc6-10",13:"\u5ba2\u80dc11-15",14:"\u5ba2\u80dc16-20",15:"\u5ba2\u80dc21-25",16:"\u5ba2\u80dc26+","01":"\u4e3b\u80dc1-5","02":"\u4e3b\u80dc6-10","03":"\u4e3b\u80dc11-15","04":"\u4e3b\u80dc16-20","05":"\u4e3b\u80dc21-25","06":"\u4e3b\u80dc26+"},n.mobile.Tplmatch=function(e){var r=t("#betgame"),i=t("#guide"),s=0,o=e.battle;if(!o){i.remove(),r.html("<p class='nodata'>\u6682\u65e0\u6bd4\u8d5b\uff0c\u7b49\u5f85\u5b98\u65b9\u516c\u5e03\u6700\u65b0\u8d5b\u7a0b\uff01</p>");return}var u=n.mobile.selectGame,a=n.mobile.selectGameMap;t.each(o,function(o,u){var a=[],f=u.length;if(f){s=1,n.mobile.times.push(o);var l=o.replace(/(\d{4})(\d{2})(\d{2})/g,"$1-$2-$3"),c=n.mobile.week[(new Date(l.replace(/-/g,"/"))).getDay()],h=t("#game_"+o),p=t("#table_"+o);if(!h.length){var d=n.mobile.tpl.replace(/{key}/g,o).replace(/{matchday}/,l).replace(/{wd}/,c).replace(/{count}/,e.count?e.count[o]:f);a.push(d)}var v=[];for(var m=0;m<f;m++){var g=u[m];g.matchCode=o+g.itemId,g.endTimeHHMM=g.endTime.split(" ")[1],g.selected=n.mobile.selectTmp();var y=g.matchCode;if(t.inArray(y,n.mobile.selectGame)>-1){var b=n.mobile.selectGameMap[y].indexs;g.sfd=[],g.active="active";if(b){for(var w=0,E=b.length;w<E;w++)g.selected[b[w]]=" active",w<3?g.sfd.push(n.mobile.temp_sfd[b[w]]):w==3&&g.sfd.push("...");g.sfd=g.sfd.join(", ")}}else g.sfd="\u8bf7\u9009\u62e9\u6295\u6ce8\u5185\u5bb9",g.active="";n.mobile.matchData[g.matchCode]=g,n.mobile.scrollToEdit.setTop(g.matchCode,o),v.push(n.template("matchs_list_sfd",g)),g.matchId&&n.mobile.matches.push(g.matchId),n.mobile.rv.push(g.VsReverseFlag*1)}i.remove(),p.length?p.append(v.join("")):a.push('<table width="100%" id="table_'+o+'"><tbody>'+v.join("")+"</tbody></table>"),r.append(a.join("")),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()}}),s||(i.remove(),r.html("<p class='nodata'>\u6682\u65e0\u6bd4\u8d5b\uff0c\u7b49\u5f85\u5b98\u65b9\u516c\u5e03\u6700\u65b0\u8d5b\u7a0b\uff01</p>")),n.mobile.scrollBet=new iScroll("betScroll",{y:n.mobile.scrollToEdit.top,hScrollbar:!1,vScrollbar:!1}),n.mobile.Analysis()},n.mobile.Analysis=function(){var e=n.mobile.matches,r=n.mobile.rv;if(!e.length)return!1;var i=e.join(","),s=r.join(",");t.ajax({url:n.mobile.jz_statsinfoUrl_dev,data:{matchids:i,rv:s,play:"zhh"},dataType:"json",type:"POST",timeout:2e4,success:function(e){e&&(t.each(e,function(e,r){var i=t("#stats_"+e),s=t("#match_"+e);r.matchid=e,r.rv=s.attr("rv")*1,r.homeTeam=s.attr("hometeam"),r.rq=+s.attr("rq"),r.color="",r.rq>0?(r.color="red",r.rq="+"+r.rq):r.color="green";var o=r.ratio;r.spf0="--",r.spf3="--",r.rsq0="--",r.rsq3="--",r.dxf0="--",r.dxf3="--";if(o){var u=o[0];if(u){r.spf0=+u.code0,r.spf3=+u.code3;var a=r.spf0+r.spf3;a&&(r.spf0=n.number.format(r.spf0/a*100,2,0)+"%",r.spf3=n.number.format(r.spf3/a*100,2,0)+"%")}var f=o[1];if(f){r.rsq0=+f.code0,r.rsq3=+f.code3;var l=r.rsq0+r.rsq3;l&&(r.rsq0=n.number.format(r.rsq0/l*100,2,0)+"%",r.rsq3=n.number.format(r.rsq3/l*100,2,0)+"%")}var c=o[2];if(f){r.dxf0=+c.code0,r.dxf3=+c.code3;var h=r.dxf0+r.dxf3;h&&(r.dxf0=n.number.format(r.dxf0/h*100,2,0)+"%",r.dxf3=n.number.format(r.dxf3/h*100,2,0)+"%")}}if(r.his.home){var p=r.his.home,d=r.his.away;p.hhwRatio>=.5&&s.attr("wr0","1"),d.aawRatio>=.5&&s.attr("wr1","1"),p.hhhbwRatio>=.5&&s.attr("whr0","1"),d.aahbwRatio>=.5&&s.attr("whr1","1"),p.hhoRatio>=.5&&s.attr("whr2","1"),d.aaoRatio>=.5&&s.attr("whr3","1")}i.html(n.template("analysis_tpl",r)),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()}),t("#whr").removeClass("none"))},error:function(){n.mobile.Analysis.call(null)}})},n.mobile.AsynDownData=function(){var e=t("#tealnum"),r=n.mobile.selectGame;t.ajax({url:n.mobile.jz_spfUrl_dev+"?page=0&r="+t.now(),dataType:"json",timeout:2e4,success:function(e){if(e){n.mobile.Tplmatch(e);var r=e.leagues;if(r){var i=[];t.each(r,function(e,n){n["name"]=="NBA"&&t("#NBA").removeClass("none"),i.push('<li><span class="btn-pop btn-pop-on" matches="'+e+'">'+n.name+"</span></li>")}),t("#leagues").html(i.join(""))}}},error:function(){setTimeout(function(){n.mobile.Analysis.call(null)},1e4)}}),e.text(r.length)},n.mobile.selectCodeInit=function(){var r=t("#betgame"),i=t("#themore"),s=t("#betgame"),o=t("#betScroll"),u=t(".ui-panel-dismiss"),a="none",f=t("#MS-wrapper");f.height("2500px"),e.scrollTo(0,0),setTimeout(function(){var t=e.innerHeight-156;o.height(t),s.css("min-height",t),f.css("height",e.innerHeight+"px"),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()},0),r.on(n.lottery.tap,".jc-tit",function(){var e=t(this),r=e.attr("name"),i=t("#table_"+r),s="jc-arr-on",o=e.find("div");o.hasClass(s)?(o.removeClass(s),i.hide()):(o.addClass(s),i.show()),n.mobile.scrollBet&&n.mobile.scrollBet.refresh()}),r.on(n.lottery.tap,".stats",function(){var r=t(this),i=r.attr("m");if(i=="0")return n.lottery.alert("\u8d5b\u4e8b\u4fe1\u606f\u540c\u6b65\u4e2d\uff0c\u8bf7\u7a0d\u540e\uff01"),!1;var s=t("#stats_"+i),o=r.find("i");s.hasClass(a)?(s.removeClass(a),o.addClass("down"),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),s.position().top+111>t(e).height()-50&&n.mobile.scrollBet.scrollTo(0,111,0,"relative")):(s.addClass(a),o.removeClass("down"))}),r.on(n.lottery.tap,"li",function(){n.mobile.hideNavTab();var e=t(this).parents("tr"),r=e.attr("matchcode"),i=t.inArray(r,n.mobile.selectGame);if(i<0&&n.mobile.selectGame.length>=15){n.lottery.alert("\u6700\u591a\u53ea\u80fd\u6dfb\u52a015\u573a\u6bd4\u8d5b");return}var s=n.mobile.matchData[r],o=n.template("bet_sel_sfd",s);n.lightBox.show({html:o,showFn:function(){var o=this,u=t("#pop_bet_sel"),a="active";u.on(n.lottery.tap,".sfd",function(){t(this).toggleClass(a)}),u.find("#confirm_sel").on("click",function(){var u=n.mobile.selectTmp(),a=t("#pop_bet_sel"),f=e.find(".beidan-list li"),l=[],c="active",h=r,p=[],d=[],v;a.find(".sfd.active").each(function(e){var r=t(this),i=r.find(".sp").text(),s=r.attr("index");e<3?l.push(n.mobile.temp_sfd[s]):e==3&&l.push("..."),p.push(i),d.push(s),u[s]=c}),s.selected=u,p.length===0?(i>=0&&(delete n.mobile.selectGameMap[h],n.mobile.selectGame.splice(i,1)),f.removeClass(c).find("b").html("\u9009\u62e9\u6295\u6ce8\u5185\u5bb9")):(i<0?(n.mobile.selectGameMap[h]={dan:!1},n.mobile.selectGameMap[h].indexs=d,n.mobile.selectGameMap[h].sp=p,n.mobile.selectGameMap[h].endtime=s.endTime,n.mobile.selectGameMap[h].homeTeam=s.homeTeam,n.mobile.selectGameMap[h].awayTeam=s.awayTeam,n.mobile.selectGame.push(h)):(n.mobile.selectGameMap[h].indexs=d,n.mobile.selectGameMap[h].sp=p),f.addClass(c).find("b").html(l.join(", "))),t("#tealnum").text(n.mobile.selectGame.length),o.close()}),u.find("#cancel_sel").on("click",function(){o.close()})}})}),t("#tab").on(n.lottery.tap,"li",function(){var e=t(this),r="on",o=e.attr("id")||"all";e.siblings().removeClass(r),e.addClass(r);var f=s.find(".matchinfo");o!="more"&&i.addClass(a),n.mobile.clearBet();switch(o){case"all":t.each(f,function(e,n){t(n).removeClass(a)}),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),n.mobile.count();break;case"hot":t.each(f,function(e,n){var r=t(n),i=t(n).attr("ishot");i?r.removeClass(a):r.addClass(a)}),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),n.mobile.count();break;case"filter":i.hasClass(a)?(i.removeClass(a),u.show()):(i.addClass(a),u.hide())}}),t("#navtit").on("click",function(){var e=t("#playing"),n=t(".head-arr");e.toggleClass("none"),n.toggleClass("head-arron")}),t(".btn-menu").on(n.lottery.tap,function(){var e=t("#tools"),r=t(this),i="btn-menu-on",s=t("#playing"),o=t("#navtit");s.hasClass(a)||o.trigger(n.lottery.tap),r.hasClass(i)?(e.addClass(a),r.removeClass(i)):(e.removeClass(a),r.addClass(i))}),t("#cancel").on("click",function(){i.addClass(a);var e="on";t("#more").removeClass(e),t("#all").addClass(e).trigger(n.lottery.tap),u.hide()}),t("#confirm").on("click",function(){var e=s.find(".matchinfo"),r="btn-pop-on",o=t("#leagues").find("."+r),f=t("#whr").find("."+r),l=t.map(o,function(e){return t.trim(t(e).attr("matches"))});t.each(e,function(e,n){var r=t(n),i=r.attr("league");t.inArray(i,l)>-1?(r.removeClass(a),f.length&&t.map(f,function(e){var n=t(e).attr("data-target");r.attr(n)!=1&&r.addClass(a)})):r.addClass(a)}),u.hide(),n.mobile.scrollBet&&n.mobile.scrollBet.refresh(),n.mobile.count(),i.addClass(a)}),t("#leagues").on("click","span",function(){var e=t(this),n="btn-pop-on";e.toggleClass(n)}),t("#whr").on("click","span",function(){var e=t(this),n="btn-pop-on";e.hasClass(n)?e.removeClass(n):(t("#whr").find(".btn-pop").removeClass(n),e.addClass(n))}),t("#selall").on("click",function(){t("#leagues span").addClass("btn-pop-on")}),t("#inverse").on("click",function(){t("#leagues span").trigger("click")}),t("#clear").on(n.lottery.tap,function(){n.mobile.clearBet()}),t(document.body).on(n.lottery.tap,function(e){setTimeout(function(){var r=n.lottery.getActionTarget(e,-1,"cmd",null),i="none",s=t("#playing"),o=t("#tools"),u=t(".btn-menu"),a=t(".head-arr");r||(u.removeClass("btn-menu-on"),a.removeClass("head-arron"),s.addClass(i),o.addClass(i))},80)})},n.mobile.count=function(){var e=n.mobile.times,r,i;for(var s=0;s<e.length;s++)r=t("#table_"+e[s]),i=t("#game_"+e[s]).find("em"),i.text(r.find(".matchinfo").not(".none").length||0)},n.mobile.clearBet=function(){var e="active",r=t("#betgame"),i="none";r.find("."+e).removeClass(e).find("b").html("\u8bf7\u9009\u62e9\u6295\u6ce8\u5185\u5bb9"),r.find(".matches").addClass(i),r.find(".down").removeClass("down"),n.mobile.selectGame=[],n.mobile.selectGameMap={};for(var s in n.mobile.matchData)n.mobile.matchData[s].selected=n.mobile.selectTmp();t("#tealnum").text(n.mobile.selectGame.length)},n.mobile.confirmCodeInit=function(){var r=t("#submit"),i="btntap";r.on("click",function(){if(n.mobile.selectGame.length<1)return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u573a\u6bd4\u8d5b"),!1;n.localstorage.setItem(n.mobile.storageGameMap,JSON.stringify(n.mobile.selectGameMap)),n.localstorage.setItem(n.mobile.storageGame,JSON.stringify(n.mobile.selectGame)),e.location.href="sfdcart.htm"})},n.mobile.dealStorage=function(){var e=n.date.format(new Date,"YYYY/MM/DD hh:mm"),r=(new Date(e)).getTime(),i=n.mobile.storageGame,s=n.mobile.storageGameMap;n.mobile.selectGame=n.localstorage.getItem(i)?JSON.parse(n.localstorage.getItem(i)):[],n.mobile.selectGameMap=n.localstorage.getItem(s)?JSON.parse(n.localstorage.getItem(s)):{},t.each(n.mobile.selectGameMap,function(e){var t=e.match(/^(\d{4})/g)[0]+"-"+n.mobile.selectGameMap[e].endtime,i=(new Date(t.replace(/-/g,"/"))).getTime();i-r<0&&(delete n.mobile.selectGameMap[e],n.array.remove(n.mobile.selectGame,e))})},n.mobile.hideNavTab=function(){var e=t("#playing"),n=t(".head-arr");e.addClass("none"),n.removeClass("head-arron")},n.mobile.scrollToEdit={dc:0,mc:0,dh:40,mh:83,temp:"",top:0,hash:e.location.hash,setTop:function(e,t){this.temp!=t&&(this.dc++,this.temp=t),this.hash.indexOf(e)>-1&&(this.top-=this.dc*this.dh+this.mc*this.mh),this.mc++}},t(function(){n.mobile.storageGameMap="storage_130043_sfd_map",n.mobile.storageGame="storage_130043_sfd_game",n.mobile.dealStorage(),n.mobile.AsynDownData(),n.mobile.selectCodeInit(),n.mobile.confirmCodeInit()})})(window);