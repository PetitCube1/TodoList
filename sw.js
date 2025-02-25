importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

console.log(`WorkBox of TodoList loaded🎉`);


const {registerRoute}        = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheFirst}           = workbox.strategies;
const {ExpirationPlugin}     = workbox.expiration;

registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
                url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts',
      plugins: [
        new ExpirationPlugin({maxEntries: 20}),
      ],
    }),
);

registerRoute(
    ({request}) => request.destination === 'document'||
                   request.destination === 'script'  ||
                   request.destination === 'style',      
    new StaleWhileRevalidate({cacheName: 'files-cache'})
);

registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({cacheName: 'image-cache'}) // Use a custom cache name.
  );