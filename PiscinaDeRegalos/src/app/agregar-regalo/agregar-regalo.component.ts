import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PruebaModel } from '../models/prueba-model';
import { CollectionReference, DocumentData, Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-regalo',
  templateUrl: './agregar-regalo.component.html',
  styleUrls: ['./agregar-regalo.component.css']
})
export class AgregarRegaloComponent implements OnInit {


  private coleccionV : CollectionReference<DocumentData> ;// | undefined;
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  public _imagen: PruebaModel = new PruebaModel();

  imagenForm = new FormGroup({
    nombreInvitado: new FormControl(''),
    regalo: new FormControl(''),
    
  });


  constructor() { 
    this.coleccionV = collection(this.firestore, 'VictorEsteban');
  }

  ngOnInit(): void {
  }

  LimpiarFormulario(){
    this.imagenForm.reset()
  }
  
  async CrearImagen(event: Event)
  {
    event.preventDefault();

    this._imagen.nombreInvitado = this.imagenForm.controls.nombreInvitado.value ?? '';
    this._imagen.regalo = this.imagenForm.controls.regalo.value ?? '';    

     await addDoc(this.coleccionV, {
       regalo :this._imagen.regalo,
      nombreInvitado :'',
     });

  }



}

