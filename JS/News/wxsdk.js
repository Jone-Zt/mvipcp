!function(e,t){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return t(e)}):t(e,!0)}(this,function(e,t){function n(t,n,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,i(n),function(e){o(t,e,r)}):f(t,r)}function r(t,n,r){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){r&&r.trigger&&r.trigger(e),o(t,e,n)}):r?f(t,r):f(t,n)}function i(e){return e=e||{},e.appId=N.appId,e.verifyAppId=N.appId,e.verifySignType="sha1",e.verifyTimestamp=N.timestamp+"",e.verifyNonceStr=N.nonceStr,e.verifySignature=N.signature,e}function s(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,"package":e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function o(e,t,n){var r,i,s;switch(delete t.err_code,delete t.err_desc,delete t.err_detail,r=t.errMsg,r||(r=t.err_msg,delete t.err_msg,r=u(e,r,n),t.errMsg=r),n=n||{},n._complete&&(n._complete(t),delete n._complete),r=t.errMsg||"",N.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t)),i=r.indexOf(":"),s=r.substring(i+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function u(e,t){var n,r,i,s;if(t){switch(n=t.indexOf(":"),e){case d.config:r="config";break;case d.openProductSpecificView:r="openProductSpecificView";break;default:r=t.substring(0,n),r=r.replace(/_/g," "),r=r.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),r=r.substring(0,1).toLowerCase()+r.substring(1),r=r.replace(/ /g,""),-1!=r.indexOf("Wcpay")&&(r=r.replace("Wcpay","WCPay")),i=v[r],i&&(r=i)}s=t.substring(n+1),"confirm"==s&&(s="ok"),"failed"==s&&(s="fail"),-1!=s.indexOf("failed_")&&(s=s.substring(7)),-1!=s.indexOf("fail_")&&(s=s.substring(5)),s=s.replace(/_/g," "),s=s.toLowerCase(),("access denied"==s||"no permission to execute"==s)&&(s="permission denied"),"config"==r&&"function not exist"==s&&(s="ok"),t=r+":"+s}return t}function a(e){var t,n,r,i;if(e){for(t=0,n=e.length;n>t;++t)r=e[t],i=d[r],i&&(e[t]=i);return e}}function f(e,t){if(N.debug&&!t.isInnerInvoke){var n=v[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(){if(!("6.0.2">S||T.systemType<0)){var e=new Image;T.appId=N.appId,T.initTime=x.initEndTime-x.initStartTime,T.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(t){T.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+T.version+"&o="+T.isPreVerifyOk+"&s="+T.systemType+"&c="+T.clientVersion+"&a="+T.appId+"&n="+T.networkType+"&i="+T.initTime+"&p="+T.preVerifyTime+"&u="+T.url;e.src=n}})}}function c(){return(new Date).getTime()}function h(t){b&&(e.WeixinJSBridge?t():m.addEventListener&&m.addEventListener("WeixinJSBridgeReady",t,!1))}function p(){L.invoke||(L.invoke=function(t,n,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,i(n),r)},L.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}var d,v,m,g,y,b,w,E,S,x,T,N,C,k,L;if(!e.jWeixin)return d={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},v=function(){var e,t={};for(e in d)t[d[e]]=e;return t}(),m=e.document,g=m.title,y=navigator.userAgent.toLowerCase(),b=-1!=y.indexOf("micromessenger"),w=-1!=y.indexOf("android"),E=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),S=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),x={initStartTime:c(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},T={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:E?1:w?2:-1,clientVersion:S,url:encodeURIComponent(location.href)},N={},C={_completes:[]},k={state:0,res:{}},h(function(){x.initEndTime=c()}),L={config:function(e){N=e,f("config",e),h(function(){n(d.config,{verifyJsApiList:a(N.jsApiList)},function(){C._complete=function(e){x.preVerifyEndTime=c(),k.state=1,k.res=e},C.success=function(){T.isPreVerifyOk=0},C.fail=function(e){C._fail?C._fail(e):k.state=-1};var e=C._completes;return e.push(function(){N.debug||l()}),C.complete=function(t){for(var n=0,r=e.length;r>n;++n)e[n](t);C._completes=[]},C}()),x.preVerifyStartTime=c()}),N.beta&&p()},ready:function(e){0!=k.state?e():(C._completes.push(e),!b&&N.debug&&e())},error:function(e){"6.0.2">S||(-1==k.state?e(k.res):C._fail=e)},checkJsApi:function(e){var t=function(e){var t,n,r=e.checkResult;for(t in r)n=v[t],n&&(r[n]=r[t],delete r[t]);return e};n("checkJsApi",{jsApiList:a(e.jsApiList)},function(){return e._complete=function(e){if(w){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){r(d.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||g,desc:e.title||g,img_url:e.imgUrl,link:e.link||location.href},e)}},e)},onMenuShareAppMessage:function(e){r(d.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){r(d.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl,link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){r(d.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl,link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){r("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){r("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"]},function(){return e._complete=function(e){if(w){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},previewImage:function(e){n(d.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getNetworkType:function(e){var t=function(e){var t,n,r,i=e.errMsg;if(e.errMsg="getNetworkType:ok",t=e.subtype,delete e.subtype,t)e.networkType=t;else switch(n=i.indexOf(":"),r=i.substring(n+1)){case"wifi":case"edge":case"wwan":e.networkType=r;break;default:e.errMsg="getNetworkType:fail"}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(d.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{immediate_close:e.immediateClose||0},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){var t,n;E&&(t=e.resultStr,t&&(n=JSON.parse(t),e.resultStr=n&&n.scan_code&&n.scan_code.scan_result))},e}())},openProductSpecificView:function(e){n(d.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0},e)},addCard:function(e){var t,r,i,s,o=e.cardList,u=[];for(t=0,r=o.length;r>t;++t)i=o[t],s={card_id:i.cardId,card_ext:i.cardExt},u.push(s);n(d.addCard,{card_list:u},function(){return e._complete=function(e){var t,n,r,i=e.card_list;if(i){for(i=JSON.parse(i),t=0,n=i.length;n>t;++t)r=i[t],r.cardId=r.card_id,r.cardExt=r.card_ext,r.isSuccess=r.is_succ?!0:!1,delete r.card_id,delete r.card_ext,delete r.is_succ;e.cardList=i,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:N.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){var t,r,i,s,o=e.cardList,u=[];for(t=0,r=o.length;r>t;++t)i=o[t],s={card_id:i.cardId,code:i.code},u.push(s);n(d.openCard,{card_list:u},e)},chooseWXPay:function(e){n(d.chooseWXPay,s(e),e)}},t&&(e.wx=e.jWeixin=L),L});