(function(e){var t=e.$||{},n=e.kureicp;n.mobile.getpacketsUrl_dev="/hongbao/indexapi",n.mobile.tpl='<li pid="{ID}" {disabled}><em class="arr-3"><i></i></em><p><span><i class="packet"></i>{Name}\u7ea2\u5305</span>\u5269\u4f59<cite class="red">{LeftCount}</cite>\u4e2a</p><p>\u7279\u4ef7<b class="red">{SalePrice}</b>\u5143 \u7acb\u7701<b class="red">{savemoney}</b>\u5143</p></li>',n.mobile.init=function(){var r=t("#packet"),i=t("#load");t.getJSON(n.mobile.getpacketsUrl_dev+"?r="+t.now(),function(s){if(s){var o=s.image;t("#ads-txt").attr("href",o.link),t("#ads-img").attr("src",o.url),t("#info").html(s.info);var u=s.hblist,a,f,l,c,h,p,d=[];for(var v=0;v<u.length;v++){a=u[v];var m="",g,y,b=a.LeftCount*1;b<=0&&(m='class = "disabled"');var w=(parseInt(a.CardPrice*1e4)-parseInt(a.SalePrice*1e4))/1e4,E=a.LeftCount*1;d.push(n.mobile.tpl.replace(/{ID}/g,a.ID).replace(/{disabled}/g,m).replace(/{Name}/g,a.Name).replace(/{LeftCount}/g,E<0?0:E).replace(/{SalePrice}/g,a.SalePrice).replace(/{savemoney}/g,w))}i.remove(),r.html(d.join("")),e.scroll(0,0)}}),r.on(n.lottery.tap,"li",function(){var n=t(this),r=n.attr("pid");n.hasClass("disabled")||(e.location.href="#")})},t(function(){n.mobile.init()})})(window);