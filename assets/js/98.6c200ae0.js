(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{293:function(t,i,n){},385:function(t,i,n){"use strict";var a=n(293);n.n(a).a},496:function(t,i,n){"use strict";n.r(i);var a={data:function(){return{canvas:null,ctx:null,width:500,height:300}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.drawImg(),this.drawCoordinate(this.ctx,"#aaa",25,25),this.drawCenterLines(this.ctx,"#ff0000"),this.drawAxis()},methods:{drawImg:function(){var t=this,i=new Image;i.src="https://i.loli.net/2018/12/14/5c137165c6324.png",i.onload=function(){t.ctx.drawImage(i,175,75,150,150)}},drawAxis:function(){this.ctx.font="12px serif",this.ctx.fillStyle="#000";for(var t=0;t<=this.width;t+=50)this.ctx.fillText(t,t,10);for(var i=0;i<=this.height;i+=50)this.ctx.fillText(i,0,i)},drawCenterLines:function(t,i){t.strokeStyle=i,t.lineWidth=1,t.beginPath(),t.moveTo(t.canvas.width/2+.5,0),t.lineTo(t.canvas.width/2+.5,t.canvas.height),t.stroke(),t.beginPath(),t.moveTo(0,t.canvas.height/2+.5),t.lineTo(t.canvas.width,t.canvas.height/2+.5),t.stroke()},drawCoordinate:function(t,i,n,a){t.strokeStyle=i,t.lineWidth=1;for(var e=n+.5;e<this.ctx.canvas.width;e+=n)t.beginPath(),t.moveTo(e,0),t.lineTo(e,this.ctx.canvas.height),t.stroke();for(var s=a+.5;s<this.ctx.canvas.height;s+=a)t.beginPath(),t.moveTo(0,s),t.lineTo(this.ctx.canvas.width,s),t.stroke()}}},e=(n(385),n(0)),s=Object(e.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas",attrs:{width:"500",height:"300"}})},[],!1,null,"105b1e6f",null);i.default=s.exports}}]);