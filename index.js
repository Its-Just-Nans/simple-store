class Store {
    constructor(defaultValue = null) {
        this.value = null;
        this.callbacks = [];
        this.subscribe = (newCallback) => {
            this.callbacks.push(newCallback);
            newCallback(this.value);
        };
        this.set = (newValue) => {
            this.value = newValue;
            this.callbacks.forEach((oneCallback) => {
                oneCallback(this.value);
            });
        };
        this.update = (toCall) => {
            this.value = toCall(this.value);
            this.callbacks.forEach((oneCallback) => {
                oneCallback(this.value);
            });
        };
        this.value = defaultValue;
        this.callbacks = [];
    }
}
export const makeStore = (value) => {
    return new Store(value);
};
