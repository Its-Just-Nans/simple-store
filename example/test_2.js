import { myStore } from "./actualStores.js";

myStore.subscribe((n) => {
    console.log("new value in test_2.js: ", n);
});

console.log("test_2.js is loaded");

myStore.update((lol) => {
    return lol.toString() + "TEST";
});
