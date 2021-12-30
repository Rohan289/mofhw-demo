const CACHE_NAME = "insorts-demo-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/bundle.js",
  "/App.scss",
  //"/inshorts-backend-demo.herokuapp.com/get_national_covid_detail",
  // "./App.scss",
  // "../src/images/icon.png",
]
self.addEventListener('install', event => {
  console.log("Entered install");
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  console.log("Entered fetch",event.request);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log("????");
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  let cacheWhitelist = ['insorts-demo-v1'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});