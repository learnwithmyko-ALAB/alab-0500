// ALAB launcher service worker: do not intercept network requests or cache the tracker.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
