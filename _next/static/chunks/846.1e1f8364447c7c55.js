(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{5846:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return u}});var s=a(5893),r=a(7294),o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)};function i(t){var e,a,s,o,i,n,l,c,u=t.className,d=t.counterClockwise,h=t.dashRatio,_=t.pathRadius,p=t.strokeWidth,g=t.style;return(0,r.createElement)("path",{className:u,style:Object.assign({},g,(a=(e={pathRadius:_,dashRatio:h,counterClockwise:d}).counterClockwise,s=e.dashRatio,i=(1-s)*(o=2*Math.PI*e.pathRadius),{strokeDasharray:o+"px "+o+"px",strokeDashoffset:(a?-i:i)+"px"})),d:(l=(n={pathRadius:_,counterClockwise:d}).pathRadius,"\n      M 50,50\n      m 0,-"+l+"\n      a "+l+","+l+" "+(c=n.counterClockwise?1:0)+" 1 1 0,"+2*l+"\n      a "+l+","+l+" "+c+" 1 1 0,-"+2*l+"\n    "),strokeWidth:p,fillOpacity:0})}var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return!function(t,e){function a(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,a=t.minValue,s=t.maxValue;return(Math.min(Math.max(e,a),s)-a)/(s-a)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,a=t.className,s=t.classes,o=t.counterClockwise,n=t.styles,l=t.strokeWidth,c=t.text,u=this.getPathRadius(),d=this.getPathRatio();return(0,r.createElement)("svg",{className:s.root+" "+a,style:n.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:s.background,style:n.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:s.trail,counterClockwise:o,dashRatio:e,pathRadius:u,strokeWidth:l,style:n.trail}),(0,r.createElement)(i,{className:s.path,counterClockwise:o,dashRatio:d*e,pathRadius:u,strokeWidth:l,style:n.path}),c?(0,r.createElement)("text",{className:s.text,style:n.text,x:50,y:50},c):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(r.Component);function l(t){var e=t.rotation,a=t.strokeLinecap,s=t.textColor,r=t.textSize,o=t.pathColor,i=t.pathTransition,n=t.pathTransitionDuration,l=t.trailColor,u=t.backgroundColor,d=null==e?void 0:"rotate("+e+"turn)",h=null==e?void 0:"center center";return{root:{},path:c({stroke:o,strokeLinecap:a,transform:d,transformOrigin:h,transition:i,transitionDuration:null==n?void 0:n+"s"}),trail:c({stroke:l,strokeLinecap:a,transform:d,transformOrigin:h}),text:c({fill:s,fontSize:r}),background:c({fill:u})}}function c(t){return Object.keys(t).forEach(function(e){null==t[e]&&delete t[e]}),t}a(7743);var u=t=>{let{data:e}=t,a=e.abstain_storage_size+e.nay_storage_size+e.yay_storage_size===0;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-sm text-neutral-400 mb-3",children:"Voting Power"}),(0,s.jsxs)("div",{className:"flex flex-row items-center mb-3",children:[(0,s.jsx)("div",{style:{width:"100px",height:"100px"},children:(0,s.jsx)(n,{className:"basis-1/2 mr-3",value:a?0:e.yay_storage_size/(e.yay_storage_size+e.nay_storage_size+e.abstain_storage_size)*100,text:"".concat(a?0:e.yay_storage_size/(e.yay_storage_size+e.nay_storage_size+e.abstain_storage_size)*100,"%"),styles:l({pathColor:"#228B22",textColor:"#228B22"})})}),(0,s.jsxs)("div",{className:"ml-5",children:[e.yay_storage_size," bytes"]})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center mb-3",children:[(0,s.jsx)("div",{style:{width:"100px",height:"100px"},children:(0,s.jsx)(n,{className:"basis-1/2 mr-3",value:a?0:e.nay_storage_size/(e.yay_storage_size+e.nay_storage_size+e.abstain_storage_size)*100,text:"".concat(a?0:e.nay_storage_size/(e.yay_storage_size+e.nay_storage_size+e.abstain_storage_size)*100,"%"),styles:l({pathColor:"#ED2939",textColor:"#ED2939"})})}),(0,s.jsxs)("div",{className:"ml-5",children:[e.nay_storage_size," bytes"]})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)("div",{style:{width:"100px",height:"100px"},children:(0,s.jsx)(n,{className:"basis-1/2 mr-3",value:a?0:e.abstain_storage_size/(e.yay_storage_size+e.nay_storage_size+e.abstain_storage_size)*100,text:"".concat(a?0:e.abstain_storage_size/(e.yay_storage_size+e.nay_storage_size+e.abstain_storage_size)*100,"%"),styles:l({pathColor:"#FDDA0D",textColor:"#FDDA0D"})})}),(0,s.jsxs)("div",{className:"ml-5",children:[e.abstain_storage_size," bytes"]})]})]})}},7743:function(){}}]);