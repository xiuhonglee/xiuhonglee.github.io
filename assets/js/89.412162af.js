(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{284:function(t,i,a){},376:function(t,i,a){"use strict";var e=a(284);a.n(e).a},485:function(t,i,a){"use strict";a.r(i);var e={data:function(){return{canvas:null,ctx:null,opacity:.7}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.setupCanvas(this.canvas),this.draw()},watch:{opacity:function(t){this.clearRect(),this.draw()}},methods:{setupCanvas:function(t){var i=window.devicePixelRatio||1,a=t.getBoundingClientRect();t.width=a.width*i,t.height=a.height*i;var e=t.getContext("2d");return e.scale(i,i),e},draw:function(){this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.fillStyle="#ff0000",this.ctx.fillRect(120,50,100,50),this.ctx.beginPath(),this.ctx.save(),this.ctx.fillStyle="rgba(255, 200, 0, ".concat(this.opacity,")"),this.ctx.fillRect(180,80,100,50),this.ctx.restore()},clearRect:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}},s=(a(376),a(0)),c=Object(s.a)(e,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"wrap",staticStyle:{}},[a("canvas",{ref:"canvas",attrs:{width:"500",height:"200"}}),a("div",{staticClass:"slidecontainer"},[a("span",[t._v("opacity: "+t._s(t.opacity))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.opacity,expression:"opacity"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"1",value:"0.7",step:"0.1",id:"myRange"},domProps:{value:t.opacity},on:{__r:function(i){t.opacity=i.target.value}}})])])},[],!1,null,"47225a75",null);i.default=c.exports}}]);