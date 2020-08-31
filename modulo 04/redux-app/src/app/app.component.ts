import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor( private store: Store<AppState> ) {
    // this.contador = 10;
    this.store.subscribe( state => {
      this.contador = state.contador;
    });
  }

  incrementar = (): any =>  {
    // this.contador ++;
    const accion: Action = {
      type: 'INCREMENTAR'
    };
    this.store.dispatch( accion );
  }

  decrementar = (): any =>  {
    // this.contador --;
    const accion: Action = {
      type: 'DECREMENTAR'
    };
    this.store.dispatch( accion );
  }
}
