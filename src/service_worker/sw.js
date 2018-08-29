if('function' === typeof importScripts){
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');
}
const cacheStorageKey='minimal-pwa-1';
const cacheList = [
    '/',
    'index.html',
    'js/index.js',
    'js/main.js',
    'css/index.css',
    'img/wave-bot.png',
    'img/wave-mid.png',
    'img/wave-top.png'
];
self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open(cacheStorageKey)
        .then(caches => caches.addAll(cacheList))
        .then(()=>self.skipWaiting())
    )
})
