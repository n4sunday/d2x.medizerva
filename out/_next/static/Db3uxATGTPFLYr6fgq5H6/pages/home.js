(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3D1N":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){var e=n("CH2o");return{page:e.default||e}}])},CH2o:function(e,t,n){"use strict";n.r(t);var r,i,o,s,a,l,u,c,f,h,d,p,y=n("q1tI"),m=n.n(y),g=(n("DndN"),n("so7T"),n("3N+l")),b=n.n(g),v=(n("YFqc"),n("17x9")),k=n.n(v),w=m.a.createContext({number:0,count:0,subscribe:null,unsubscribe:null,goto:null,back:null,next:null}),x=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},E=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},R=(i=r=function(e){function t(e,n){x(this,t);var r=E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.slides=[],r.state={slide:null,translateY:0,pageYOffset:0,offsetHeight:0,count:0,number:0,resetScroll:!1},r.ticking=!1,r.fullPageHeight=0,r.viewportHeight=0,r.subscribe=r.subscribe.bind(r),r.unsubscribe=r.unsubscribe.bind(r),r.update=r.update.bind(r),r.getIndex=r.getIndex.bind(r),r.handleScroll=r.handleScroll.bind(r),r.handleResize=r.handleResize.bind(r),r.handleKeys=r.handleKeys.bind(r),r.driverRef=m.a.createRef(),r.warperRef=m.a.createRef(),r.fullpageRef=m.a.createRef(),r}return S(t,e),O(t,[{key:"componentDidMount",value:function(){return function(){this.handleResize(),this.setState({slide:this.slides[0]}),"undefined"!=typeof window&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)),"undefined"!=typeof document&&document.addEventListener("keydown",this.handleKeys)}}()},{key:"componentWillUnmount",value:function(){return function(){"undefined"!=typeof window&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)),"undefined"!=typeof document&&document.removeEventListener("keydown",this.handleKeys)}}()},{key:"getIndex",value:function(){return function(e){return this.slides.indexOf(e)}}()},{key:"subscribe",value:function(){return function(e){var t=[].concat(_(this.slides),[e]);return this.slides=t.sort(function(e,t){return e.el.current.offsetTop-t.el.current.offsetTop}),this.setState({count:this.slides.length}),this.ticking=!1,this.handleResize(),e}}()},{key:"unsubscribe",value:function(){return function(e){return this.slides=this.slides.filter(function(t){return t.el!==e.el}),this.setState({count:this.slides.length}),this.handleResize(),this.handleScroll(),e}}()},{key:"handleScroll",value:function(){return function(){var e=this,t=this.state,n=t.resetScroll,r=t.translateY;return this.lockScroll?(window.scrollTo(0,-1*r),!1):(this.ticking||window.requestAnimationFrame(function(){n&&window.scrollTo(0,-1*r);var t=window.pageYOffset||0;e.setState({pageYOffset:t,resetScroll:!1});var i=e.slides.find(function(e){var n=e.el.current;return t<n.offsetTop+.5*n.offsetHeight});e.goto(i),e.ticking=!1}),this.ticking=!0,!0)}}()},{key:"handleResize",value:function(){return function(){var e=this;this.ticking||window.requestAnimationFrame(function(){e.viewportHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),e.fullPageHeight=e.fullpageRef.current.clientHeight,e.driverRef.current.style.height=String(e.fullPageHeight)+"px",e.ticking=!1}),this.ticking=!0}}()},{key:"handleKeys",value:function(){return function(e){return!this.props.keyboardShortcut||(33===e.keyCode||37===e.keyCode||38===e.keyCode?(e.preventDefault(),e.shiftKey?this.first(e):this.back(e)):34===e.keyCode||39===e.keyCode||40===e.keyCode?(e.preventDefault(),e.shiftKey?this.last(e):this.next(e)):35===e.keyCode?(e.preventDefault(),this.last(e)):36!==e.keyCode||(e.preventDefault(),this.first(e)))}}()},{key:"update",value:function(){return function(){return this}}()},{key:"goto",value:function(){return function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.state.slide,i=this.props,o=i.transitionTiming,s=i.onChange;if(r!==e){var a=Math.max(-1*(this.fullPageHeight-this.viewportHeight),-1*e.el.current.offsetTop),l=r.props.onHide;l&&"function"==typeof l&&setTimeout(function(){return l(a)},o),this.lockScroll=!0,this.setState({slide:e,number:this.getIndex(e),translateY:a,offsetHeight:e.el.current.offsetHeight,resetScroll:n}),setTimeout(function(){t.lockScroll=!1},1e3);var u=e.props.onShow;u&&"function"==typeof u&&u(a),"function"==typeof s&&s(this.state)}return e}}()},{key:"back",value:function(){return function(){var e=this.state.number,t=Math.max(0,e-1);this.goto(this.slides[t],!0)}}()},{key:"next",value:function(){return function(){var e=this.slides.length,t=this.state.number,n=Math.min(e-1,t+1);this.goto(this.slides[n],!0)}}()},{key:"first",value:function(){return function(){this.goto(this.slides[0],!0)}}()},{key:"last",value:function(){return function(){this.goto(this.slides[this.slides.length-1],!0)}}()},{key:"render",value:function(){return function(){var e=this,t=this.props,n=t.children,r=t.style,i=t.className,o=t.transitionTiming,s=this.state,a=s.translateY,l=s.pageYOffset,u=s.offsetHeight,c=s.number,f=s.count;return m.a.createElement(w.Provider,{value:{translateY:a,pageYOffset:l,offsetHeight:u,number:c,count:f,subscribe:this.subscribe,unsubscribe:this.unsubscribe,update:this.update,goto:function(t){return e.goto(t)},back:this.back,next:this.next,getIndex:this.getIndex,transitionTiming:o,className:i,style:r,warperRef:this.warperRef,fullpageRef:this.fullpageRef,slides:this.slides}},m.a.createElement("div",{name:"Driver",style:{position:"relative"},ref:this.driverRef}),n)}}()}]),t}(y.PureComponent),r.contextType=w,r.propTypes={children:k.a.node.isRequired,transitionTiming:k.a.number,style:k.a.objectOf(k.a.oneOfType([k.a.number,k.a.string,k.a.bool])),className:k.a.string,onChange:k.a.func,keyboardShortcut:k.a.bool},r.defaultProps={transitionTiming:700,style:{position:"fixed",top:0,left:0,right:0},className:"",onChange:null,keyboardShortcut:!0},i),P=(s=o=function(e){function t(){return x(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,e),O(t,[{key:"render",value:function(){return function(){var e=this,t=this.props,n=t.children,r=t.style,i=t.className;return m.a.createElement(w.Consumer,null,function(t){return m.a.createElement("div",{name:"Warper",style:t.style,ref:e.warperRef},m.a.createElement("div",{name:"Inner",className:i,style:T({transition:"transform "+String(t.transitionTiming)+"ms cubic-bezier(0.645, 0.045, 0.355, 1.000)"},r,{transform:"translate3D(0, "+String(t.translateY)+"px, 0)"}),ref:t.fullpageRef},n))})}}()}]),t}(y.PureComponent),o.contextType=w,o.propTypes={children:k.a.node.isRequired,className:k.a.string,style:k.a.objectOf(k.a.oneOfType([k.a.number,k.a.string,k.a.bool]))},o.defaultProps={className:"",style:{position:"absolute",left:0,right:0}},s),C=m.a.createContext(),H=(l=a=function(e){function t(e,n){x(this,t);var r=E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.sectionRef=m.a.createRef(),r}return S(t,e),O(t,[{key:"componentDidMount",value:function(){return function(){var e=this.context.subscribe;this.el=this.sectionRef,e(this)}}()},{key:"componentWillUnmount",value:function(){return function(){(0,this.context.unsubscribe)(this)}}()},{key:"render",value:function(){return function(){var e=this.props,t=e.children,n=e.height,r=e.style,i=e.className,o=this.context.getIndex;return this.index=o(this),m.a.createElement(C.Provider,{value:{index:this.index}},m.a.createElement("section",{className:i,style:T({height:n},r),ref:this.sectionRef},t))}}()}]),t}(y.PureComponent),a.contextType=w,a.propTypes={children:k.a.node.isRequired,height:k.a.string,style:k.a.objectOf(k.a.oneOfType([k.a.number,k.a.string,k.a.bool])),className:k.a.string,onShow:k.a.func,onHide:k.a.func},a.defaultProps={height:"100vh",style:{},className:"",onShow:null,onHide:null},a.Number=function(e){var t=e.style,n=void 0===t?{}:t;return m.a.createElement(C.Consumer,null,function(e){return m.a.createElement("span",{style:n},""+String(e.index+1))})},l),j=(c=u=function(e){function t(){return x(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,e),O(t,[{key:"render",value:function(){return function(){var e=this,t=this.props,n=t.style,r=t.itemStyle,i=t.reverse,o=void 0!==i&&i,s=this.context,a=s.number,l=s.slides,u=s.transitionTiming,c=function(t){(0,e.context.goto)(t)};return m.a.createElement("div",{style:T({position:"fixed",height:"100vh",zIndex:100,top:0,right:0,listStyleType:"none",display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",paddingRight:"1em"},n)},l.map(function(e,t){return m.a.createElement("div",{key:t.toString(),style:T({borderRadius:"50%",height:a===t?14:10,width:a===t?14:10,margin:a===t?3:5,backgroundColor:o?"white":"black",opacity:a===t?1:.5,transition:"all "+.5*u+"ms ease-in-out"},r),onClick:function(){return c(e)},"aria-label":"Slide "+String(t)},m.a.createElement("span",{style:{display:"none"}},""+String(t)))}))}}()}]),t}(y.PureComponent),u.contextType=w,u.propTypes={style:k.a.objectOf(k.a.oneOfType([k.a.number,k.a.string,k.a.bool])),itemStyle:k.a.objectOf(k.a.oneOfType([k.a.number,k.a.string,k.a.bool])),reverse:k.a.bool},u.defaultProps={style:{},itemStyle:{},reverse:!1},h=f=function(e){function t(){return x(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,e),O(t,[{key:"render",value:function(){return function(){return m.a.createElement(w.Consumer,null,function(e){return m.a.createElement("span",null,""+String(e.number+1))})}}()}]),t}(y.PureComponent),f.contextType=w,p=d=function(e){function t(){return x(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,e),O(t,[{key:"render",value:function(){return function(){var e=this.props.style;return m.a.createElement(w.Consumer,null,function(t){return m.a.createElement("span",{style:e},t.count)})}}()}]),t}(y.PureComponent),d.contextType=w,d.propTypes={style:k.a.objectOf(k.a.oneOfType([k.a.number,k.a.string,k.a.bool]))},d.defaultProps={style:{}},R),N=b()(function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"+atU"))},{loadableGenerated:{webpack:function(){return["+atU"]},modules:["../components/home/tophome"]}}),D=b()(function(){return n.e(16).then(n.bind(null,"tr4n"))},{loadableGenerated:{webpack:function(){return["tr4n"]},modules:["../components/home/service"]}}),z=b()(function(){return n.e(15).then(n.bind(null,"2pxA"))},{loadableGenerated:{webpack:function(){return["2pxA"]},modules:["../components/home/doctor"]}});t.default=function(){return m.a.createElement("div",null,m.a.createElement(j,null,m.a.createElement(P,null,m.a.createElement(H,null,m.a.createElement(N,null)),m.a.createElement(H,null,m.a.createElement(D,null)),m.a.createElement(H,null,m.a.createElement(z,null)))))}},DndN:function(e,t){e.exports="/_next/static/images/Home02-97f8693eea6fa09ed20e082072104135.jpg"},so7T:function(e,t){e.exports="/_next/static/images/Home01-97f8693eea6fa09ed20e082072104135.jpg"}},[["3D1N",1,0]]]);