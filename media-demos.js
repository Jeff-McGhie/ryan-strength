/* TrainAI-hosted, unmodified branded previews. No provider media is bundled or precached.
   Public download access is not a representation that third-party app reuse is licensed.
   Source: https://www.trainaiapp.com/exercise-media/ (catalog reviewed 2026-11-11). */
(function(root){'use strict';
 const D=root.StrengthDemos, vectorMount=D.mount, vectorFind=D.find;
 const base='https://firebasestorage.googleapis.com/v0/b/personalfinanceai-cursor.appspot.com/o/trainai%2Fcreator-media%2F2026-10-07%2Ftrainai-';
 const rows={
  floor:['push-up','5d1917138ec8dbbe','5ffaa42b-b340-4299-b808-b9994c93f8d4','b8f7cb6081c4e489','d8980cfc-14f5-4cc5-9a37-4b10c6d93e43','Five controlled repetitions. Use your approved easier incline if you cannot keep good form.'],
  sit:['legacy-0001','c83aea04e779fc20','e826ce9a-dc55-4d4b-9050-0f38a72ce365','842e2208abd0bb1b','0d4fc44d-b693-4cfa-8fc9-eaed7f87f6e9','This is a three-quarter sit-up: rise partway, without jerking or pulling your head. Complete five at your own pace.'],
  incline:['incline-push-up','a03ba47f092cb4ed','e8cfeef9-4496-4f35-84c8-3aa7bfc7644c','be1ad2c34a0740a5','85fffaa4-6436-4cfd-8ce7-55318f424767','The example uses a low bench. Use your parent-approved fixed counter height.'],
  bird:['bird-dog','6f8a94d442daab42','1a195498-13b9-49ef-b2d0-2a70452ee899','f4bade85d9734516','6300647f-0d7d-4c42-8eca-9c3b0882ec7a','The example shows one side. Reach the opposite arm and leg; do both sides as instructed.'],
  squat:['bodyweight-squat','c167c10f91fad22e','4b62cfe3-d8d6-404c-bd0b-07e4e6c1d223','cf9c676bd4a83c60','18ab757f-24c1-49b6-b196-a70870ac5463','Your squat can be shallower than the example. Use a comfortable range with heels down.'],
  plank:['forearm-plank','ba1f71356fbbda2f','abf9279c-c754-4d5f-828b-10ccc346d9e2','c1fc6a2e3ad66670','ac196fa2-554a-4a8f-b828-241e5d7bda71','The loop shows setup and release. During your exercise, hold steadily until your own timer ends.'],
  bug:['dead-bug','d5e0c8140cb57b6a','b2ea9529-d3c4-4a1a-ba41-74698c8322de','d731666b40206ea7','f31f1dd9-a45f-4f21-830d-ec960af2b3cb','Move the opposite arm and leg slowly. Shorten the reach if your back arches.'],
  balance:['supported-single-leg-balance','b6636e0d1374f2c0','a50ce4cf-ceb5-43fc-b9dc-da23e86dc7b7','f2b85bf8c537d3d8','10c977c3-4d9e-4093-a963-e66875c0170c','Use a fixed support. Follow Side 1 / Side 2 above; the loop does not determine your hold time.'],
  side:['knee-side-plank','e4e486ba83be887d','5d8f9624-0eee-4b64-b33f-c6a9131082d1','6dcd2eda351a9bb5','5d97b55f-4cfa-4ddb-a991-afb200363150','Keep both knees bent and stacked, with the bottom elbow under your shoulder. Do the side shown above.'],
  lunge:['reverse-lunge','9b065fa76abfcf8c','5c1c6058-bccb-4a0a-8b84-4bedad5ed786','89ed9f76549e4a33','c0556bf0-2890-42bd-baea-3a22925c275b','The example shows one side. Step backward comfortably and complete both sides at your own pace.']
 };
 let playbackSequence=0;
 const media={};for(const [id,r] of Object.entries(rows))media[id]={page:'https://www.trainaiapp.com/exercises/'+r[0]+'/',gif:base+r[0]+'-'+r[1]+'.gif?alt=media&token='+r[2],poster:base+r[0]+'-'+r[3]+'.png?alt=media&token='+r[4],note:r[5]};
 media.sit.page='https://www.trainaiapp.com/exercises/three-quarter-sit-up/';
 function entry(exercise){const guide=vectorFind(exercise);return Object.entries(D.guides).find(([,g])=>g===guide)?.[0]||null}
 D.find=function(exercise){const g=vectorFind(exercise),m=media[entry(exercise)];return g&&m?{...g,view:'TrainAI · online demonstration',media:m}:g};
 D.media=media;
 D.mount=function(container,exercise,options={}){
  const m=media[entry(exercise)];if(!m)return vectorMount(container,exercise);
  let destroyed=false,playing=false,fallback=null,timeout=null,generation=0;
  const notify=()=>options.onChange?.(fallback?fallback.isPlaying():playing);
  const create=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n};
  container.replaceChildren();
  const stage=create('div','media-demo-stage'),poster=create('img','media-demo-image'),image=create('img','media-demo-image'),still=create('canvas','media-demo-image');
  poster.alt=D.find(exercise).title+' — TrainAI setup example';poster.referrerPolicy='no-referrer';poster.src=m.poster;
  image.alt=D.find(exercise).title+' — animated demonstration by TrainAI';image.referrerPolicy='no-referrer';image.hidden=true;still.hidden=true;
  const status=create('p','small','Online demonstration · tap Play if motion is paused.');status.setAttribute('role','status');
  const note=create('p','media-demo-cue',m.note),source=create('a','media-demo-source','Demonstration by TrainAI · open source page ↗');source.href=m.page;source.target='_blank';source.rel='noopener noreferrer';
  const basic=create('button','secondary','Use offline guide');basic.type='button';
  stage.append(poster,image,still);container.append(stage,status,note,source,basic);
  function release(){image.onload=null;image.onerror=null;image.removeAttribute('src');clearTimeout(timeout)}
  function offline(message){if(destroyed||fallback)return;const wanted=playing;playing=false;generation++;clearTimeout(timeout);release();container.replaceChildren();const body=create('div');container.append(create('p','small',message),body);fallback=vectorMount(body,exercise);options.onSourceChange?.('Offline guide · '+vectorFind(exercise).view,!!vectorFind(exercise).textOnly);if(wanted)fallback.play();notify()}
  basic.onclick=()=>offline('Offline guide selected. The online TrainAI example needs an internet connection.');
  poster.onerror=()=>{if(!destroyed&&!fallback)status.textContent='Setup picture unavailable. Tap Play to try the animation, or use the offline guide.'};
  function pause(){if(fallback){fallback.pause();notify();return}if(destroyed)return;playing=false;generation++;
   if(image.complete&&image.naturalWidth){try{still.width=image.naturalWidth;still.height=image.naturalHeight;still.getContext('2d').drawImage(image,0,0);still.hidden=false;poster.hidden=true}catch(e){poster.hidden=false;still.hidden=true}}
   image.hidden=true;release();status.textContent='Animation paused. Your exercise timer is still separate.';notify();
  }
  function play(){if(fallback){fallback.play();notify();return}if(destroyed||playing)return;if(root.navigator?.onLine===false){playing=true;offline('You are offline. Showing the offline guide; connect to the internet for the TrainAI demonstration.');return}
   playing=true;const current=++generation;status.textContent='Loading TrainAI demonstration…';notify();release();
   const unavailable=()=>{if(!destroyed&&!fallback&&current===generation)offline('The online demonstration could not load. Showing the offline guide.')};
   image.onload=()=>{if(destroyed||!playing||current!==generation)return;clearTimeout(timeout);poster.hidden=true;still.hidden=true;image.hidden=false;status.textContent='Watch at your own pace. Tap Start exercise when ready.'};
   image.onerror=unavailable;timeout=setTimeout(unavailable,12000);
   // A unique public request restarts the GIF decoder. Image display does not require CORS.
   image.src=m.gif+'&preview='+Date.now()+'-'+(++playbackSequence);
  }
  function replay(){if(fallback){fallback.replay();notify();return}pause();play()}
  function visibility(){if(document.hidden)pause()}
  document.addEventListener('visibilitychange',visibility);
  return {guide:D.find(exercise),get staticOnly(){return !!fallback?.guide.textOnly},play,pause,replay,isPlaying:()=>fallback?fallback.isPlaying():playing,destroy(){destroyed=true;playing=false;generation++;clearTimeout(timeout);release();fallback?.destroy();document.removeEventListener('visibilitychange',visibility);container.replaceChildren()}};
 };
})(typeof globalThis!=='undefined'?globalThis:this);
