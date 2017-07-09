var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false","null"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e){return localStorage.setItem(t,e),e}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(t,e){var n=t.parentNode,i=t.nextSibling;e.appendChild(t),i?n.insertBefore(e,i):n.appendChild(e)}function o(t){for(var e=t.parentNode;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}function r(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function s(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):"addRule"in t&&t.addRule(e,n,i)}function l(t,e){return Math.atan2(t,e)*(180/Math.PI)}function c(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function u(t,e){return t.hasAttribute(e)}function d(t,e){return t.getAttribute(e)}function f(t){return void 0!==t.item}function h(t,e){if(t=f(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function p(t,e){t=f(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function v(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function m(t){u(t,"hidden")||h(t,{hidden:""})}function y(t){u(t,"hidden")&&p(t,"hidden")}function g(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function b(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++)if(prop=t[n],void 0!==e.style[prop])return prop;return!1}function x(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function C(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&D;t.addEventListener(n,e[n],i)}}function E(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&D;t.removeEventListener(n,e[n],i)}}function w(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function T(t,e,n,i,a,o,r){function s(){o-=l,u+=d,t.style[e]=n+u+c+i,o>0?setTimeout(s,l):r()}var l=Math.min(o,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/o*l;setTimeout(s,l)}!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var t,e,n,i=window,a=document,o=Object,r="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,e,n,i){o.defineProperty?o.defineProperty(t,e,{configurable:!1===f||!!i,get:n}):t.__defineGetter__(e,n)},p=function(t,e){var n=this,i=[],a={},d=0,f=0,p=function(){if(d>=f)for(;f<d;++f)!function(t){h(n,t,function(){return v(),i[t]},!1)}(f)},v=function(){var n,o,s=arguments,l=/\s+/;if(s[r])for(o=0;o<s[r];++o)if(l.test(s[o]))throw n=new SyntaxError('String "'+s[o]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},o=0;o<i[r];++o)a[i[o]]=!0;d=i[r],p()};return v(),h(n,r,function(){return v(),d}),n[s[6]]=n[s[5]]=function(){return v(),i.join(" ")},n.item=function(t){return v(),i[t]},n.contains=function(t){return v(),!!a[t]},n[l]=function(){v.apply(n,o=arguments);for(var o,s,l=0,c=o[r];l<c;++l)s=o[l],a[s]||(i.push(s),a[s]=!0);d!==i[r]&&(d=i[r]>>>0,t[e]=i.join(" "),p())},n[c]=function(){v.apply(n,o=arguments);for(var o,s={},l=0,c=[];l<o[r];++l)s[o[l]]=!0,delete a[o[l]];for(l=0;l<i[r];++l)s[i[l]]||c.push(i[l]);i=c,d=c[r]>>>0,t[e]=i.join(" "),p()},n[u]=function(t,e){return v.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[c](t),!1):a[t]?(n[c](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,s[n],{enumerable:!1})}(n,o.defineProperty),n},v=function(t,e,n){h(t[d],e,function(){var t,i=this,o="__defineGetter__defineProperty"+e;if(i[o])return t;if(i[o]=!0,!1===f){for(var s,l=v.mirror=v.mirror||a.createElement("div"),c=l.childNodes,u=c[r],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),t=p.call(s,i,n)}else t=new p(i,n);return h(i,e,function(){return t}),delete i[o],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[l].apply(t,s),2>t[r]&&(e=d[l],n=d[c],d[l]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[c]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:c](t),!!e});else{if(f)try{h({},"support")}catch(t){f=!1}p.polyfill=!0,i.DOMTokenList=p,v(i.Element,"classList","className"),v(i.HTMLLinkElement,"relList","rel"),v(i.HTMLAnchorElement,"relList","rel"),v(i.HTMLAreaElement,"relList","rel")}}();var M=!1;try{var S=Object.defineProperty({},"passive",{get:function(){M=!0}});window.addEventListener("test",null,S)}catch(t){}var D=!!M&&{passive:!0},L=navigator.userAgent,A=localStorage;A.tnsApp?A.tnsApp!==L&&(A.tnsApp=L,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(t){A.removeItem(t)})):A.tnsApp=L;var N=document,k={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},O=e(A.tnsCalc||n("tnsCalc",function(){var t=document,e=t.body,n=t.createElement("div"),i=!1;e.appendChild(n);try{for(var a,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],r=0;r<3;r++)if(a=o[r],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(t){}return e.removeChild(n),i}())),P=e(A.tnsSubpixel||n("tnsSubpixel",function(){var t,e=document,n=e.body,i=e.createElement("div"),a=e.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",t=a.cloneNode(!0),i.appendChild(a),i.appendChild(t),n.appendChild(i);var o=a.offsetTop!==t.offsetTop;return n.removeChild(i),o}())),I=e(A.tnsCSSMQ||n("tnsCSSMQ",function(){var t=document,e=t.body,n=t.createElement("div");n.className="tns-mq-test",e.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return e.removeChild(n),"absolute"===i}())),z=e(A.tnsTf||n("tnsTf",b(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),R=e(A.tnsTsDu||n("tnsTsDu",b(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),H=e(A.tnsTsDe||n("tnsTsDe",b(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),W=e(A.tnsAnDu||n("tnsAnDu",b(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),B=e(A.tnsAnDe||n("tnsAnDe",b(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),j=e(A.tnsTsEn||n("tnsTsEn",x(R,"Transition"))),G=e(A.tnsAnEn||n("tnsAnEn",x(W,"Animation")));return function(e){function n(){if(Gt<=_t){Kt=!1;de=zt?ae:0,void 0!==de&&ge.emit("indexChanged",St()),ke&&m(ke),Le&&m(Le),qe&&m(qe)}else Kt=e.arrowKeys,Ne&&y(ke),Se&&y(Le),Be&&y(qe)}function u(t){clearTimeout(Pt),Pt=setTimeout(function(){Ot!==sn()&&(f(),"outer"===qt&&ge.emit("outerResized",St(t)))},100)}function f(){Ot=sn();var t=de,e=_t;(Zt||Yt)&&(_t=rn()),Rt||(F(),wt(),V()),Yt&&Xt&&Et(),L(),Zt&&_t!==e&&(ge.emit("itemsChanged"),n(),ln(),Yt||I||x(),zt||I||S(),J(0),U(),D(),Mt(),X(),de!==t&&(ge.emit("indexChanged",St()),Y()),navigator.msMaxTouchPoints&&q())}function b(t){return(t.cssRules?t.cssRules:t.rules).length}function x(){Bt.style.width=100*oe/_t+"%"}function M(t){for(var e="",n="0",i=0;i<t;i++){var a=i<t-1?"+"+(i+1):"";i>0&&(n=O?O+"("+100*i+"% / "+t+")":100*i/t+"%"),e+="#"+we+" .tns-item:nth-child("+t+"n"+a+"){left:"+n+"}"}return e}function S(){for(var t=0;t<oe;t++){for(var e=de%_t,n=t%_t;n<e;)n+=_t;jt[t].style.left=100*(n-e)/_t+"%"}}function D(){if(ne){var t=de,e=de+_t;for(Xt&&(t-=1,e+=1);t<e;t++)[].forEach.call(jt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[j]=function(t){t.stopPropagation()},C(t,e),t.classList.contains("loaded")||(t.src=d(t,"data-src"),t.classList.add("loaded"))})}}function L(){if($t){for(var t=[],e=de;e<de+_t;e++)[].forEach.call(jt[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?_():A(t)}}function A(t){t.forEach(function(e,n){g(e)&&t.splice(n,1)}),0===t.length?_():setTimeout(function(){A(t)},16)}function _(){for(var t,e=[],n=de;n<de+_t;n++)e.push(jt[n].offsetHeight);t=Math.max.apply(null,e),Bt.style.height!==t&&(R&&K(Qt),Bt.style.height=t+"px")}function F(){kt=[0];for(var t,e=jt[0].getBoundingClientRect().top,n=1;n<oe;n++)t=jt[n].getBoundingClientRect().top,kt.push(t-e)}function q(){Ht.style.msScrollSnapPointsX="snapInterval(0%, "+100/_t+"%)"}function U(){var t,e,n,i;de!==fe&&(de>fe?(t=fe,e=Math.min(fe+_t,de),n=Math.max(fe+_t,de),i=de+_t):(t=Math.max(de+_t,fe),e=fe+_t,n=de,i=Math.min(de+_t,fe))),Ft%1!=0&&(t=Math.round(t),e=Math.round(e),n=Math.round(n),i=Math.round(i));for(var a=t;a<e;a++)h(jt[a],{"aria-hidden":"true",tabindex:"-1"});for(var o=n;o<i;o++)h(jt[o],{"aria-hidden":"false"}),p(jt[o],["tabindex"])}function X(){Ne&&(Re=ze!==-1?ze:!Jt&&Xt?(de-1)%Gt:de%Gt,ze=-1,Re!==He&&(h(Ae[He],{tabindex:"-1","aria-selected":"false"}),h(Ae[Re],{tabindex:"0","aria-selected":"true"}),He=Re))}function Y(){if(Se&&!Jt){var t=[],e=[];de===pe?(t.push(Te),e.push(Me),ft(Te,Me)):Vt||de!==ve?e.push(Te,Me):(t.push(Me),e.push(Te),ft(Me,Te)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function K(t,e){t=t?t/1e3+"s":"",e=e||Bt,e.style[R]=t,zt||(e.style[W]=t),Rt||(Wt.style[R]=t)}function Q(){var t;if(Rt)if(Yt)t=-Yt*de+"px";else{var e=z?oe:_t;t=100*-de/e+"%"}else t=-kt[de]+"px";return t}function V(t){t||(t=Q()),Bt.style[le]=ce+t+ue}function J(t,e){void 0===t&&(t=Qt),R&&K(t),cn(t,e)}function $(){me=!0,se&&ln(),de!==fe&&ge.emit("indexChanged",St()),ge.emit("transitionStart",St()),J()}function Z(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(ge.emit("transitionEnd",St(t)),!zt&&ie.length>0)for(var n=0;n<_t;n++){var i=ie[n];R&&K(0,i),Nt&&H&&(i.style[H]=i.style[B]=""),i.classList.remove(Lt),i.classList.add(At)}if(!t||!zt&&t.target.parentNode===Bt||t.target===Bt&&e(t.propertyName)===e(le)){if(!se){var a=de;ln(),de!==a&&(J(0),ge.emit("indexChanged",St()))}U(),(Ne&&!Jt||Ne&&Jt&&Pe.indexOf(de%Gt)===-1)&&Mt(),X(),Y(),D(),L(),"inner"===qt&&ge.emit("innerLoaded",St()),me=!1,fe=de}}function tt(t){if(!me){var e,n=de%Gt;switch(n<0&&(n+=Gt),t){case"next":e=1;break;case"prev":e=-1;break;case"first":e=-n;break;case"last":e=Gt-1-n;break;default:if("number"==typeof t){var i=t%Gt;i<0&&(i+=Gt),!Jt&&Xt&&(i+=1),e=i-n}}de+=e,se&&ln(),de%Gt!=fe%Gt&&$()}}function et(t){me||(de+=t*Ft,$())}function nt(){et(-1)}function it(){Vt&&de===ve?tt(0):et(1)}function at(t){if(!me){for(var e,n=t.target||t.srcElement;null===d(n,"data-nav");)n=n.parentNode;e=ze=Number(d(n,"data-nav")),tt(e)}}function ot(){lt(),h(qe,{"data-action":"stop"}),qe.innerHTML=Ye+_e[1],Ue=!0}function rt(){st(),h(qe,{"data-action":"start"}),qe.innerHTML=Ye.replace("Stop","Start")+_e[0],Ue=!1}function st(){Ue="paused",clearInterval(We)}function lt(){Ue!==!0&&(clearInterval(We),We=setInterval(function(){et(Ge)},je))}function ct(){Ue?rt():ot()}function ut(){Qe!=N.hidden&&Ue!==!1&&(N.hidden?st():lt()),Qe=N.hidden}function dt(t){switch(t=t||window.event,t.keyCode){case k.LEFT:nt();break;case k.RIGHT:it()}}function ft(t,e){"object"==typeof t&&"object"==typeof e&&t===N.activeElement&&(t.blur(),e.focus())}function ht(t){t=t||window.event;var e=t.keyCode;N.activeElement;switch(e){case k.LEFT:case k.UP:case k.PAGEUP:Te.disabled||nt();break;case k.RIGHT:case k.DOWN:case k.PAGEDOWN:Me.disabled||it();break;case k.HOME:tt(0);break;case k.END:tt(Gt-1)}}function pt(t){t=t||window.event;var e=t.keyCode,n=N.activeElement,i=d(n,"data-nav");switch(e){case k.LEFT:case k.PAGEUP:i>0&&ft(n,n.previousElementSibling);break;case k.UP:case k.HOME:0!==i&&ft(n,Ae[0]);break;case k.RIGHT:case k.PAGEDOWN:i<Oe-1&&ft(n,n.nextElementSibling);break;case k.DOWN:case k.END:i<Oe-1&&ft(n,Ae[Oe-1]);break;case k.ENTER:case k.SPACE:at(t)}}function vt(){J(0,Bt.scrollLeft()),fe=de}function mt(t){return t.target||t.srcElement}function yt(t){return"a"===t.tagName.toLowerCase()}function gt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function bt(t){t=t||window.event,yt(mt(t))&&"touchstart"!==t.type&&gt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;tn=parseInt(e.clientX),en=parseInt(e.clientY),Ve=Number(Bt.style[le].replace(ce,"").replace(ue,"").replace(/(px|%)/g,"")),"touchstart"===t.type?ge.emit("touchStart",St(t)):(ge.emit("dragStart",St(t)),an=!0)}function xt(t){if(t=t||window.event,an&&"mousemove"===t.type&&!on&&(on=!0),null!==tn){yt(mt(t))&&"touchmove"!==t.type&&gt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(Je=parseInt(n.clientX)-tn,$e=parseInt(n.clientY)-en,c(l($e,Je),15)===e.axis){It=!0,"touchmove"===t.type?ge.emit("touchMove",St(t)):ge.emit("dragMove",St(t));var i=Ve;if(Rt){i+=z?Je*_t*100/(Ot*oe):100*Je/Ot,i+="%"}else i+=$e,i+="px";z&&K(0),Bt.style[le]=ce+i+ue}}}function Ct(t){if(t=t||window.event,an&&(an=!1),It){It=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Je=parseInt(e.clientX)-tn,$e=parseInt(e.clientY)-en,tn=en=null,Rt){var n=-Je*_t/Ot;n=Je>0?Math.floor(n):Math.ceil(n),de+=n}else{var i=-(Ve+$e);if(i<=0)de=pe;else if(i>=kt[kt.length-1])de=ve;else{var a=0;do{a++,de=$e<0?a+1:a}while(a<oe&&i>=kt[a+1])}}0===t.type.indexOf("touch")?ge.emit("touchEnd",St(t)):ge.emit("dragEnd",St(t)),$()}if(on){on=!1;var o=mt(t);yt(o)&&C(o,{click:function t(e){gt(e),E(o,{click:t})}})}}function Et(){Ot||(Ot=sn()),Wt.style.cssText+="margin: 0px "+(Ot%Yt+Ut)/2+"px"}function wt(){Wt.style.height=kt[de+_t]-kt[de]+"px"}function Tt(){Pe=[];for(var t=!Jt&&Xt?de-1:de,e=t%Gt%_t;e<Gt;)!Jt&&e+_t>Gt&&(e=Gt-_t),Pe.push(e),e+=_t;(Jt&&Pe.length*_t<Gt||!Jt&&Pe[0]>0)&&Pe.unshift(0)}function Mt(){Ne&&!e.navContainer&&(Tt(),Pe!==Ie&&(Ie.length>0&&Ie.forEach(function(t){h(Ae[t],{hidden:""})}),Pe.length>0&&Pe.forEach(function(t){p(Ae[t],"hidden")}),Ie=Pe))}function St(t){return{container:Bt,slideItems:jt,navItems:Ae,prevButton:Te,nextButton:Me,items:_t,index:de,indexCached:fe,navCurrent:Re,navCurrentCached:He,slideCount:Gt,cloneCount:ae,slideCountNew:oe,event:t||{}}}if(e=t({container:N.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),"object"==typeof e.container&&null!==e.container){if("gallery"===e.mode){e.axis="horizontal",e.edgePadding=!1,e.loop=!0,e.autoHeight=!0,e.slideBy="page";var Dt="tns-fadeIn",Lt="tns-fadeOut",At="tns-normal",Nt=!1;W&&(Dt=e.animateIn,Lt=e.animateOut,At=e.animateNormal,Nt=e.animateDelay)}var kt,Ot,Pt,It,zt="carousel"===e.mode,Rt="horizontal"===e.axis,Ht=N.createElement("div"),Wt=N.createElement("div"),Bt=e.container,jt=Bt.children,Gt=jt.length,_t=e.items,Ft="page"===e.slideBy?_t:e.slideBy,qt=e.nested,Ut=e.gutter,Xt=e.edgePadding,Yt=!!e.fixedWidth&&e.fixedWidth+Number(e.gutter),Kt=e.arrowKeys,Qt=e.speed,Vt=e.rewind,Jt=!e.rewind&&e.loop,$t=e.autoHeight,Zt=!Yt&&e.responsive,te=!1,ee=r(),ne=e.lazyload,ie=[],ae=Jt?2*Gt:Xt?1:0,oe=zt?Gt+2*ae:Gt+ae,re=!(!Yt||Jt||Xt),se=!zt||!Jt,le=Rt?"left":"top",ce="",ue="",de=zt?ae:0,fe=de,he=Xt?1:0,pe=he,ve=oe-_t-he,me=!1,ye=e.onInit,ge=new w,be=Bt.id,xe=Bt.className,Ce=jt[0].id,Ee=jt[0].className,we=Bt.id||i();if(Zt&&(Zt[0]||(Zt[0]=e.items),te=Object.keys(Zt).sort(function(t,e){return t-e})),e.controls)var Te,Me,Se=e.controls,De=e.controlsText,Le=!!e.controlsContainer&&e.controlsContainer;if(e.nav)var Ae,Ne=e.nav,ke=e.navContainer||!1,Oe=e.navContainer?Gt:Math.ceil(Gt/_t),Pe=[],Ie=Pe,ze=-1,Re=0,He=0;if(e.autoplay)var We,Be=e.autoplay,je=e.autoplayTimeout,Ge="forward"===e.autoplayDirection?1:-1,_e=e.autoplayText,Fe=e.autoplayHoverPause,qe=e.autoplayButton,Ue=!1,Xe=!1,Ye="<span hidden>Stop Animation</span>",Ke=e.autoplayResetOnVisibility,Qe=!1;if(e.touch)var Ve,Je,$e,Ze=e.touch,tn=null,en=null;if(e.mouseDrag)var nn=e.mouseDrag,an=!1,on=!1;z&&(le=z,ce="translate",ce+=Rt?"X(":"Y(",ue=")");var rn=function(){return Yt?function(){return Math.max(1,Math.min(Gt,Math.floor(Ot/Yt)))}:function(){var t;return Ot||(Ot=sn()),te.forEach(function(e){Ot>=e&&(t=Zt[e])}),Math.max(1,Math.min(Gt,t))}}(),sn=function(){return Rt&&!Yt&&Xt?function(){return Ht.clientWidth-2*(Xt+Ut)}:function(){return Ht.clientWidth}}();ge.on("itemsChanged",function(){ve=oe-_t-he,"page"===e.slideBy&&(Ft=_t),Ne&&!e.navContainer&&(Oe=Math.ceil(Gt/_t))}),function(){a(Bt,Wt),a(Wt,Ht),Ot=sn(),(Zt||Yt)&&(_t=rn(),ge.emit("itemsChanged"));var t=Rt?"tns-outer tns-hdx":"tns-outer";if(Ht.className=t,t=Rt?"tns-inner":"tns-inner tns-hdy",Wt.className=t,""===Bt.id&&(Bt.id=we),t=" tns-slider tns-"+e.mode,t+=P?" tns-subpixel":" tns-no-subpixel",t+=O?" tns-calc":" tns-no-calc",zt&&(t+=" tns-"+e.axis),zt&&$t&&(t+=" tns-hdy"),Bt.className+=t,Xt)if(Yt)Et();else{var i=Xt+Ut,o=Xt;Wt.style.cssText+=Rt?"margin: 0 "+o+"px 0 "+i+"px":"padding: "+i+"px 0 "+o+"px 0"}for(var r=0;r<Gt;r++){var l=jt[r];l.id=we+"-item"+r,l.classList.add("tns-item"),!zt&&At&&l.classList.add(At),h(l,{"aria-hidden":"true",tabindex:"-1"})}if(Jt||Xt){for(var c=N.createDocumentFragment(),d=N.createDocumentFragment(),v=ae;v--;){var m=v%Gt,y=jt[m].cloneNode(!0);if(p(y,"id"),d.insertBefore(y,d.firstChild),zt){var g=jt[Gt-1-m].cloneNode(!0);p(g,"id"),c.appendChild(g)}}Bt.insertBefore(c,Bt.firstChild),Bt.appendChild(d),jt=Bt.children}for(var E=de;E<de+_t;E++){var l=jt[E];h(l,{"aria-hidden":"false"}),p(l,["tabindex"]),zt||(l.classList.remove(At),l.classList.add(Dt))}if(Rt){var w=stringSlideFontSize=stringSlideGutter="",T="width:";if(zt){var A=stringContainerFontSize="";if(A+="width:",Yt?(A+=Yt*oe+"px",T+=Yt+"px"):(I?A+=O?O+"("+100*oe+"% / "+e.items+")":100*oe/e.items+"%":x(),T+=O?O+"(100% / "+oe+")":100/oe+"%"),A+=";",P){var k=window.getComputedStyle(jt[0]).fontSize;k.indexOf("em")!==-1&&(k=16*Number(k.replace(/r?em/,""))+"px"),stringContainerFontSize=" font-size: 0;",stringSlideFontSize=" font-size: "+k+";"}s(ee,"#"+we,A+stringContainerFontSize,b(ee))}else T+=O?O+"(100% / "+e.items+")":100/e.items+"%",w=M(_t);if(T+=";",Ut&&(Xt||Yt||(Wt.style.marginRight=-Ut+"px"),stringSlideGutter="padding-right: "+Ut+"px;"),s(ee,"#"+we+" .tns-item",T+stringSlideGutter+stringSlideFontSize,b(ee)),!zt&&I&&w.split("#").forEach(function(t){t.length>0&&ee.insertRule("#"+t,ee.cssRules.length)}),zt&&!P)for(var z=0;z<jt.length;z++){var R=O?O+"("+100*z+"% / "+oe+")":100*z/oe+"%";ee.insertRule("#"+we+" .tns-item:nth-child("+(z+1)+") { margin-left: "+R+"; }",ee.cssRules.length)}if(Zt&&I)for(var H=te.length,E=0;E<H;E++){var W,B,G=te[E],_=Zt[G];W=O?O+"(100% * "+oe+" / "+_+")":100*oe/_+"%",W="#"+we+"{width: "+W+"}",B=zt?"":M(_),ee.insertRule("@media (min-width: "+G/16+"em) {"+W+B+"}",ee.cssRules.length)}}else Ut&&(Xt||(Wt.style.marginBottom=-Ut+"px"),s(ee,"#"+we+" .tns-item","margin-bottom: "+Ut+"px;",0)),F(),wt();if(zt?V():I||(S(),ge.on("indexChanged",function(){de%_t!=fe%_t&&S()})),navigator.msMaxTouchPoints&&(Ht.classList.add("ms-touch"),C(Ht,{scroll:vt}),q()),Ne){if(e.navContainer)h(ke,{"aria-label":"Carousel Pagination"}),Ae=ke.children,[].forEach.call(Ae,function(t,e){h(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":we+"-item"+e})});else{for(var U="",E=0;E<Gt;E++)U+='<button data-nav="'+E+'" tabindex="-1" aria-selected="false" aria-controls="'+we+"-item"+E+'" hidden type="button"></button>';U='<div class="tns-nav" aria-label="Carousel Pagination">'+U+"</div>",Ht.insertAdjacentHTML("afterbegin",U),[].forEach.call(Ht.children,function(t){t.classList.contains("tns-nav")&&(ke=t)}),Ae=ke.children,Mt()}h(Ae[0],{tabindex:"0","aria-selected":"true"})}if(Be&&(qe?h(qe,{"data-action":"stop"}):(ke||(Ht.insertAdjacentHTML("afterbegin",'<div class="tns-nav" aria-label="Carousel Pagination"></div>'),ke=Ht.querySelector(".tns-nav")),ke.insertAdjacentHTML("beforeend",'<button data-action="stop" type="button">'+Ye+_e[0]+"</button>"),qe=ke.querySelector("[data-action]")),ot()),Se&&(e.controlsContainer?(Te=Le.children[0],Me=Le.children[1],h(Le,{"aria-label":"Carousel Navigation",tabindex:"0"}),h(Te,{"data-controls":"prev"}),h(Me,{"data-controls":"next"}),h(Le.children,{"aria-controls":we,tabindex:"-1"})):(Ht.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+we+'" type="button">'+De[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+we+'" type="button">'+De[1]+"</button></div>"),[].forEach.call(Ht.children,function(t){t.classList.contains("tns-controls")&&(Le=t)}),Te=Le.children[0],Me=Le.children[1]),Jt||(Te.disabled=!0)),zt){if(j){var X={};X[j]=Z,C(Bt,X)}Ze&&C(Bt,{touchstart:bt,touchmove:xt,touchend:Ct,touchcancel:Ct}),nn&&C(Bt,{mousedown:bt,mousemove:xt,mouseup:Ct,mouseleave:Ct})}if(Ne)for(var Y=0;Y<Gt;Y++)C(Ae[Y],{click:at,keydown:pt});Se&&(C(Le,{keydown:ht}),C(Te,{click:nt}),C(Me,{click:it})),Be&&(C(qe,{click:ct}),Fe&&(C(Bt,{mouseover:function(){Ue&&(rt(),Xe=!0)}}),C(Bt,{mouseout:function(){!Ue&&Xe&&(ot(),Xe=!1)}})),Ke&&C(document,{visibilitychange:ut})),Kt&&C(document,{keydown:dt}),"inner"===qt?ge.on("outerResized",function(){f(),ge.emit("innerLoaded",St())}):(C(window,{resize:u}),"outer"===qt&&ge.on("innerLoaded",L)),n(),D(),L(),"function"==typeof ye&&ye(St()),"inner"===qt&&ge.emit("innerLoaded",St())}();var ln=function(){return Jt?function(){var t=pe,e=ve;if(zt&&(t+=Ft,e-=Ft),Yt&&Ot%(Yt+Ut)!=0&&(e-=1),de>e)for(;de>=t+Gt;)de-=Gt;else if(de<t)for(;de<=e-Gt;)de+=Gt}:function(){de=Math.max(pe,Math.min(ve,de))}}(),cn=function(){return zt?function(t,e){if(e||(e=Q()),re&&de===ve){var n=z?100*-((oe-_t)/oe):100*-(oe/_t-1);e=Math.max(Number(e.replace("%","")),n)+"%"}R||!t?V(e):T(Bt,le,ce,ue,e,Qt,Z),Rt||wt()}:function(){ie=[];var t={};t[j]=t[G]=Z,E(jt[fe],t),C(jt[de],t),function(){for(var t=fe,e=fe+_t;t<e;t++){var n=jt[t];if(R&&K(Qt,n),Nt&&H){var i=Nt*(t-fe)/1e3;n.style[H]=i+"s",n.style[B]=i+"s"}n.classList.remove(Dt),n.classList.add(Lt),ie.push(n)}}(),function(){for(var t=de,e=de+_t;t<e;t++){var n=jt[t];if(R&&K(Qt,n),Nt&&H){var i=Nt*(t-de)/1e3;n.style[H]=i+"s",n.style[B]=i+"s"}n.classList.remove(At),n.classList.add(Dt)}}(),j||setTimeout(Z,Qt)}}();return{getInfo:St,events:ge,goTo:tt,destroy:function(){if(ee.disabled=!0,o(Ht),o(Wt),Ht=Wt=null,Bt.id=be||"",Bt.className=xe||"",p(Bt,["style"]),Jt)for(var t=ae;t--;)jt[0].remove(),jt[jt.length-1].remove();for(var n=Gt;n--;)jt[n].id=Ce||"",jt[n].className=Ee||"";p(jt,["style","aria-hidden","tabindex"]),we=Gt=null,Se&&(e.controlsContainer?(p(Le,["aria-label","tabindex"]),p(Le.children,["aria-controls","tabindex"]),v(Le)):(Le.remove(),Le=Te=Me=null)),Ne&&(e.navContainer?(p(ke,["aria-label"]),p(Ae,["aria-selected","aria-controls","tabindex"]),v(ke)):(ke.remove(),ke=null),Ae=null),Be&&(e.navContainer||null===ke?v(qe):(ke.remove(),ke=null),E(document,{visibilitychange:ut})),v(Bt),Kt&&E(document,{keydown:dt}),E(window,{resize:u})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
