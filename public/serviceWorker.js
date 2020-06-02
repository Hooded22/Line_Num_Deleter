const CACHE_NAME = "lineNumDeleter_1";
const urlsToCache = [
    'index.html',
    'offline.html',
    '/Favicon/favicon.png'
]

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log("Chache opened");
            return cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })
    )
})

self.addEventListener('active', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName))
                {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})