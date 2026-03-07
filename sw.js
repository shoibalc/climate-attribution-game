const CACHE_NAME = 'climate-quiz-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './app-photos/answers.csv',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './app-photos/mall_flood.jpg',
  './app-photos/outdoor%20pollution_traffic.jpg',
  './app-photos/crop%20burning.jpg',
  './app-photos/sad%20farmer.jpg',
  './app-photos/corals-bleaching.png',
  './app-photos/melting-greenland.png',
  './app-photos/pollution-mexico-city.png',
  './app-photos/Earthquake_Afghanistan_Aid_Iran_Tasnim_November_2025.jpg',
  './app-photos/katrina-hurricane.jpg',
  './app-photos/Turkey-Syria-Earthquake-scaled-2-2048x1366.jpg',
  './app-photos/Bush_Burning.jpg',
  './app-photos/Wildfire-in-California.png',
  './app-photos/Los-Angeles-fire-2025.png',
  './app-photos/ring-road-flooded-bangalore.jpeg',
  './app-photos/sankey-road-underpass.jpeg',
  './app-photos/Mulayathur-Kodanad-bridge-Kerala-2018.jpg',
  './app-photos/Sindhupalchowk-landslide-Nepal-1024x683.jpg',
  './app-photos/delhi-pollution.png',
  './app-photos/mumbai-flooding-2005.png',
  './app-photos/women-carrying-water.jpg',
  "./app-photos/People-queue-up-for-potable-water-at-a-'water-ATM-at-Rajarajeshwarinagar.-Express-photo-by-Jithendra-M.webp",
  './app-photos/water-shortage-cities.png',
  './app-photos/migration.jpg',
  './app-photos/delhi-floods-2023.jpg',
  './app-photos/glacial-lake-outburst-flood.png',
  './app-photos/Ghazipur-landfill-near-Delhi-burning.png',
];

// Cache all assets on install; use allSettled so one missing file won't abort
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(ASSETS.map(url => cache.add(url)))
    )
  );
  self.skipWaiting();
});

// Remove old caches on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first strategy: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
