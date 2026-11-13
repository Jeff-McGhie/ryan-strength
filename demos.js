/* Original vector movement guides. No downloaded video, trackers, or external assets. */
(function(root){'use strict';
// Points: head, shoulder, hip, near elbow/hand/knee/foot, far elbow/hand/knee/foot.
const pose=(head,shoulder,hip,elbow,hand,knee,foot,farElbow=elbow,farHand=hand,farKnee=knee,farFoot=foot)=>[head,shoulder,hip,elbow,hand,knee,foot,farElbow,farHand,farKnee,farFoot];
const stand=pose([173,32],[175,58],[175,118],[168,85],[165,112],[174,148],[174,180],[186,85],[190,112],[185,148],[187,180]);
const allFours=pose([99,96],[123,112],[218,112],[124,145],[125,180],[220,175],[270,180],[135,145],[136,180],[231,175],[280,180]);
const birdA=pose([99,96],[123,112],[218,112],[84,109],[45,106],[220,175],[270,180],[135,145],[136,180],[265,112],[313,112]);
const birdB=pose([99,96],[123,112],[218,112],[124,145],[125,180],[265,112],[313,112],[84,109],[45,106],[231,175],[280,180]);
const bug=pose([72,165],[102,164],[190,164],[103,123],[104,84],[190,112],[245,112],[114,123],[115,84],[201,112],[256,112]);
const bugA=pose([72,165],[102,164],[190,164],[72,146],[36,133],[190,112],[245,112],[114,123],[115,84],[240,160],[292,166]);
const bugB=pose([72,165],[102,164],[190,164],[103,123],[104,84],[240,160],[292,166],[72,146],[36,133],[201,112],[256,112]);
const kneePlank=pose([87,104],[115,120],[202,145],[115,180],[73,180],[245,180],[293,165],[126,180],[84,180],[251,180],[299,165]);
const plank=pose([87,104],[115,120],[202,149],[115,180],[73,180],[245,165],[291,180],[126,180],[84,180],[251,165],[300,180]);
const sideLow=pose([97,102],[121,120],[216,173],[111,180],[72,195],[285,178],[310,123],[180,65],[228,141],[295,168],[320,113]);
const sideHigh=pose([97,102],[121,120],[216,154],[111,180],[72,195],[285,178],[310,123],[180,65],[228,122],[295,168],[320,113]);
const frames=(a,b,cues)=>[[0,a,cues[0]],[.18,b,cues[1]],[.42,b,cues[1]],[.6,a,cues[2]],[1,a,cues[0]]];
const alternate=(a,b,c)=>[[0,a,'Set up with control'],[.2,b,'Opposite arm + leg'],[.35,b,'Stay steady; breathe'],[.5,a,'Return with control'],[.7,c,'Switch arm + leg'],[.85,c,'Stay steady; breathe'],[1,a,'Return with control']];
const guides={
 incline:{title:'Incline push-up',view:'Side view · stable counter',seconds:7,prop:'counter',cues:['Use a fixed counter that cannot slide or tip.','Keep head, hips, and heels in one line.','Bend elbows, bring chest toward the counter, then press away.'],frames:frames(pose([132,58],[150,78],[211,123],[125,94],[100,111],[246,151],[280,180],[132,98],[107,111],[253,151],[288,180]),pose([113,95],[135,112],[202,144],[150,131],[100,111],[242,162],[280,180],[157,131],[107,111],[249,162],[288,180]),['Start in a straight line','Lower chest gently','Press away with control'])},
 floor:{title:'Floor push-up',view:'Side view',seconds:7,cues:['Hands just wider than shoulders.','Keep your body in one straight line.','Lower only as far as comfortable; use an incline if form slips.'],frames:frames(pose([79,106],[105,121],[195,149],[105,151],[105,180],[242,165],[289,180],[116,151],[116,180],[249,165],[297,180]),pose([80,151],[105,157],[195,168],[138,174],[105,180],[242,174],[289,180],[149,174],[116,180],[249,174],[297,180]),['Straight body','Lower gently','Press up slowly'])},
 bird:{title:'Bird dog',view:'Side view · teal shows the far side',seconds:10,cues:['Hands under shoulders; knees under hips.','Reach one arm and the opposite leg, only to body height.','Keep hips level. Return, then switch sides.'],frames:alternate(allFours,birdA,birdB)},
 squat:{title:'Easy bodyweight squat',view:'Side view',seconds:7,cues:['Feet about shoulder-width apart; heels stay down.','Sit your hips back into a comfortable shallow squat.','Let knees follow your toes. Stand tall without rushing.'],frames:frames(pose([173,32],[175,58],[175,118],[150,65],[125,72],[174,148],[174,180],[157,69],[132,76],[185,148],[187,180]),pose([146,72],[156,97],[142,139],[129,98],[103,99],[193,142],[174,180],[136,102],[110,103],[204,142],[187,180]),['Stand tall','Sit back comfortably','Stand with control'])},
 plank:{title:'Forearm plank',view:'Side view · setup, hold, release',seconds:10,hold:true,cues:['Elbows under shoulders; hands extend toward your head. Begin with knees down.','Lift knees to make a straight line from head to heels.','Hold steady and breathe. Lower knees if your back sags.'],frames:[[0,kneePlank,'Begin with knees down'],[.2,plank,'Hold steady · keep breathing'],[.75,plank,'Hold steady · keep breathing'],[.9,kneePlank,'Lower knees gently'],[1,kneePlank,'Begin with knees down']]},
 bug:{title:'Dead bug',view:'Side view · teal shows the far side',seconds:10,cues:['Lie on your back, arms up, hips and knees bent.','Reach one arm back and the opposite heel away.','Keep your back comfortable and steady. Shorten the reach if it arches.'],frames:alternate(bug,bugA,bugB)},
 balance:{title:'Single-leg balance',view:'Side view · fingertip support',seconds:12,hold:true,prop:'support',cues:['Stand beside a fixed counter, with fingertips nearby.','Lift one foot a little; keep the standing knee soft.','Stay tall and breathe. Set down gently and change legs when prompted.'],frames:[[0,stand,'Stand near support'],[.16,pose([173,32],[175,58],[175,118],[143,75],[112,90],[174,148],[174,180],[186,85],[190,112],[208,143],[205,164]),'Lift one foot slightly'],[.43,pose([173,32],[175,58],[175,118],[143,75],[112,90],[174,148],[174,180],[186,85],[190,112],[208,143],[205,164]),'Hold steady · use support'],[.5,stand,'Set down gently'],[.66,pose([173,32],[175,58],[175,118],[143,75],[112,90],[205,143],[202,164],[186,85],[190,112],[185,148],[187,180]),'Example on the other leg'],[.93,pose([173,32],[175,58],[175,118],[143,75],[112,90],[205,143],[202,164],[186,85],[190,112],[185,148],[187,180]),'Hold steady · use support'],[1,stand,'Set down gently']]},
 side:{title:'Side plank from knees',view:'Front angle · bottom forearm + stacked knees',seconds:10,hold:true,cues:['Stack your bent knees; both shins angle behind you.','Place the bottom elbow under your shoulder; rest the free hand on your hip.','Lift hips once and hold a straight shoulder-to-knee line. Breathe, then lower gently.'],frames:[[0,sideLow,'Elbow under shoulder'],[.2,sideHigh,'Lift hips · knees stay down'],[.75,sideHigh,'Hold steady · keep breathing'],[.95,sideLow,'Lower gently'],[1,sideLow,'Elbow under shoulder']]},
 lunge:{title:'Reverse lunge',view:'Side view · short comfortable step',seconds:10,cues:['Stand tall; use a fixed support beside you if needed.','Step one foot back and bend both knees comfortably.','Press through the front foot to return. Alternate legs.'],frames:[[0,stand,'Stand tall'],[.2,pose([173,62],[175,88],[175,138],[168,115],[165,140],[214,143],[219,180],[186,115],[190,140],[135,171],[101,180]),'Step back · bend gently'],[.35,pose([173,62],[175,88],[175,138],[168,115],[165,140],[214,143],[219,180],[186,115],[190,140],[135,171],[101,180]),'Front heel stays down'],[.5,stand,'Return to standing'],[.7,pose([173,62],[175,88],[175,138],[168,115],[165,140],[135,171],[101,180],[186,115],[190,140],[214,143],[219,180]),'Repeat with the other leg'],[.85,pose([173,62],[175,88],[175,138],[168,115],[165,140],[135,171],[101,180],[186,115],[190,140],[214,143],[219,180]),'Use a comfortable depth'],[1,stand,'Return to standing']]}
};
// Explicit orientation accompanies the drawing so a silhouette is never the only cue.
const orientations={
 incline:{orientation:'FACE TOWARD COUNTER',setup:'Chest faces the counter. Your back faces the ceiling.',face:[-.7,.72]},
 floor:{orientation:'FACE DOWN',setup:'Chest and face point toward the floor. Your back faces the ceiling.',face:[-.25,.97]},
 bird:{orientation:'FACE DOWN · ON HANDS AND KNEES',setup:'Look down between your hands. Your back faces the ceiling.',face:[-.35,.94]},
 squat:{orientation:'STANDING · LOOK FORWARD',setup:'Stand upright. The drawing shows you from the side.',face:[-1,0]},
 plank:{orientation:'FACE DOWN · NOT ON YOUR BACK',setup:'Lie on your tummy first. Put forearms on the mat, elbows below shoulders. Lift tummy and knees; support yourself on forearms and toes. Look down.',face:[-.25,.97]},
 bug:{orientation:'FACE UP · ON YOUR BACK',setup:'Your back rests on the mat. Face and chest point toward the ceiling.',face:[0,-1]},
 balance:{orientation:'STANDING · LOOK FORWARD',setup:'Stand upright beside a fixed support. Look straight ahead.',face:[-1,0]},
 side:{orientation:'ON YOUR SIDE · KNEES BENT AND STACKED',setup:'Face and chest point toward you in this front-angle drawing. Only the bottom forearm and the sides of your bent legs support you. The free hand rests on your hip.',face:[0,0]},
 lunge:{orientation:'STANDING · LOOK FORWARD',setup:'Stand upright. The drawing shows a side view of your steps.',face:[-1,0]}
};
for(const [id,details] of Object.entries(orientations))Object.assign(guides[id],details);
guides.sit={title:'Three-quarter sit-up',view:'Parent-guided setup',textOnly:true,cues:['Lie on your back with knees bent and feet flat.','Curl partway toward sitting without pulling your head.','Lower slowly; stop for discomfort.']};
const names={'incline push-ups':'incline','incline or floor push-ups':'incline','floor push-ups':'floor','bird dogs':'bird','bird dog':'bird','bodyweight squats':'squat','easy squats':'squat','forearm plank':'plank','dead bugs':'bug','dead bug':'bug','single-leg balance':'balance','side plank from knees':'side','reverse lunges':'lunge','sit-ups (three-quarter)':'sit','three-quarter sit-ups':'sit'};
function find(exercise){return guides[names[String(exercise.name).trim().toLowerCase()]]||null}
function sample(guide,progress){const t=Math.max(0,Math.min(1,progress));let i=0;while(i<guide.frames.length-2&&t>=guide.frames[i+1][0])i++;const a=guide.frames[i],b=guide.frames[i+1],u=(t-a[0])/(b[0]-a[0]),ease=u*u*(3-2*u);return {points:a[1].map((p,j)=>p.map((v,k)=>v+(b[1][j][k]-v)*ease)),caption:a[2]}}
function mount(container,exercise){const guide=find(exercise);container.replaceChildren();if(!guide)return null;if(guide.textOnly){const p=document.createElement('p');p.className='demo-setup';p.textContent='Three-quarter sit-up: '+guide.cues.join(' ')+' Ask your parent to demonstrate this movement if the online animation is unavailable.';container.append(p);return {guide,play(){},pause(){},replay(){},isPlaying:()=>false,destroy:()=>container.replaceChildren()}}const NS='http://www.w3.org/2000/svg';
 function el(tag,attrs,parent){const node=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,v));parent.append(node);return node}
 const orientation=document.createElement('p');orientation.className='demo-orientation';orientation.textContent=guide.orientation;container.append(orientation);
 const setup=document.createElement('p');setup.className='demo-setup';setup.textContent=guide.setup;container.append(setup);
 const svg=el('svg',{viewBox:'0 0 360 240',role:'img','aria-label':guide.title+'. '+guide.orientation+'. '+guide.setup+' '+guide.cues.join(' ')},container);
 const title=el('title',{},svg);title.textContent=guide.title+' — animated form guide';
 el('rect',{x:0,y:0,width:360,height:240,rx:16,fill:'#f0f7f5'},svg);if(guide===guides.side){el('polygon',{points:'24,192 328,116 352,160 48,236',fill:'#b8d8c7',stroke:'#739d88','stroke-width':1.5},svg)}else el('rect',{x:24,y:185,width:312,height:12,rx:6,fill:'#8bb7a6'},svg);
 const floorText=el('text',{x:330,y:227,'text-anchor':'end',fill:'#37594e','font-size':12,'font-weight':700},svg);floorText.textContent='MAT / FLOOR';
 if(guide.prop==='counter')el('path',{d:'M25 112 H108 M35 112 V185 M95 112 V185',stroke:'#80959d','stroke-width':7,fill:'none','stroke-linecap':'round'},svg);
 if(guide.prop==='support')el('path',{d:'M62 92 H115 M72 92 V185 M105 92 V185',stroke:'#80959d','stroke-width':6,fill:'none','stroke-linecap':'round'},svg);
 const farArm=el('polyline',{'stroke':'#32897e','stroke-width':9,fill:'none','stroke-linejoin':'round','stroke-linecap':'round'},svg),farLeg=el('polyline',{'stroke':'#32897e','stroke-width':11,fill:'none','stroke-linejoin':'round','stroke-linecap':'round'},svg);
 const trunk=el('line',{stroke:'#214663','stroke-width':19,'stroke-linecap':'round'},svg),neck=el('line',{stroke:'#214663','stroke-width':8,'stroke-linecap':'round'},svg);
 let sideShirt=null,sideShorts=null;
 if(guide===guides.side){
  trunk.setAttribute('visibility','hidden');farArm.setAttribute('stroke','#be8969');farArm.setAttribute('stroke-width',12);farLeg.setAttribute('stroke','#be8969');farLeg.setAttribute('stroke-width',14);
  sideShirt=el('polygon',{fill:'#52799b',stroke:'#214663','stroke-width':1.5,'stroke-linejoin':'round'},svg);
  sideShorts=el('polygon',{fill:'#263d56',stroke:'#163852','stroke-width':1.5,'stroke-linejoin':'round'},svg);
 }
 const arm=el('polyline',{'stroke':'#163852','stroke-width':9,fill:'none','stroke-linejoin':'round','stroke-linecap':'round'},svg),leg=el('polyline',{'stroke':'#163852','stroke-width':11,fill:'none','stroke-linejoin':'round','stroke-linecap':'round'},svg),head=el('circle',{r:13,fill:'#e3b68f',stroke:'#214663','stroke-width':2},svg);
 if(guide===guides.side){arm.setAttribute('stroke','#e3b68f');arm.setAttribute('stroke-width',12);leg.setAttribute('stroke','#e3b68f');leg.setAttribute('stroke-width',14)}
 const nose=el('path',{fill:'#e3b68f',stroke:'#214663','stroke-width':1.5},svg),eye=el('circle',{r:2,fill:'#10243a'},svg),secondEye=el('circle',{r:2,fill:'#10243a'},svg),hair=el('path',{stroke:'#654d3f','stroke-width':4,fill:'none','stroke-linecap':'round'},svg);
 const mouth=el('path',{stroke:'#654d3f','stroke-width':1.5,fill:'none','stroke-linecap':'round'},svg);
 const chest=el('circle',{r:4,fill:'#83d0b1'},svg);
 let contactLabels=[];
 if(guide===guides.side){
 for(const [label,x,y,tx,ty] of [['BOTTOM FOREARM',77,216,90,188],['STACKED KNEES',280,215,285,180],['BENT SHINS',296,90,310,129]]){
  el('path',{d:'M'+x+' '+(y-8)+' L'+tx+' '+ty,stroke:'#325b4f','stroke-width':1.2},svg);const t=el('text',{x,y,'text-anchor':'middle',fill:'#1c5140','font-size':10,'font-weight':800},svg);t.textContent=label;
 }
 }
 if(guide===guides.plank){
  for(const [label,x,anchorX] of [['FOREARMS',95,95],['TOES',300,296]]){
   const leader=el('path',{d:'M'+anchorX+' 190 V201',stroke:'#325b4f','stroke-width':1.5},svg);
   const t=el('text',{x,y:214,'text-anchor':'middle',fill:'#1c5140','font-size':11,'font-weight':800},svg);t.textContent=label;contactLabels.push({text:t,leader});
  }
 }
 const text=document.createElement('p');text.className='demo-caption';container.append(text);let raf=null,elapsed=0,last=null,running=false;
 function draw(){const f=sample(guide,(elapsed/1000/guide.seconds)%1),p=f.points;[[farArm,[1,7,8]],[farLeg,[2,9,10]],[arm,[1,3,4]],[leg,[2,5,6]]].forEach(([node,indices])=>node.setAttribute('points',indices.map(i=>p[i].join(',')).join(' ')));[[trunk,1,2],[neck,0,1]].forEach(([node,a,b])=>{node.setAttribute('x1',p[a][0]);node.setAttribute('y1',p[a][1]);node.setAttribute('x2',p[b][0]);node.setAttribute('y2',p[b][1])});head.setAttribute('cx',p[0][0]);head.setAttribute('cy',p[0][1]);
 if(sideShirt){const shoulder=p[1],hip=p[2],topShoulder=[shoulder[0]+14,shoulder[1]-32],topHip=[hip[0]+12,hip[1]-32];sideShirt.setAttribute('points',[shoulder,topShoulder,topHip,hip].map(p=>p.join(',')).join(' '));const hem=[hip[0]+(p[5][0]-hip[0])*.38,hip[1]+(p[5][1]-hip[1])*.38];sideShorts.setAttribute('points',[hip,topHip,[hem[0]+12,hem[1]-27],hem].map(p=>p.join(',')).join(' '));leg.setAttribute('points',[hem,p[5],p[6]].map(p=>p.join(',')).join(' '));const farHip=[hip[0]+10,hip[1]-10],farHem=[farHip[0]+(p[9][0]-farHip[0])*.38,farHip[1]+(p[9][1]-farHip[1])*.38];farLeg.setAttribute('points',[farHem,p[9],p[10]].map(p=>p.join(',')).join(' '));farArm.setAttribute('points',[topShoulder,p[7],topHip].map(p=>p.join(',')).join(' '));}
 const h=p[0],v=guide.face,front=guide===guides.side,perp=[-v[1],v[0]];
 const point=(forward,side)=>[h[0]+v[0]*forward+perp[0]*side,h[1]+v[1]*forward+perp[1]*side];
 if(front){nose.setAttribute('d','M'+(h[0]-1)+' '+(h[1]-1)+' l-2 5 h5');eye.setAttribute('cx',h[0]-5);eye.setAttribute('cy',h[1]-3);secondEye.setAttribute('cx',h[0]+5);secondEye.setAttribute('cy',h[1]-3);secondEye.setAttribute('visibility','visible');hair.setAttribute('d','M'+(h[0]-10)+' '+(h[1]-8)+' Q'+h[0]+' '+(h[1]-18)+' '+(h[0]+10)+' '+(h[1]-8));mouth.setAttribute('d','M'+(h[0]-4)+' '+(h[1]+7)+' q4 3 8 0')}
 else{nose.setAttribute('d','M'+point(10,-4).join(' ')+' L'+point(18,0).join(' ')+' L'+point(10,4).join(' '));const e=point(7,-4);eye.setAttribute('cx',e[0]);eye.setAttribute('cy',e[1]);secondEye.setAttribute('visibility','hidden');hair.setAttribute('d','M'+point(-2,-12).join(' ')+' Q'+point(-20,0).join(' ')+' '+point(-2,12).join(' '));mouth.setAttribute('d','M'+point(10,6).join(' ')+' L'+point(8,9).join(' '))}
 if(front)chest.setAttribute('visibility','hidden');const chestVector=front?[0,1]:v;chest.setAttribute('cx',p[1][0]+(p[2][0]-p[1][0])*.25+chestVector[0]*8);chest.setAttribute('cy',p[1][1]+(p[2][1]-p[1][1])*.25+chestVector[1]*8);
 if(contactLabels.length){const kneesDown=p[5][1]>176,x=kneesDown?p[5][0]:296;contactLabels[1].text.textContent=kneesDown?'KNEES DOWN':'TOES';contactLabels[1].text.setAttribute('x',x);contactLabels[1].leader.setAttribute('d','M'+x+' 190 V201')}
 text.textContent=f.caption}
 function tick(now){if(!running)return;if(last!==null)elapsed+=Math.min(now-last,100);last=now;draw();raf=requestAnimationFrame(tick)}
 function pause(user=true){running=false;last=null;cancelAnimationFrame(raf);raf=null}
 function play(){if(running)return;running=true;last=null;raf=requestAnimationFrame(tick)}
 function replay(){elapsed=0;draw();play()}
 function visibility(){if(document.hidden)pause(false)}
 document.addEventListener('visibilitychange',visibility);draw();
 return {guide,play,pause,replay,isPlaying:()=>running,destroy:()=>{pause();document.removeEventListener('visibilitychange',visibility);container.replaceChildren()}};
}
const api={guides,find,sample,mount};root.StrengthDemos=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
