import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incremantadorAction } from './contador/contador.actions'

const store: Store = createStore(contadorReducer);

store.subscribe( () => {
    console.log('Subs:', store.getState());
})

store.dispatch( incremantadorAction );
store.dispatch( incremantadorAction );
store.dispatch( incremantadorAction );
store.dispatch( incremantadorAction );    


