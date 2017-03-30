
var CACHE = 'GitUser';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll([
        '/index.html',
        '/app.js',
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js',
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28//angular-route.min.js',
          '/home/home.js',
          '/home/home.html',
          '/detail/detailInfo.html',
          '/detail/detailInfo.js',
          '/image/star.svg',
          '/image/icon1.png',
          '/image/icon2.png',
          '/image/iocn3.png'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});