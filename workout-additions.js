/* Explicit parent-requested release-14 additions; never rewrites recorded plan snapshots. */
(function(root){'use strict';
 const C=root.Strength;
 function item(kind){return kind==='push'?{name:'Floor push-ups',variation:'5 comfortable floor push-ups; use an easier incline if form slips',hint:'Hands just wider than shoulders. Keep your body straight; lower and press with control. Stop before form breaks.',sets:1,target:5,rest:60,type:'reps',sides:1,additionId:'workout-push-5-v1'}:{name:'Sit-ups (three-quarter)',variation:'Controlled partial sit-up',hint:'Lie on your back, knees bent and feet flat. Curl partway toward sitting, then lower slowly. Do not pull your head or jerk.',sets:1,target:5,rest:60,type:'reps',sides:1,additionId:'workout-sit-5-v1'}}
 function category(e){return /push.?up/i.test(e.name)?'push':/squat|lunge|balance/i.test(e.name)?'other':'core'}
 function insert(items,addition){let best=null,score=Infinity;for(let at=0;at<=items.length;at++){const a=items.slice();a.splice(at,0,addition);let cost=0;for(const n of [at-1,at+1])if(a[n]&&category(a[n])===category(addition))cost+=100;for(let n=0;n<a.length;n++)if(n!==at&&a[n].additionId)cost+=Math.max(0,2-Math.abs(at-n))*5;if(cost<score){score=cost;best=a}}return best}
 function upgradePlans(plans){const result=C.clone(plans);for(const day of C.DAYS){const list=result[day].items;
   const missing=['push','sit'].filter(k=>!list.some(e=>e.additionId===item(k).additionId));if(list.length+missing.length>12)throw Error('This custom plan already has too many exercises. Parent settings must make room for the two additions.');
   const standard={mon:['Incline push-ups','Bird dogs','Easy squats','Forearm plank'],tue:['Dead bugs','Forearm plank','Bird dogs','Single-leg balance','Side plank from knees'],thu:['Incline push-ups','Reverse lunges','Bird dogs','Side plank from knees']}[day];
   if(missing.length===2&&JSON.stringify(list.map(e=>e.name))===JSON.stringify(standard)){
    if(day==='mon')result[day].items=[item('sit'),...list.slice(0,3),item('push'),list[3]];
    if(day==='tue')result[day].items=[...list.slice(0,3),item('push'),item('sit'),...list.slice(3)];
    if(day==='thu')result[day].items=[list[0],item('sit'),list[1],list[2],item('push'),list[3]];
   }else for(const k of missing)result[day].items=insert(result[day].items,item(k));
  }return result}
 function migrate(state){if(state.workoutAdditionsV1)return {data:state,changed:false};const copy=C.clone(state);copy.plans=upgradePlans(copy.plans);copy.revision++;copy.workoutAdditionsV1=true;return {data:C.validate(copy),changed:true}}
 const defaults=C.defaults;C.defaults=()=>upgradePlans(defaults());
 const fresh=C.fresh;C.fresh=()=>{const state=fresh();state.plans=upgradePlans(state.plans);state.workoutAdditionsV1=true;return state};
 root.StrengthWorkoutAdditions={migrate,upgradePlans};
})(typeof globalThis!=='undefined'?globalThis:this);
