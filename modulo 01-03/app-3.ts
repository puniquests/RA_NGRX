import { Action, Reducer } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/contador.reducer";
import { incremantadorAction, resetAction, decrementadorAction, multiplicarAction,dividirAction } from './contador/contador.actions'

class Store<T> {

    constructor(private reducer: Reducer<T>,
                private state: T) {
    }
    getState() {
        return this.state;
    }
    dispatch ( action: Action ) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store( contadorReducer, 10 );

console.log( store.getState() )

store.dispatch( incremantadorAction );
store.dispatch( incremantadorAction );

console.log( store.getState() );

store.dispatch( multiplicarAction );

console.log( store.getState() );