import{r as p,j as n}from"./index-ee043deb.js";function y(){for(var e=0,l=0;e===0;)e=Math.random();for(;l===0;)l=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*l)}function T(e,l,t){const i=e.getContext("2d");if(!i)return;i.lineWidth=1,i.beginPath();for(let d=l;d<=t;d+=5)i.moveTo(18+(e.width-30)/(t-l)*(d-l),e.height-12),i.lineTo(18+(e.width-30)/(t-l)*(d-l),e.height-8);i.stroke(),i.closePath();const o=5;i.font="10px Arial",i.textAlign="center",i.textBaseline="top";for(let d=l;d<=t;d+=o)i.fillText(d.toString(),18+(e.width-30)/(t-l)*(d-l),e.height-8)}function P(e,l){const t=e.getContext("2d");if(!t)return;const i=25,o=85,d=l.sort((u,h)=>u-h),g=d[Math.floor(l.length/4)],x=d[Math.floor(l.length/2)],s=d[Math.floor(l.length*3/4)];t.strokeStyle="blue",t.beginPath(),t.moveTo(18+(e.width-30)/(o-i)*(x-i),3),t.lineTo(18+(e.width-30)/(o-i)*(x-i),28),t.stroke(),t.closePath(),t.strokeStyle="red",t.beginPath(),t.moveTo(18+(e.width-30)/(o-i)*(g-i),3),t.lineTo(18+(e.width-30)/(o-i)*(s-i),3),t.lineTo(18+(e.width-30)/(o-i)*(s-i),28),t.lineTo(18+(e.width-30)/(o-i)*(g-i),28),t.lineTo(18+(e.width-30)/(o-i)*(g-i),3),t.stroke(),t.closePath()}function b(e,l){if(e){e.width=321,e.height=145;const t=e.getContext("2d");if(t){t.imageSmoothingEnabled=!1,t.clearRect(0,0,e.width,e.height),t.fillStyle="black",t.lineWidth=1,t.beginPath(),t.moveTo(18,32),t.lineTo(18,e.height-12),t.lineTo(e.width-12,e.height-12),t.stroke(),t.closePath(),t.lineWidth=1,t.beginPath();for(let h=0;h<=10;h++)t.moveTo(18,32+(e.height-58)/10*h),t.lineTo(12,32+(e.height-58)/10*h);t.stroke(),t.closePath(),t.font="10px Arial",t.textAlign="right",t.textBaseline="middle";for(let h=0;h<=10;h++)h%5==0&&t.fillText((10-h).toString(),10,32+(e.height-58)/10*h);const i=25,o=85,d=5;t.lineWidth=1,t.beginPath();for(let h=i;h<=o;h+=d)t.moveTo(18+(e.width-30)/(o-i)*(h-i),e.height-12),t.lineTo(18+(e.width-30)/(o-i)*(h-i),e.height-8);t.stroke(),t.closePath(),t.font="10px Arial",t.textAlign="center",t.textBaseline="top";for(let h=i;h<=o;h+=d)t.fillText(h.toString(),18+(e.width-30)/(o-i)*(h-i),e.height-8);t.fillStyle="black";for(let h=0;h<l.length;h++)t.beginPath(),t.moveTo(18+(e.width-30)/(o-i)*(l[h]-i),e.height-12),t.lineTo(18+(e.width-30)/(o-i)*(l[h]-i),e.height-18),t.stroke(),t.closePath();const g=l.sort((h,w)=>h-w),x=g[Math.floor(l.length/4)],s=g[Math.floor(l.length/2)],u=g[Math.floor(l.length*3/4)];t.lineWidth=1,t.beginPath(),t.moveTo(18+(e.width-30)/(o-i)*(x-i),e.height-16-(e.height-58)/10*4),t.lineTo(18+(e.width-30)/(o-i)*(u-i),e.height-16-(e.height-58)/10*4),t.lineTo(18+(e.width-30)/(o-i)*(u-i),e.height-16-(e.height-58)/10*7),t.lineTo(18+(e.width-30)/(o-i)*(x-i),e.height-16-(e.height-58)/10*7),t.lineTo(18+(e.width-30)/(o-i)*(x-i),e.height-16-(e.height-58)/10*4),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(18+(e.width-30)/(o-i)*(s-i),e.height-16-(e.height-58)/10*4),t.lineTo(18+(e.width-30)/(o-i)*(s-i),e.height-16-(e.height-58)/10*7),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(18+(e.width-30)/(o-i)*(x-i),e.height-16-(e.height-58)/10*5.5),t.lineTo(18+(e.width-30)/(o-i)*(g[0]-i),e.height-16-(e.height-58)/10*5.5),t.moveTo(18+(e.width-30)/(o-i)*(u-i),e.height-16-(e.height-58)/10*5.5),t.lineTo(18+(e.width-30)/(o-i)*(g[l.length-1]-i),e.height-16-(e.height-58)/10*5.5),t.stroke(),t.closePath()}}}function k(e=30,l=50,t=7){let i=[];for(let o=0;o<e;o++)i.push(y()*t+l);return i}function M(){const[e,l]=p.useState(30),t=p.useRef(null),i=p.useRef(null),o=p.useRef(null),[d,g]=p.useState([]),[x,s]=p.useState(0),[u,h]=p.useState(7);p.useEffect(()=>{if(t.current){const r=t.current;r.width=321,r.height=48,T(r,25,85)}if(o.current){const r=[];r.push(-2*7+50),r.push(-.675*7+50),r.push(0*7+50),r.push(.675*7+50),r.push(2*7+50),b(o.current,r)}},[]);function w(){if(!t.current)return;const r=k(e,50,u),f=document.createElement("div");f.style.display="block",f.style.border="1px solid black",f.style.height="32px",f.style.width="321px",f.style.margin="-1px",P(t.current,r),g([...d,r.reduce((m,c)=>m+c,0)/r.length]),i.current&&b(i.current,d)}return n.jsxs("div",{className:"Phase2",children:[n.jsx("h3",{children:"컴퓨터 표집 시뮬레이션2"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"fit-content",margin:"0 auto"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"fit-content",margin:"0 auto",border:"1px solid black"},children:[n.jsx("button",{className:"simulateBtn",onClick:()=>w(),children:"Simulate"}),n.jsxs("div",{style:{margin:"4px"},children:["n: ",n.jsx("input",{type:"number",value:e,onChange:r=>l(parseInt(r.target.value)),style:{width:"5em"}})]}),n.jsxs("div",{style:{margin:"4px"},children:["σ: ",n.jsx("input",{type:"number",value:u,onChange:r=>h(parseInt(r.target.value)),style:{width:"5em"}})]}),n.jsx("div",{style:{borderBottom:"1px solid gray",borderTop:"1px solid gray",width:"321px",backgroundColor:"white"},children:"표본 중앙값 변동 띠"}),n.jsx("div",{style:{display:"block",border:"1px solid black",height:"48px",width:"321px",margin:"-1px"},children:n.jsx("canvas",{id:"current_histogram",width:"321",height:"48",style:{margin:"-2px"},ref:t})})]}),n.jsxs("div",{style:{display:"block",border:"1px solid black",height:"20vh",width:"321px"},children:[n.jsx("div",{style:{borderBottom:"1px solid gray",position:"fixed",width:"321px",backgroundColor:"white"},children:"표본 중앙값 상자 그림"}),n.jsx("canvas",{id:"histogram",width:"321",height:"145",style:{margin:"-2px"},ref:i})]}),n.jsxs("div",{style:{display:"block",border:"1px solid black",height:"20vh",width:"321px"},children:[n.jsx("div",{style:{borderBottom:"1px solid gray",position:"fixed",width:"321px",backgroundColor:"white"},children:"모집단 상자 그림"}),n.jsx("canvas",{id:"histogram",width:"321",height:"145",style:{margin:"-2px"},ref:o})]}),n.jsxs("div",{style:{borderLeft:"1px solid gray",borderRight:"1px solid gray",borderBottom:"1px solid lightgray",width:"321px",backgroundColor:"white",userSelect:"none"},onTouchMove:r=>s(r.touches[0].clientX),onMouseMove:r=>s(r.clientX),onTouchEnd:()=>s(0),onMouseLeave:()=>s(0),children:["비교",n.jsx("div",{style:{position:"absolute",backgroundColor:"green",width:"1px",height:"368px",top:"216px",left:x+"px"}})]})]})]})}export{M as default};
