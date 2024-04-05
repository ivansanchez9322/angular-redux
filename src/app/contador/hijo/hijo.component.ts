import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  contador: number;


  constructor(private store: Store<AppState>) {
    this.contador = 0;
  }
  ngOnInit(): void {
    this.store.select('contador').subscribe(
      contador => this.contador = contador
    )
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
  }

}
