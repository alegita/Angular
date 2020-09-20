import { DestinoViaje } from './../../models/destino-viaje.model';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css']
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(public route: ActivatedRoute, public destinosApiClient: DestinosApiClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    //this.destino = this.destinosApiClient.getById(id);
  }

}
