import { myStore } from "./actualStores.js";

let value;
myStore.subscribe((newValue) => {
    value = newValue;
    console.log("new value in test.js:", value);
});

myStore.set("New Value");

setTimeout(() => {
    myStore.set("set");
}, 5000);
