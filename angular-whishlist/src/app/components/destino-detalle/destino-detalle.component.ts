import { Component, OnInit, InjectionToken, Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.module';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { ActivatedRoute } from '@angular/router';

/*
interface AppConfig {
  apiEndpoint: String;
}

const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'mi_api.com'
};

const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@Injectable()
class DestinosApiClientDecorated extends DestinosApiClient {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, store: Store<AppState>) {
    super(store);
  }
  getById(id: string): DestinoViaje {
    console.log('llamando por la clase decorada');
    console.log('config: ' + this.config.apiEndpoint);
    return super.getById(id);
  }
}

class DestinosApiClientViejo {
  getById(id: String): DestinoViaje {
    console.log('Llamando por la clase vieja');
    return null;
  }
}
*/

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css'],
  providers: [
    DestinosApiClient
    //{ provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
    //{ provide: DestinosApiClient, useClass: DestinosApiClientDecorated },
    //{ provide: DestinosApiClientViejo, useExisting: DestinosApiClient }
  ]
})

export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(public route: ActivatedRoute, public destinosApiClient: DestinosApiClient) { }//DestinosApiClientViejo) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.destino = this.destinosApiClient.getById(id);
  }
}
