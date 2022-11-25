importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
  { revision: "63ebdcf76a286728e5609210c403c260", url: "index.js" },
]);
