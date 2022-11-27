import { Workbox } from "workbox-window";

export function register() {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");

    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        console.log("Service worker updated.");
      }
    });

    wb.register({
      immediate: true,
    }).catch((e) => {
      console.error(`Service worker registration failed: ${e}`);
    });
  } else {
    console.error("Service workers are not supported.");
  }
}
