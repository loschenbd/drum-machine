(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(6),i=a.n(r),l=(a(12),a(2)),c=a(1),d=a(3),s=a(4),p=(a(13),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).handleKeyDown=function(e){e.keyCode===o.props.keyCode&&(o.audio.current.play(),o.props.handleDisplay(o.props.id))},o.handleClick=function(){o.audio.current.play(),console.log(o.audio.current),o.props.handleDisplay(o.props.id)},o.audio=n.a.createRef(),o}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}}]),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("button",{onClick:this.handleClick,className:"drum-pad",id:this.props.id,keyCode:this.props.keyCode},n.a.createElement("h3",null,this.props.letterKey),n.a.createElement("audio",{ref:this.audio,className:"clip",id:this.props.letterKey,src:this.props.path}))}}]),a}(n.a.Component)),h=[{keyCode:81,letterKey:"Q",id:"Heater-1",path:"http://localhost:8000/src/audio/Heater-1.mp3"},{keyCode:87,letterKey:"W",id:"Heater-2",path:"http://localhost:8000/src/audio/Heater-2.mp3"},{keyCode:69,letterKey:"E",id:"Heater-3",path:"http://localhost:8000/src/audio/Heater-3.mp3"},{keyCode:65,letterKey:"A",id:"Heater-4",path:"http://localhost:8000/src/audio/Heater-4_1.mp3"},{keyCode:83,letterKey:"S",id:"Clap",path:"http://localhost:8000/src/audio/Heater-6.mp3"},{keyCode:68,letterKey:"D",id:"Open-HH",path:"http://localhost:8000/src/audio/Dsc_Oh.mp3"},{keyCode:90,letterKey:"Z",id:"Kick-n'-Hat",path:"http://localhost:8000/src/audio/Kick_n_Hat.mp3"},{keyCode:88,letterKey:"X",id:"Kick",path:"http://localhost:8000/src/audio/RP4_KICK_1.mp3"},{keyCode:67,letterKey:"C",id:"Closed-HH",path:"http://localhost:8000/src/audio/Cev_H2.mp3"}],u=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).handleDisplay=function(e){return o.setState({display:e})},o.state={display:"Press a key"},o}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"drum-machine",className:"App"},n.a.createElement("div",{id:"display"},this.state.display),n.a.createElement("div",{className:"drum-pads"},h.map((function(t){return n.a.createElement(p,{id:t.id,letterKey:t.letterKey,path:t.path,keyCode:t.keyCode,handleDisplay:e.handleDisplay})}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.005ad88d.chunk.js.map