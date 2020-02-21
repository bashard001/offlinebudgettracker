

var assets = ["/",
 "index.html",
  "styles.css", 
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", 
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0", 
  "/db.js", "index.js", "https://code.jquery.com/jquery-3.2.1.slim.min.js", 
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", 
  "/icons/icon-192x192.png","/icons/icon-512x512.png"]


self.addEventListener("install", evt => {
    console.log("service worker installed")
    evt.waitUntil(
        caches.open("newsapp").then(cache => {
            console.log("caching")
            cache.addAll(assets)
        }))
})
///

self.addEventListener("activate", evt => {
    console.log("service worker has been activated")
})

self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request).then(response => {
            return response || fetch(evt.request)
        })
    )
})