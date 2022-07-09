# simple-store

`svelte-store` in VanillaJS

## Usage

- Real examples in `/example`

### Create a store

```js
import { makeStore } from "../index.js";

export const myStore = makeStore({ foo: "bar" });
```

### Subscribe to a store

```js
import { myStore } from "./actualStores.js";

myStore.subscribe((currentNewValue) => {
    console.log("new value in", currentNewValue);
});
```

### Set new value

```js
import { myStore } from "./actualStores.js";

myStore.set("New Value");
```

### Update the value (using the previous value)

```js
import { myStore } from "./actualStores.js";

myStore.update((oldValue) => {
    return oldValue.toString() + "updated";
});
```

## License

Licensed under the MIT License - [LICENSE](LICENSE)
