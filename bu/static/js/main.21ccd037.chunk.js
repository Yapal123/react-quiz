(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,s){e.exports=s(17)},,,,,function(e,t,s){},function(e,t,s){e.exports=s.p+"static/media/logo.25bf045c.svg"},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(8),o=s.n(i),r=(s(14),s(2)),l=s(3),c=s(5),p=s(4),u=s(1),h=s(6),f=(s(15),s(16),function(e){function t(e){var s;return Object(r.a)(this,t),(s=Object(c.a)(this,Object(p.a)(t).call(this,e))).change=s.change.bind(Object(u.a)(s)),s}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("mounted")}},{key:"change",value:function(e){this.props.func(e.target.value,this.props.step)}},{key:"render",value:function(){var e=this,t=this.props.radios.map((function(t,s){return n.a.createElement("div",{className:"form-check form-check-inline",key:s.toString()},n.a.createElement("input",{type:"radio",value:t.pts,name:"questions",onChange:e.change,className:"form-check-input",id:s}),n.a.createElement("label",{className:"form-check-label",htmlFor:s},t.answ))}));return console.log(this.props.radios),n.a.createElement("div",{className:"wrapper_answer"},t)}}]),t}(n.a.Component)),w=[{q:"Feel restless or fidgety?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Any difficulty concentrating on what people are saying to you even when they are speaking to you directly?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Distracted by unrelated thoughts",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Do you leave your seat in meetings or other situations in which you are expected to remain seated?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Postpone boring or difficult tasks",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Any difficulty unwinding and relaxing when you have time to yourself?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Forgetful in daily activities? Maybe forget keys, agenda etc?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Avoid public gatherings, symposiums, lectures, church etc?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Feeling restless or agitated inside?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"When you\u2019re in a conversation, do you find yourself finishing the sentences of the people you are talking to before they can finish them themselves?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Having the feeling that you have to be doing something",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:" Lose a lot of time searching for things, or losing notes, lists or telephone numbers",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Happens to put things off until the last minute?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Fear of failure in terms of starting new things?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Relationship problems, lots of arguments, lack of intimacy?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Do you depend on others to keep your life in order and attend to details?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Difficulty in patiently waiting in a queue, or in the traffic/traffic jams, or jumping the queue?",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Easily distracted by unnecessary issues",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Repetitive restless actions, such as tapping with a pen, or playing with something, or fiddling with hair/biting nails, etc",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]},{q:"Difficulty initiating social contacts",a:[{answ:"Never",pts:0},{answ:"Rarely",pts:1},{answ:"Sometimes",pts:2},{answ:"Often",pts:3},{answ:"Very Often",pts:4}]}],m=[],d=function(e){function t(e){var s;return Object(r.a)(this,t),(s=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={step:0,q:0,finalText:"",qStatus:!1},s.forward=s.forward.bind(Object(u.a)(s)),s.backward=s.backward.bind(Object(u.a)(s)),s.end=s.end.bind(Object(u.a)(s)),s.toStart=s.toStart.bind(Object(u.a)(s)),s}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getPicked",value:function(e){var t=document.getElementsByName("questions");console.log(t);var s=0;t.forEach((function(t){console.log("answer is - ".concat(m[e]," and el.value is - ").concat(t.value)),t.value==m[e]&&(t.checked=!0,s++,console.log("Found"))})),0==s&&(this.uncheckAll(),console.log("uncheked"))}},{key:"uncheckAll",value:function(){document.getElementsByName("questions").forEach((function(e){e.checked=!1}))}},{key:"saveChecked",value:function(e,t){console.log("val="+e),void 0==e?m[this.state.step]=1e-6:m[t]=e}},{key:"forward",value:function(e){void 0==m[this.state.step]&&(m[this.state.step]=1e-6),this.setState((function(e){return{step:e.step+1}})),this.getPicked(this.state.step+1)}},{key:"backward",value:function(e){0!=this.state.qStatus?(this.setState({qStatus:!1,finalText:"",step:this.state.step}),this.getPicked(this.state.step)):(this.setState((function(e){return{step:e.step-1}})),this.getPicked(this.state.step-1))}},{key:"end",value:function(){this.setState({qStatus:!0}),void 0==m[this.state.step]&&(m[this.state.step]=1e-6);var e=0;m.forEach((function(t){e+=Number(t)}));var t=0;if(console.log(m),m.forEach((function(e){1e-6==e&&t++})),t>=10)this.setState((function(e){return{finalText:"You answered only ".concat(w.length-t," questions from ").concat(w.length," total. This reduces the potential value of the screening test. Suggested: please answer all the questions to improve the quality of the quiz. ")}}));else{console.log("sum="+e),console.log("obj.length="+w.length);var s=e/w.length;s<.7&&this.setState((function(e){return{finalText:"Your result is: unusual pattern, very low "}})),s>.7&&s<2.05&&this.setState((function(e){return{finalText:"Your result is: No"}})),s>2.05&&s<2.5&&this.setState((function(e){return{finalText:"Your result is: usual"}})),s>2.5&&s<3.05&&this.setState((function(e){return{finalText:"Your result is: usual +"}})),s>3.05&&s<3.9&&this.setState((function(e){return{finalText:"Your result is: very high"}})),s>=3.9&&this.setState((function(e){return{finalText:"Your result is: unusual pattern, very high"}}))}console.log(m)}},{key:"toStart",value:function(){m.length=0,this.setState({finalText:"",step:0,qStatus:!1})}},{key:"render",value:function(){var e,t,s,a;return e=this.state.step>0?n.a.createElement("button",{onClick:this.backward},"Prev"):"",t=this.state.step!=w.length-1?n.a.createElement("button",{onClick:this.forward},"Next"):n.a.createElement("button",{onClick:this.end},"Finish"),1==this.state.qStatus?(a=n.a.createElement("div",{className:"result"},n.a.createElement("p",null,this.state.finalText)),e=n.a.createElement("button",{onClick:this.toStart},"Restart"),s=n.a.createElement("div",{id:"quizBlock",className:"hidden"},n.a.createElement("div",{className:"wrapper_quest"},n.a.createElement("p",{className:"quest"},w[this.state.step].q)),n.a.createElement(f,{func:this.saveChecked,step:this.state.step,radios:w[this.state.step].a})),t=n.a.createElement("button",{onClick:this.backward},"Prev")):s=n.a.createElement("div",{id:"quizBlock",className:"show"},n.a.createElement("div",{className:"wrapper_quest"},n.a.createElement("p",{className:"quest"},this.state.step+1,". ",w[this.state.step].q)),n.a.createElement(f,{func:this.saveChecked,step:this.state.step,radios:w[this.state.step].a})),console.log(this.state.step),console.log("q="+this.state.q),n.a.createElement("div",{className:"wrapper_main"},n.a.createElement("div",{className:"header"},n.a.createElement("h3",null,"The following questions refer to how you have felt and what have happened to you over the past 6 months")),s,a,n.a.createElement("div",{className:"buttons"},e,t))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.21ccd037.chunk.js.map