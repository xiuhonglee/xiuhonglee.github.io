(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{289:function(t,e,i){},381:function(t,e,i){"use strict";var s=i(289);i.n(s).a},491:function(t,e,i){"use strict";i.r(e);var s={data:function(){return{canvas:null,ctx:null,width:500,height:300,selected:"no"}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.drawWithBeginPath()},methods:{drawWithBeginPath:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"no";this.ctx.moveTo(80,50),this.ctx.lineTo(50,120),this.ctx.lineTo(150,120),this.ctx.stroke(),"yes"===t&&this.ctx.beginPath(),this.ctx.moveTo(230,50),this.ctx.lineTo(200,120),this.ctx.lineTo(300,120),this.ctx.closePath(),this.ctx.stroke(),this.ctx.font="12px Arial",this.ctx.fillStyle="#000000",this.ctx.fillText("closePath:",50,160),this.ctx.fillText("closePath:",200,160),this.ctx.save(),this.ctx.fillStyle="#ff0000",this.ctx.fillText("no",120,160),this.ctx.fillText("yes",270,160)},handleChange:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.beginPath(),this.drawWithBeginPath(this.selected)}}},n=(i(381),i(0)),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",staticStyle:{}},[i("canvas",{ref:"canvas",attrs:{width:"500",height:"200"}}),i("div",{staticClass:"btn"},[i("span",{staticStyle:{"font-size":"12px"}},[t._v("beginPath:  ")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{name:"chooseBeginPath"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?i:i[0]},t.handleChange]}},[i("option",{attrs:{value:"yes"}},[t._v("yes")]),i("option",{attrs:{value:"no"}},[t._v("no")])])])])},[],!1,null,"031c198e",null);e.default=a.exports}}]);