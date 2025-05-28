// MobX es una libreria basada en observables que permite manejar el estado de una aplicación React de forma reactiva y automática.

// Sirve para sincronizar el estado con la interfaz de usuario de forma automática sin preocuparte por actualizarla manualmente.

// ¿Comó se usa?

// npm install mobx mobx-react

// store.js

import { makeAutoObservable } from "mobx";

class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export const counterStore = new CounterStore();


// App.jsx

import { observer } from "mobx-react";
import { counterStore } from "./store";

const App = observer(() => (
    <div>
        <h1>Count: {counterStore.count}</h1>
        <button onClick={() => counterStore.increment()}>+</button>
        <button onClick={() => counterStore.decrement()}>-</button>
    </div>
));