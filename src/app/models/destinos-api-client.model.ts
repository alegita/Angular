import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { AppState } from './../app.module';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
	destinos: DestinoViaje[] = [];
	
	constructor(public store: Store<AppState>) {
	}
	add(d: DestinoViaje) {
		this.store.dispatch(new NuevoDestinoAction(d));
	}
	
	elegir(d: DestinoViaje) {
		this.store.dispatch(new ElegidoFavoritoAction(d));
	}

	getAll(): DestinoViaje[] {
		return this.destinos;
	  }
	/*
	subscribeOnChange(fn){
		this.current.subscribe(fn);
	}*/
}