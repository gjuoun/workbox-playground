// Inside of build.js:
const { injectManifest } = require("workbox-build");
const path = require("path");

// These are some common options, and not all are required.
// Consult the docs for more info.
injectManifest({
  globDirectory: "",
  globPatterns: [".next/static/**/*.js"],
  swDest: "public/sw.js",
  swSrc: "src/sw.js",
  globIgnores: [
    ".next/static/webpack/**/*",
    ".next/static/development/**/*",
    ".next/static/development/**/*",
  ],
  manifestTransforms: [
    //! replace `.next/static` as `_next/static` in the manifest
    (manifestEntries) => {
      return {
        manifest: manifestEntries.map((entry) => {
          return {
            revision: entry.revision,
            url: entry.url.replace(".next/static/", "_next/static/"),
          };
        }),
      };
    },
  ],
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
