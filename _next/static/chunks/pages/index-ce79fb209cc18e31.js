(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var a=n(5893),o=n(7294),i=n(6154),c=n(1163),l=n(4793);function s(){let t=(0,c.useRouter)();(0,o.useEffect)(()=>{e()});let e=async()=>{try{let t=await Promise.all([i.Z.get("".concat("https://sp-vote.com","/filecoin/activevotes?network=calibration")),i.Z.get("".concat("https://sp-vote.com","/filecoin/votehistory?network=calibration\n          "))]);t[0].data.length>0?n(t[0].data[0]):(console.log(t[1].data[t[1].data.length-1]),n(t[1].data[t[1].data.length-1]))}catch(t){console.log(t)}},n=e=>{let n=e<10?"000":"00";t.push("/vote/fip-"+n+e)};return(0,a.jsx)("div",{className:"flex flex-row justify-center my-32",children:(0,a.jsx)(l.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",visible:!0})})}}},function(t){t.O(0,[154,618,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);