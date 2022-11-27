// Inside of build.js:
import { injectManifest } from "workbox-build";

// These are some common options, and not all are required.
// Consult the docs for more info.
injectManifest({
  globDirectory: "./public",
  globPatterns: ["**/*.js"],
  swDest: "public/sw.js",
  swSrc: "src/sw.js",
}).then(({ count, size, warnings }) => {
  if (warnings.length > 0) {
    console.warn(
      "Warnings encountered while injecting the manifest:",
      warnings.join("\n")
    );
  }

  console.log(
    `Injected a manifest which will precache ${count} files, totaling ${size} bytes.`
  );
});
