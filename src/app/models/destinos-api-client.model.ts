import { Injectable } from '@angular/core';
import { DestinoViaje } from './destino-viaje.model';
import { Store } from '@ngrx/store';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { AppState } from './../app.module';

@Injectable()
export class DestinosApiClient {
	destinos: DestinoViaje[] = [];
	
	constructor(public store: Store<AppState>) {
		this.store
			.select(state => state.destinos)
			.subscribe((data) => {
				console.log('destinos sub store');
				console.log(data);
				this.destinos = data.items;
			});
		this.store
			.subscribe((data) => {
				console.log('all store');
				console.log(data);
			});
	}

	add(d: DestinoViaje) {
		this.store.dispatch(new NuevoDestinoAction(d));
	}

	getById(id: string): DestinoViaje{
		return this.destinos.filter((d)=> { return d.id.toString() == id; })[0]
	}
	
	elegir(d: DestinoViaje) {
		this.store.dispatch(new ElegidoFavoritoAction(d));
	}

	getAll(): DestinoViaje[] {
		return this.destinos;
	  }
	
}