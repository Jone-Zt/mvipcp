<!--#include file="../../JScript.asp"-->
<script language="jscript" runat="server">

var E = {
    a:[],
    b:function(k){
       for(var p in E.a[k]){
            E.c[k]=E.a[k][p];
            //Response.Write(k+"<br>");
            if(k<E.a.length-1){
                E.b(k+1);
            }else{
                if(E.f == 1){
                    var o = [];
                    for(var p in E.c){
                        var a = E.c[p];
                        o.push(a.lid+"|"+a.a+"*"+a.b);
                    }
                    E.e.push(o.join(","));
                }else{
                    E.e.push((function(){
                        var o = [];
                        for(var p in E.c){
                            var a = E.c[p];
                            o.push({
                                lid:a.lid,
                                a:a.a,
                                b:a.b
                            });
                        }
                        return o;
                    })());
                }
            }
        }
    },
    c:[],
    d:0,
    e:[],
    f:0
}
var G = {
    a:function(data,play,isMore){
        if(isMore=="" || typeof(isMore) == "undefined") isMore = false;
         var xx = {
            "data":data,
            "play":play,
            "rule":{
                "3_3":{"hold":1,"play":[2]},
                "3_4":{"hold":1,"play":[2,3]},
                "4_4":{"hold":1,"play":[3]},
                "4_5":{"hold":1,"play":[3,4]},
                "4_6":{"hold":2,"play":[2]},
                "4_11":{"hold":2,"play":[2,3,4]},
                "5_5":{"hold":1,"play":[4]},
                "5_6":{"hold":1,"play":[4,5]},
                "5_10":{"hold":3,"play":[2]},
                "5_16":{"hold":2,"play":[3,4,5]},
                "5_20":{"hold":3,"play":[2,3]},
                "5_26":{"hold":3,"play":[2,3,4,5]},
                "6_6":{"hold":1,"play":[5]},
                "6_7":{"hold":1,"play":[5,6]},
                "6_15":{"hold":4,"play":[2]},
                "6_20":{"hold":3,"play":[3]},
                "6_22":{"hold":2,"play":[4,5,6]},
                "6_35":{"hold":4,"play":[2,3]},
                "6_42":{"hold":3,"play":[3,4,5,6]},
                "6_50":{"hold":4,"play":[2,3,4]},
                "6_57":{"hold":4,"play":[2,3,4,5,6]},
                "7_7":{"hold":1,"play":[6]},
                "7_8":{"hold":1,"play":[6,7]},
                "7_21":{"hold":2,"play":[5]},
                "7_35":{"hold":3,"play":[4]},
                "7_120":{"hold":5,"play":[2,3,4,5,6,7]},
                "8_8":{"hold":1,"play":[7]},
                "8_9":{"hold":1,"play":[7,8]},
                "8_28":{"hold":2,"play":[6]},
                "8_56":{"hold":3,"play":[5]},
                "8_70":{"hold":4,"play":[4]},
                "8_247":{"hold":6,"play":[2,3,4,5,6,7,8]}
            },
            "times":function(){
                return this.data.code.length;
            },
            "_count":function(index){
                var d = this.data.code[index];
                return this.each(d);
            },
            "count":function(index){
                if(typeof index == "number"){
                    return this._count(index);
                }else{
                    var c = 0;
                    for(i=0;i<this.times();i++) c += this._count(i);
                    return c;
                }
            },
            "each":function(z){
                var c = 0;
                M.forEach(z,function(k,v){
                    if(k!="lid" && v.length>0){
                        c += v.length;
                    }
                });


                return c;

            },
            "__reckon":function(a){
                var o = {
                    a:0,
                    b:xx.times(),
                    c:function(n){},
                    e:function(a,b){
                        for(var i=b+1;i<=this.b-a;i++){
                            if(a>=0) this.f[this.g-a-1] = i;
                            if(a == 0){

                                var count = 1;
                                var isdan = 0;
                                E.a = [];
                                M.forEach(o.f,function(k,v){
                                    if(o.i.length>0){
                                        if(M.indexOf(o.i,v)>=0) isdan++;
                                    }
                                    if(isMore){
                                        var z = xx.data.code[v-1];
                                        var ta = [];
                                        M.forEach(z,function(k,v){
                                            if(k!="lid" && v.length>0){
                                                M.forEach(v,function(k2,v2){
                                                    ta.push({lid:z.lid,a:k,b:v2});
                                                })
                                            }
                                        });
                                        //Response.Write(z.lid+"<br>");
                                        E.a.push(ta);
                                    }else{
                                        count *= xx.count(v-1);
                                    }

                                });
                                if(isdan==o.i.length){
                                    this.h += count;
                                    if(isMore) E.b(0);
                                }
                                //Response.Write(this.f+"<br>");
                                this.a++;
                            }
                            if(a>=0) this.e(a-1,i);
                        }
                    },
                    f:[],
                    g:a,
                    h:0,
                    i:(function(){
                        var o = {
                            a:xx.data.code,
                            b:xx.data.dan,
                            c:[]
                        }
                        M.forEach(o.a,function(k,v){
                            if(M.indexOf(o.b,v["lid"])>=0) o.c.push(Number(k)+1);
                        });
                        return o.c;
                    })()
                }
                for(var i=0;i<a;i++) o.f.push(0);
                o.e(a-1,0);
                if(!isMore) return o.h;
            },
            "_reckon":function(play){
                var o = {
                    a:play.split("_"),
                    b:xx.times()
                }
                if(o.a[1] == 1){
                    return xx.__reckon(o.a[0]);
                }else{
                    var f = this.rule[play];
                    var c = 0;
                    M.forEach(f.play,function(k,v){
                        c += xx.__reckon(v);
                    });
                    return c;
                }
            },
            "reckon":function(){
                var o = {
                    a:this.play.split(","),
                    b:0
                }
                M.forEach(o.a,function(k,v){
                    o.b += xx._reckon(v);
                });
                if(isMore) return E.e;
                return o.b;
            }
        }
        E.c = [];
        E.e = [];
        return xx.reckon();
    },
    b:function(data){
        var o = {
            a:data.split("|"),
            b:function(){
                var ob = {
                    a:this.a[0],
                    b:function(){
                        o.c.dan = o.a[0].split("~");
                        o.c.code = [];
                        o.c.state = 1;
                        for(var p in o.a){
                            if(p>0){
                                var a = o.a[p];
                                var obj = {};
                                a = a.split('~');
                                if(a.length != 6){
                                    o.c.state = 0;
                                    return;
                                }else{
                                    for(var q in a){
                                        var st = String(a[q]);
                                        if(st!=""){
                                            obj[ob.c[q]] = st.split(',');
                                        }else{
                                            obj[ob.c[q]] = [];
                                        }
                                    }
                                    o.c.code.push(obj);
                                }
                            }
                        }
                    },
                    c:['lid','spf','rqspf','bqc','bf','zjq']
                }
                ob.b();
                return o.c;
            },
            c:{}
        }
        return o.b();
    }
}

//E.b(0);
</script>