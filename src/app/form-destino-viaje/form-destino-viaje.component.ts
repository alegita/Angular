import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;

  constructor(fg:FormBuilder) { 
    this.onItemAdded= new EventEmitter();
    this.fg=fg.group(
      {
        nombre:[''],
        url:['']
      }
    );
    this.fg.valueChanges.subscribe((form:any)=>{
      console.log('Cambio el formulario:', form);
    });
  }

  ngOnInit() {
  }

  guardar(nombre: string, url: string): boolean{
    const d =  new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
}
