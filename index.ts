class Store {
    value: any = null;
    callbacks: ((newValue: any) => void)[] = [];
    constructor(defaultValue = null) {
        this.value = defaultValue;
        this.callbacks = [];
    }
    subscribe = (newCallback: (newValue: any) => void) => {
        this.callbacks.push(newCallback);
        newCallback(this.value);
    };
    set = (newValue: any) => {
        this.value = newValue;
        this.callbacks.forEach((oneCallback: (newValue: any) => void) => {
            oneCallback(this.value);
        });
    };
    update = (toCall: (newValue: any) => any) => {
        this.value = toCall(this.value);
        this.callbacks.forEach((oneCallback: (newValue: any) => void) => {
            oneCallback(this.value);
        });
    };
}

export const makeStore = (value:any): Store => {
    return new Store(value);
};
