import { Reducer, Action } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/contador.reducer";
import * as actions from './contador/contador.actions';

class Store<T> {

    constructor(
        private reducer: Reducer<T>,
        private state: T
    ) { }

    getState(): T {
        return this.state;
    }

    dispach(action: Action): void {
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store(contadorReducer, 10);
console.log(store.getState());

store.dispach(actions.incrementadorAction);
store.dispach(actions.incrementadorAction);
console.log(store.getState());

store.dispach(actions.multiplicarAction);
console.log(store.getState());