self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('real-feat-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './assassin.png',
        './boss.png',
        './badge.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});