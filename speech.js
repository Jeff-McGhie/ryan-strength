/* Speech is optional. Playback status never blocks workout controls. */
(function(root){
function createSpeech(env,report,onVoices=()=>{}){
 let current=null,watchdog=null,voices=[],preferred="";
 const supported=!!(env.speechSynthesis&&env.SpeechSynthesisUtterance);
 function refresh(){if(supported)try{voices=env.speechSynthesis.getVoices()||[]}catch(e){voices=[]}onVoices(choices())}
 function choices(){return voices.filter(v=>/^en(?:[-_]|$)/i.test(v.lang)).map(v=>({id:v.voiceURI||v.name,name:v.name,lang:v.lang,local:!!v.localService}))}
 function rank(v){return (/premium/i.test(v.name)?40:/enhanced/i.test(v.name)?30:0)+(v.lang==='en-US'?8:0)+(v.default?4:0)+(v.localService?2:0)}
 function choose(){const english=voices.filter(v=>/^en(?:[-_]|$)/i.test(v.lang));return english.find(v=>(v.voiceURI||v.name)===preferred)||english.slice().sort((a,b)=>rank(b)-rank(a))[0]}
 function stop(){env.clearTimeout(watchdog);watchdog=null;current=null;if(supported)env.speechSynthesis.cancel()}
 function play(text){
  stop();if(!supported){report('Voice is unavailable in this browser. On-screen coaching still works.');return}
  refresh();const synth=env.speechSynthesis,u=new env.SpeechSynthesisUtterance(text);current=u;
  u.lang='en-US';u.rate=1;u.volume=1;u.pitch=1;
  const voice=choose();if(voice){u.voice=voice;u.lang=voice.lang}
  report('Starting voice…');
  u.onstart=()=>{if(current!==u)return;env.clearTimeout(watchdog);report('Voice playback started. If silent, check media volume and Silent Mode.')};
  u.onend=()=>{if(current!==u)return;env.clearTimeout(watchdog);current=null;report('Voice playback finished.')};
  u.onerror=e=>{if(current!==u)return;env.clearTimeout(watchdog);current=null;report('Voice could not play ('+(e.error||'unknown error')+'). Tap Test voice to retry; on-screen coaching still works.')};
  watchdog=env.setTimeout(()=>{if(current===u)report('Voice did not start. Tap Test voice to retry. You can continue using on-screen coaching.')},5000);
  try{if(synth.paused)synth.resume();synth.speak(u)}catch(e){env.clearTimeout(watchdog);current=null;report('Voice could not start. You can continue using on-screen coaching.')}
 }
 refresh();if(supported&&env.speechSynthesis.addEventListener)env.speechSynthesis.addEventListener('voiceschanged',refresh);
 return {play,stop,refresh,choices,setVoice:id=>{preferred=String(id||'')}};
}
root.createStrengthSpeech=createSpeech;if(typeof module!=='undefined')module.exports=createSpeech;
})(typeof globalThis!=='undefined'?globalThis:this);
