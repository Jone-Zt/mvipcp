!function(t,e,a,i,n){var o=t.isSupportTouch?"tap":"click",c=e.common,s=e.helper;t.extend(e,{config:{gameUrl:"/Trade/Jczq/data/bifen.htm",loadingSelector:".loading",noDataSelector:".no-data",failLoadingSelector:".load-failed",teamData:c.teamData,supportMethod:{m_1:["1_1","2_1","3_1","4_1","5_1","6_1","7_1","8_1"],m_n:["3_3","3_4","4_4","4_5","4_6","4_11","5_5","5_6","5_10","5_16","5_20","5_26","6_6","6_7","6_15","6_20","6_22","6_35","6_42","6_50","6_57","7_7","7_8","7_21","7_35","7_120","8_8","8_9","8_28","8_56","8_70","8_247"]},gameTypes:["bf"],playType:"bf"},cache:{matchList:null},quickInit:function(){var e=this.config,i=this.cache,n=/(\S+)Selector$/;for(var o in e)if("string"==a.getType(o)&&n.test(o))i[RegExp.$1]=t(e[o]);this.betAreaInit().betMethodInit().loadData();this.common.init();return this},myInit:function(){t(i).on("ortchange",function(t){i.document.location.reload()});return this},betAreaInit:function(){var e=this,a=this.cache.matchNum,i,n=this.cache.boxCenter;i=Class.Game.COMS.JC.BetArea.create({gameWrapSelector:"#wrapper",gameTypes:this.config.gameTypes,teamData:this.config.teamData});i.initMoreOption=function(){var e=i,a;this.cache.gameWrap.delegate(".more-option[data-matchcode]","click",function(e){var a=t(this),n=a.attr("data-matchcode"),c,s,r=i.cache.gameInfo,h=i.cache.selectGameInfo;if(n&&r[n]&&r[n].spData){s=h[n];t.dialog({title:null,css:"select-dialog bf-dialog",width:"93.125%",height:"25.5rem",content:t.template(t("#bfDialogTpl").html(),{teamData:i.config.teamData,gameInfo:r[n],selectInfo:s||{}}),button:[],init:function(){var e=t(this),a=this.id;e.delegate(".cancel","click",function(e){t.dialog(a)}).delegate(".confirm","click",function(o){t.dialog(a);i.del(n);e.find(".betbtn.active[data-gametype]").each(function(){var e=t(this),a=e.attr("data-gameType"),o=+e.attr("data-index");if(o>=0&&a&&n)i.selectOption(n,a,o)})}).delegate(".betbtn[data-gameType]",o,function(e){var a=t(this);a.toggleClass("active")})}})}});i.onChange(function(t){if(!t)return;var e=this.get().selectGameInfo[t],a,i=this.get().gameInfo[t],n,o,c=this.config.teamData.bf,s=i.ele.find(".more-option"),r=[],h=[],o="点击选择比分";if(s.hasClass("no-play"))return;if(e&&e.bf){o="";for(a=0;a<c.length;a++)for(n in e.bf)if("length"!=n&&n==a){if(a<6)r.push(c[a][1]);else h.push(c[a][1]);break}o=h.join(" ")+" "+r.join(" ");s.addClass("active")}else s.removeClass("active");s.html(o)});i.onClear(function(){if(!a||!a.length)a=i.cache.gameWrap.find(".more-option");a.not(".no-play").removeClass("active").html("点击选择比分")})};i.initMoreOption();this.betArea=i;return this},betMethodInit:function(){var t,e=this,a=this.cache;t=Class.Game.COMS.JC.BetMethod.create({supportMethod:this.config.supportMethod});this.betMethod=t;return this},renderHTML:function(){var e=this.cache,i=t("#matchTpl").html(),n=t("#matchWrapTpl").html(),o=t("#wrapper .content"),c=this;var s=function(){var s={},r=[],h,l,d,m,d=document.createDocumentFragment();l=e.matchList;l.forEach(function(t,e){if(!s[t.gameDate]){s[t.gameDate]=[];r.push(t.gameDate)}s[t.gameDate].push(t)});r.sort(function(t,e){return+t-+e});r.forEach(function(e,o){var c=[e.slice(0,4),e.slice(4,6),+e.slice(6,8)];m=t.format(n,{gameDate:e,disDate:c.join("-"),week:a.jczq.core.getWeek(new Date(c[0],c[1]-1,c[2])),dateNum:s[e].length,dayMatchList:t.template(i,s[e])});m=t(m);d.appendChild(m[0])});o.append(d);c.betArea.addMatch(l)};s();delete this.renderHTML;return this},loadData:function(){var i=this,n=this.config,o=this.cache,c=this.config.gameUrl,r=t(".match-table");this.get(c,{},function(n,c){o.loading.addClass("hide");if(n){o.failLoading.removeClass("hide");t.sendMsg("loadData",3);o.loadDataStatus=3}try{c=JSON.parse(c)||e.parseJSON(c);if(!c.matchList||t.isEmptyObject(c.matchList)){o.noData.removeClass("hide");o.loadDataStatus=1;t.sendMsg("loadData",1);return}a.gameEn=c.gameEn;o.matchList=s.explainData(c,i.config.gameTypes);if(!s.checkList4Bet(o.matchList)){o.noData.removeClass("hide");o.loadDataStatus=1;t.sendMsg("loadData",1);return}i.renderHTML();r.removeClass("hide");o.loadDataStatus=0;t.sendMsg("loadData",0)}catch(h){o.failLoading.removeClass("hide");t.sendMsg("loadData",2);o.loadDataStatus=2;console.log(h)}},"@jzcqMixp");return this}})}(window.jQuery||window.Zepto,Core,Game,window);