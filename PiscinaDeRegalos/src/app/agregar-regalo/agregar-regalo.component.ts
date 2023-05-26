import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PruebaModel } from '../models/prueba-model';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-agregar-regalo',
  templateUrl: './agregar-regalo.component.html',
  styleUrls: ['./agregar-regalo.component.css']
})
export class AgregarRegaloComponent  implements OnInit {

  ngOnInit(){  
    
    
    this.users$ = collectionData(this.coleccionV
      , {
        idField: 'id',
      }) as Observable<PruebaModel[]>;

      this.users$.forEach(element => {
        this.todo = [];
        
        element.forEach(ele =>{          
          
            console.log(ele);    

            if(ele.nombreInvitado  == ''){
            }else{
            }               
            this.todo.push(ele);    
            
          }
        );  
        this.dataSource.data = this.todo;
      });

  }
  
  private coleccionV : CollectionReference<DocumentData> ;// | undefined;
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  users$: Observable<PruebaModel[]>;

  dataSource = new MatTableDataSource<PruebaModel>();


  public _imagen: PruebaModel = new PruebaModel();

  imagenForm = new FormGroup({
    nombreInvitado: new FormControl(''),
    regalo: new FormControl(''),
    url: new FormControl(''),
    
  });

  public todo  : PruebaModel []  = [];

  constructor() { 
    this.coleccionV = collection(this.firestore, 'VictorEsteban');

    this.users$ = collectionData(this.coleccionV
      , {
        idField: 'id',
      }) as Observable<PruebaModel[]>;

  }
 


  LimpiarFormulario(){
    this.imagenForm.reset()
  }
  
  async CrearImagen(event: Event)
  {
    event.preventDefault();

    this._imagen.nombreInvitado = this.imagenForm.controls.nombreInvitado.value ?? '';
    this._imagen.regalo = this.imagenForm.controls.regalo.value ?? '';    
    this._imagen.url = this.imagenForm.controls.url.value ?? '';    
    
     await addDoc(this.coleccionV, {
       regalo :this._imagen.regalo,
      nombreInvitado :'',
      url :this._imagen.url,
     });
     
     this.LimpiarFormulario();

  }


  async EliminarImagen(event: Event)
  {
    event.preventDefault();

    this._imagen.nombreInvitado = this.imagenForm.controls.nombreInvitado.value ?? '';
    this._imagen.regalo = this.imagenForm.controls.regalo.value ?? '';    
    
    
    //const pokemonDocumentReference = doc(this.firestore, `pokemon/${id}`);
     //deleteDoc(pokemonDocumentReference);

  }
}

