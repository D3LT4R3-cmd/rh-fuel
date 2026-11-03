// ---------- App installée : hors ligne, mises à jour, rafraîchissement ----------
const APP_VERSION="1.0.0";

// Bandeau « nouvelle version » : la mise à jour ne s'applique que quand tu la valides,
// pour ne jamais recharger l'app pendant que tu coches quelque chose.
function showUpdate(worker){
  if(document.querySelector(".update"))return;
  const b=document.createElement("div");b.className="update";b.setAttribute("role","status");
  b.innerHTML='<span class="grow">Nouvelle version disponible.</span><button type="button">Mettre à jour</button>';
  b.querySelector("button").onclick=()=>{b.querySelector("button").disabled=true;worker.postMessage("skip")};
  document.body.appendChild(b);
}
if("serviceWorker"in navigator&&location.protocol!=="file:"){
  let reloading=false;
  navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!reloading){reloading=true;location.reload()}});
  navigator.serviceWorker.register("sw.js").then(reg=>{
    if(reg.waiting&&navigator.serviceWorker.controller)showUpdate(reg.waiting);
    reg.addEventListener("updatefound",()=>{const w=reg.installing;
      w.addEventListener("statechange",()=>{if(w.state==="installed"&&navigator.serviceWorker.controller)showUpdate(w)})});
    document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")reg.update().catch(()=>{})});
  }).catch(()=>{});
}

// En revenant sur l'app (le lendemain matin, par exemple), réaffiche la bonne journée.
let lastDay=today();
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState!=="visible")return;
  const a=document.activeElement;if(a&&/INPUT|SELECT|TEXTAREA/.test(a.tagName))return;
  if(today()!==lastDay){lastDay=today();closeSheet()}
  render();
});
// Les données sont déjà écrites à chaque action ; on force l'écriture si l'app passe en arrière-plan.
addEventListener("pagehide",lsSet);
