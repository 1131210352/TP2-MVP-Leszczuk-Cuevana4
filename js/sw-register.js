
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../service-worker.js").then((message) => {
        console.log("Service Worker Funcionando");
    });
} else {
    console.log("Service Worker NO SOPORTADO")
}