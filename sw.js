// Change VERSION à chaque mise en ligne : c'est ce qui déclenche le bandeau « Nouvelle version ».
const VERSION="rhf-1.0.1";
const FILES=["./","index.html","styles.css","app.js","steps.js","pwa.js","manifest.webmanifest","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png"];

self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&k!=="rhf-fonts").map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("message",e=>{if(e.data==="skip")self.skipWaiting()});

self.addEventListener("fetch",e=>{
  const req=e.request,url=new URL(req.url);
  if(req.method!=="GET")return;
  // Polices Google : gardées en cache après le premier chargement
  if(url.hostname==="fonts.googleapis.com"||url.hostname==="fonts.gstatic.com"){
    e.respondWith(caches.open("rhf-fonts").then(c=>c.match(req).then(hit=>hit||fetch(req).then(r=>{if(r.ok||r.type==="opaque")c.put(req,r.clone());return r}))));
    return;
  }
  if(url.origin!==location.origin)return;
  // Fichiers de l'app : depuis le cache de la version installée (rapide et hors ligne)
  e.respondWith((async()=>{const c=await caches.open(VERSION);
    const hit=await c.match(req,{ignoreSearch:true})||(req.mode==="navigate"&&await c.match("index.html"));
    return hit||fetch(req)})());
});
