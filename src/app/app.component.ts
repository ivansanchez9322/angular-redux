import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//import { decrementar, incrementar } from './contador/contador.actions';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-bootstrap-app-ns';

  contador: number = 0;

  //Con el Store importado en el constructor nos Suscribirnos a cualquier cambio que 
  // suceda en el Store (ngOnInit | constructor)
  constructor(private store: Store<AppState>) {

    // Te puedes subscribir a un elemento especifico, y solo si cambia el elemento te notifica
    this.store.select('contador')
      .subscribe(contador => this.contador = contador)

  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
