/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[16],{381:function(ia,ca,f){f.r(ca);var ba=f(1),y=f(216);ia=f(371);var ha=f(83);f=f(338);var ea={},da=function(f){function x(w,h){var r=f.call(this,w,h)||this;r.url=w;r.range=h;r.status=y.a.NOT_STARTED;return r}Object(ba.c)(x,f);x.prototype.start=function(f){var h=this;"undefined"===typeof ea[this.range.start]&&(ea[this.range.start]={Fs:function(r){var e=atob(r),n,w=e.length;r=new Uint8Array(w);for(n=0;n<w;++n)r[n]=e.charCodeAt(n);
e=r.length;n="";for(var x=0;x<e;)w=r.subarray(x,x+1024),x+=1024,n+=String.fromCharCode.apply(null,w);h.Fs(n,f)},BP:function(){h.status=y.a.ERROR;f({code:h.status})}},window.external.Bja(this.url),this.status=y.a.STARTED);h.uA()};return x}(ia.ByteRangeRequest);ia=function(f){function x(w,h,r,e){w=f.call(this,w,r,e)||this;w.Zv=da;return w}Object(ba.c)(x,f);x.prototype.hu=function(f,h){return f+"?"+h.start+"&"+(h.stop?h.stop:"")};return x}(ha.a);Object(f.a)(ia);Object(f.b)(ia);ca["default"]=ia}}]);}).call(this || window)