/*! path - v0.1 - 2012-09-21
* http://github.com/bseth99/pathjs
* Copyright (c) 2012 Ben Olson (http://bseth99.github.com/)
* Licensed under the MIT License. */
(function(a){function c(a){var b=[],c=0,d=a.length;for(;c<d;c++)b.push({x:a[c].x,y:a[c].y});return b}function d(a,b){var c,d,e=a.length;return typeof b=="string"?b.indexOf("%")>0?c=a[Math.floor(parseInt(b,10)/100*e)]:b=="start"?c=a[0]:b=="middle"?c=a[Math.floor(e/2)]:b=="end"&&(c=a[e-1]):c=a[b],c||(c=a[0]),c}function f(a,b,c,d,e){var e=e||5,f=0,g=Math.abs(c-a),h=a<c?1:-1,i=-Math.abs(d-b),j=b<d?1:-1,k=g+i,l,m=[];for(;;){f++%e==0&&m.push({x:a,y:b});if(a==c&&b==d)break;l=2*k,l>=i&&(k+=i,a+=h),l<=g&&(k+=g,b+=j)}return m}function g(a,b,c,d){var d=d||5,e=0,f=-c,g=0,h=2-2*c,i={q1:[],q2:[],q3:[],q4:[]};do{e++%d==0&&(i.q1.push({x:a-f,y:b+g}),i.q2.push({x:a-g,y:b-f}),i.q3.push({x:a+f,y:b-g}),i.q4.push({x:a+g,y:b+f})),c=h,c<=g&&(h+=++g*2+1);if(c>f||h>g)h+=++f*2+1}while(f<0);return[].concat(i.q1,i.q2,i.q3,i.q4)}function h(a,b,c,d,e){var e=e||5,f=0,g=Math.abs(c-a),h=Math.abs(d-b),i=h&1,j=4*(1-g)*h*h,k=4*(i+1)*g*g,l=j+k+i*g*g,m,n={q1:[],q2:[],q3:[],q4:[]};a>c&&(a=c,c+=g),b>d&&(b=d),b+=(h+1)/2,d=b-i,g*=8*g,i=8*h*h;do{f++%e==0&&(n.q1.push({x:c,y:b}),n.q2.push({x:a,y:b}),n.q3.push({x:a,y:d}),n.q4.push({x:c,y:d})),m=2*l,m<=k&&(b++,d--,l+=k+=g);if(m>=j||2*l>k)a++,c--,l+=j+=i}while(a<=c);while(b-d<h)f++%e==0&&(n.q1.push({x:c+1,y:b++}),n.q2.push({x:a-1,y:b}),n.q3.push({x:a-1,y:d}),n.q4.push({x:c+1,y:d--}));return[].concat(n.q1,n.q2.reverse(),n.q3,n.q4.reverse())}function i(a,b,c){var d=a.x-b.x,e=a.y-b.y,f=b.x-c.x,g=b.y-c.y,h=Math.sqrt(d*d+e*e),i=Math.sqrt(f*f+g*g),j={x:(a.x+b.x)/2,y:(a.y+b.y)/2},k={x:(b.x+c.x)/2,y:(b.y+c.y)/2},l=j.x-k.x,m=j.y-k.y,n=i/(h+i),o={x:k.x+l*n,y:k.y+m*n},p=b.x-o.x,q=b.y-o.y,r={x:j.x+p,y:j.y+q},s={x:k.x+p,y:k.y+q};return{c1:r,c2:s,l1:Math.floor(h),l2:Math.floor(i)}}function j(a,b,c,d,e){var e=e||5,f=i(a,b,c),g=i(b,c,d),h=Math.floor(((f.l1||f.l2)+(g.l2||g.l1))/e),j=b,k=f.c2,l=g.c1,m=c,n=k.x-j.x,o=k.y-j.y,p=l.x-k.x,q=l.y-k.y,r=m.x-l.x,s=m.y-l.y,t=1/(h+1),u=t*t,v=u*t,w=3*t,x=3*u,y=6*u,z=6*v,A=j.x-k.x*2+l.x,B=j.y-k.y*2+l.y,C=(k.x-l.x)*3-j.x+m.x,D=(k.y-l.y)*3-j.y+m.y,E=j,F=(k.x-j.x)*w+A*x+C*v,G=(k.y-j.y)*w+B*x+D*v,H=A*y+C*z,I=B*y+D*z,J=C*z,K=D*z,L=[];while(h--)E={x:E.x+F,y:E.y+G},F+=H,G+=I,H+=J,I+=K,L.push(E);return L.push({x:m.x,y:m.y}),L}var b=Math.PI/180,e=function(a){arguments.length&&(this.points=[].concat(a))};e.prototype={points:[],current:0,box:null,append:function(a,b){var b=b||!1,a=a&&a.points?a:new e(a),d,f;return b&&(d=this.last(),f=a.first(),a.move(d.x-f.x,d.y-f.y)),this.points=this.points.concat(c(a.points)),this.box=null,this},appendTo:function(a,b){return a.append.call(a,this,b),this},prepend:function(a,b){var b=b||!1,a=a&&a.points?a:new e(a),d,f;return b&&(d=this.first(),f=a.last(),a.move(d.x-f.x,d.y-f.y)),this.points=a.points.concat(c(this.points)),this.box=null,this},prependTo:function(a,b){return a.prepend.call(a,this,b),this},reverse:function(){return this.points.reverse(),this},move:function(a,b){var c=this.points.length,d=0;for(;d<c;d++)this.points[d].x+=a,this.points[d].y+=b;return this.box=null,this},scale:function(a,b,c){},skew:function(a,b,c){},rotate:function(a,c){var e=this.points.length,f=0,g,c=(c&&c.x?c:d(this.points,c))||{x:0,y:0},h=[[Math.cos(a*b),-Math.sin(a*b)],[Math.sin(a*b),Math.cos(a*b)]];for(;f<e;f++)g={x:this.points[f].x-c.x,y:this.points[f].y-c.y},this.points[f].x=c.x+g.x*h[0][0]+g.y*h[0][1],this.points[f].y=c.y+g.x*h[1][0]+g.y*h[1][1];return this.box=null,this},wrap:function(a){var b=this.points.length,c=this.width(),d=a.center(),e=a.first(),f=this.first(),f={x:f.x,y:f.y},g,h,i,j,k,l,m,n,o=0;for(;o<b;o++)i=this.points[o].x-f.x,j=this.points[o].y-f.y,m=a.step(i/c),l=m.x-d.x,k=m.y-d.y,n=Math.sqrt(l*l+k*k),g=l*j/n,h=k*j/n,this.points[o].x=g+m.x,this.points[o].y=h+m.y;return this.box=null,this},getBoundingBox:function(){var a=this.points.length,b=0;if(!this.box){this.box={x1:999999,y1:999999,x2:-999999,y2:-999999};for(;b<a;b++)this.box.x1=Math.min(this.box.x1,this.points[b].x),this.box.y1=Math.min(this.box.y1,this.points[b].y),this.box.x2=Math.max(this.box.x2,this.points[b].x),this.box.y2=Math.max(this.box.y2,this.points[b].y)}return this.box},height:function(){return this.getBoundingBox(),this.box.y2-this.box.y1},width:function(){return this.getBoundingBox(),this.box.x2-this.box.x1},top:function(){return this.getBoundingBox(),this.box.y1},left:function(){return this.getBoundingBox(),this.box.x1},center:function(){return this.getBoundingBox(),{x:(this.box.x1+this.box.x2)/2,y:(this.box.y1+this.box.y2)/2}},bottom:function(){return this.getBoundingBox(),this.box.y2},right:function(){return this.getBoundingBox(),this.box.x2},duplicate:function(){return new e(c(this.points))},first:function(){return this.current=0,this.points[0]},last:function(){return this.current=this.points.length-1,this.points[this.current]},next:function(){return this.current<this.points.length-1?this.points[++this.current]:null},prev:function(){return this.current>0?this.points[--this.current]:null},each:function(a){var b=0,c=this.points.length;for(;b<c;b++)a(b,this.points[b]);return this},closest:function(){},step:function(a){var b=a>1?a-Math.floor(a):a,c=b<0?1-b:b,d=Math.floor((this.points.length-1)*c);return this.points[d]}},PATH=function(a){var b=new e,c,d=0,f=a.length,g;for(;d<f;d++){g=a[d];if(PATH.generator[g.fn])g.start=c||{},c=b.append(PATH.generator[g.fn].call(this,g)).last();else throw"Path generator "+func+" does not exist"}return b},PATH.generator={start:function(a){return{x:a.x,y:a.y}},line:function(a){var b=a.start.x||0,c=a.start.y||0,d=a.x,e=a.y,g=f(b,c,d,e,a.density||3);return g},rectangle:function(a){var b=a.density||5,c=a.start.x||0,d=a.start.y||0,e=a.w,f=a.h,g=a.cornerRadius||0,h=PATH([{fn:"start",x:c,y:d}]),i,j,k,l,m;g.length||(g=[g,g,g,g]),i=g.map(function(a,b){return PATH([{fn:"circle",radius:a,arc:{start:0,end:90},density:1}]).rotate((b-2)*90)}),j=g.map(function(a,b){return b%2==0?PATH([{fn:"line",x:e-g[b]-g[(b+1)%4],y:0,density:1}]):PATH([{fn:"line",x:0,y:f-g[b]-g[(b+1)%4],density:1}])}),h.append(i[0],!0).append(j[0],!0).append(i[1],!0).append(j[1],!0).append(i[2],!0).append(j[2].reverse(),!0).append(i[3],!0).append(j[3].reverse(),!0),l=[],m=h.points.length;for(k=0;k<m;k++)(k%b==0||k==m-1)&&l.push(h.points[k]);return l},circle:function(a){var b=a.start.x||0,c=a.start.y||0,d=a.radius,e=h(b-d*2,c-d,b,c+d,a.density||3),f=0,g=e.length,i;return a.arc&&(f=Math.round(a.arc.start/360*g),g=Math.round(a.arc.end/360*g),e=e.slice(f,g),i={dx:b-e[0].x,dy:c-e[0].y},e=e.map(function(a){return{x:a.x+i.dx,y:a.y+i.dy}})),e},ellipse:function(a){var b=a.start.x||0,c=a.start.y||0,d=a.a,e=a.b,f=h(b-d*2,c-e,b,c+e,a.density||3),g=0,i=f.length,j;return a.arc&&(g=Math.floor(a.arc.start/360*i),i=Math.ceil(a.arc.end/360*i),f=f.slice(g,i),j={dx:b-f[0].x,dy:c-f[0].y},f=f.map(function(a){return{x:a.x+j.dx,y:a.y+j.dy}})),f},wave:function(a){var b=a.start.x||0,c=a.start.y||0,d=a.density||5,e=a.interpolate||!0,g=a.smooth||!1,h=1,i=a.length,j=a.frequency/2,k=a.amplitude,l=b+j/2,m={x:b,y:c},n=[],o;(!e||!!g)&&n.push({x:b,y:c});while(l<b+i)o={x:Math.round(l),y:Math.round(c+k*h)},e&&!g?n=n.concat(f(m.x,m.y,o.x,o.y,d)):n.push(o),h*=-1,l+=j,m=o;return e&&!g?n=n.concat(f(m.x,m.y,Math.round(l-j/2),c,d)):n.push({x:l-j/2,y:c}),g&&(n=PATH.generator.bezier({start:n[0],points:n.slice(1,n.length),density:d})),n},bezier:function(a){var b=[{x:a.start.x||0,y:a.start.y||0}].concat(a.points),c=a.density||5,d=1,e=b.length,f=[];b.unshift(b[1]),b.push(b[e-1]);while(d<e)f=f.concat(j.apply(this,b.slice(d-1,d+3),c)),d++;return f}},PATH.adapter={animateNode:function(a){return function(b,c){var d=a.step(c.pos);c.elem.style.top=d.y+"px",c.elem.style.left=d.x+"px"}},animatePlot:function(a){return function(b,c){var d=a.step(c.pos),e=d.x,f=d.y,g;g=c.elem.getContext("2d"),g.fillStyle="black",g.strokeStyle="black",g.lineWidth=1,g.beginPath(),g.moveTo(e,f),g.arc(e,f,1,0,2*Math.PI,!0),g.fill(),g.stroke()}},drawCanvas:function(a,b,c){var d=a.getContext("2d"),e=b.first(),c=c||{},f=c.fillStyle||"none";d.fillStyle=f,d.strokeStyle=c.strokeStyle||"black",d.lineWidth=c.lineWidth||1,d.beginPath(),d.moveTo(e.x,e.y);while(e=b.next())d.lineTo(e.x,e.y);f!="none"&&(d.closePath(),d.fill()),d.stroke()},drawSVG:function(a,b,c){var d=b.first(),c=c||{},e="",f,g;c.fill=c.fillStyle||"none",c.stroke=c.strokeStyle||"black",c.lineWidth=c.lineWidth||"1";do e+=Math.round(d.x)+","+Math.round(d.y)+" ";while(d=b.next());g=document.createElementNS("http://www.w3.org/2000/svg","polygon"),g.setAttribute("points",e);for(f in c)g.style[f]=c[f];return a.appendChild(g),g}},PATH.version="0.1"})();