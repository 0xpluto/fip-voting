"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{364:function(e,t,a){a.r(t),a.d(t,{default:function(){return u},options:function(){return c}});var o=a(5893),s=a(7294),l=a(3148),n=a(6495),r=a(6154);l.kL.register(l.uw,l.f$,l.ZL,l.Dx,l.u,l.De);let c={indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{position:"right"},title:{display:!0,text:"Previous Votes"}},scales:{x:{stacked:!0},y:{stacked:!0}}};function u(){let e=(0,s.useRef)(null),[t,a]=(0,s.useState)(null),[l,u]=(0,s.useState)([]),[i,d]=(0,s.useState)([]),b=async()=>{try{let e=await r.Z.get("".concat("http://18.116.124.40","/filecoin/allconcludedvotes?network=calibration"));a(e.data),p(e.data),f(e.data)}catch(e){console.log(e)}};(0,s.useEffect)(()=>{b()},[b]),(0,s.useEffect)(()=>{let t=e.current;t&&console.log("ChartJS",t)},[]);let p=e=>{let t=[];Object.keys(e).map(e=>t.push("FIP-".concat(e))),u(t)},f=e=>{let t=[],a=[],o=[];Object.keys(e).map(s=>{t.push(e[s].yay),a.push(e[s].nay),o.push(e[s].abstain)}),d([{label:"Nay Votes",data:a,backgroundColor:"rgba(249,53,53,0.8)"},{label:"Abstain Votes",data:o,backgroundColor:"rgba(249,171,53,0.8)"},{label:"Yay Votes",data:t,backgroundColor:"rgba(53,249,53,0.8)"}])};return(0,o.jsx)("div",{className:"md:px-56",children:(0,o.jsx)(n.$Q,{ref:e,options:{...c,plugins:{tooltip:{callbacks:{footer:e=>{console.log("TOOL TIP",e);let a=Object.keys(t),o=t[a[e[0].dataIndex]],s=o.yay+o.nay+o.abstain;return console.log("SUM",s),console.log("FIPS",t[a[e[0].dataIndex]]),"Vote Power: "+parseInt(e[0].formattedValue)/s*100+"%"}}}}},data:{labels:l,datasets:i}})})}}}]);