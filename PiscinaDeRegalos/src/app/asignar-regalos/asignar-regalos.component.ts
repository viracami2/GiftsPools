import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PruebaModel } from '../models/prueba-model';

@Component({
  selector: 'app-asignar-regalos',
  templateUrl: './asignar-regalos.component.html',
  styleUrls: ['./asignar-regalos.component.css']
})
export class AsignarRegalosComponent implements OnInit {



  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
    users$: Observable<PruebaModel[]>;

    
    public todo  : PruebaModel []  = [];

    public done : PruebaModel []  = [];

    
constructor(){
 
  
  const userProfileCollection = collection(this.firestore,
     'VictorEsteban');

  this.users$ = collectionData(userProfileCollection
    , {
      idField: 'id',
    }) as Observable<PruebaModel[]>;
  
  this.users$.forEach(element => {
    this.todo = [];
    this.done = [];
   console.log(element);

    element.forEach(ele =>
      {          
        if(ele.nombreInvitado  == ''){
          this.todo.push(ele);        
        }else{
          //this.done.push(ele);        
        }
      } 
      );

  });
  //var result = this.users$.subscribe();
  

}

public item$: Observable<PruebaModel[]> | undefined;

ngOnInit(){  
}


drop(event: CdkDragDrop<PruebaModel[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    var person = prompt("Digita el nombre", "");

    if (person != null) {
      if (person != '') {

          //aqui se tiene que mandar a actualizar firebase


        event.previousContainer.data[event.previousIndex].nombreInvitado
          = person;

          var codigo =event.previousContainer.data[event.previousIndex].id;
          
          this.done.push(event.previousContainer.data[event.previousIndex]);

          const pokemonDocumentReference = doc(
            this.firestore,
            `VictorEsteban/${codigo}`
          );


        updateDoc(pokemonDocumentReference, { ...event.previousContainer.data[event.previousIndex] });
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );


      }
      }
    }
  }




}
