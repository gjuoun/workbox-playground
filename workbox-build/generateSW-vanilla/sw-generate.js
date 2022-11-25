// Inside of build.js:
const { generateSW } = require("workbox-build");

// These are some common options, and not all are required.
// Consult the docs for more info.
generateSW({
  globDirectory: "./public",
  globPatterns: ["**/*.js"],
  skipWaiting: true,
  swDest: "./public/sw.js",
}).then(({ count, size, warnings }) => {
  if (warnings.length > 0) {
    console.warn(
      "Warnings encountered while generating a service worker:",
      warnings.join("\n")
    );
  }

  console.log(
    `Generated a service worker, which will precache ${count} files, totaling ${size} bytes.`
  );
});
