const CACHE_NAME = "version-1"
const urlsToCache = ['index.html' , 'offline.html'];

const self = this;

// install SW
self.addEventListener('install' , (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log('open cache')
            })
    )
})


// listen for request
self.addEventListener('install' , (event)=>{

})


// activate the SW
self.addEventListener('install' , (event)=>{

})