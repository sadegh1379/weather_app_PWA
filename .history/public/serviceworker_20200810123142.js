const CACHE_NAME = "version-1"
const urlsToCache = ['index.html' , 'offline.html'];

const self = this;

// install SW
self.addEventListener('install' , (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log('opened cache');

                return cache.addAll(urlsToCache)
            })
    )
})


// listen for request
self.addEventListener('fetch' , (event)=>{

})


// activate the SW
self.addEventListener('install' , (event)=>{

})