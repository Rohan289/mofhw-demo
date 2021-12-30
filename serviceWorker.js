const staticInshortsDemo = "insorts-demo-site-v1"
const assets = [
  "/",
  "/public/index.html",
  "App.scss",
  "/src/images/icon.png",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticInshortsDemo).then(cache => {
        cache.addAll(assets)
      })
    )
  })
  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })