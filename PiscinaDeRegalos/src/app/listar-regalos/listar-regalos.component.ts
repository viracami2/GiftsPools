import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, inject } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PruebaModel } from '../models/prueba-model';

@Component({
  selector: 'app-listar-regalos',
  templateUrl: './listar-regalos.component.html',
  styleUrls: ['./listar-regalos.component.css']
})
export class ListarRegalosComponent implements OnInit {


  private itemDoc: AngularFirestoreDocument<PruebaModel> | undefined;
  //private item: Observable<PruebaModel> ;

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
    users$: Observable<PruebaModel[]>;


constructor(/*private store : AngularFirestore*/){
 
  
  const userProfileCollection = collection(this.firestore, 'VictorEsteban');

  // get documents (data) from the collection using collectionData
  this.users$ = collectionData(userProfileCollection) as Observable<PruebaModel[]>;
  

  this.users$.forEach(element => {
    this.todo = [];
    this.done = [];
    element.forEach(ele =>
      {          
        if(ele.nombreInvitado  == ''){
          this.todo.push(ele.regalo);        
        }else{
          this.done.push(ele.regalo+" "+ele.nombreInvitado  );        

          

        }
      } 
      );

  });
  var result = this.users$.subscribe();
  
  

console.log(
  result
);
  //debugger;


}

public item$: Observable<PruebaModel[]> | undefined;

ngOnInit(){  
}


  title = 'PiscinaDeRegalos';
  things = ['paños humedos'];
  items = ['Elemento 1'];


  newItems = [
    'Item 5',
    
  ]
  todo = ['Paños 2','Paños etapa 2'];

  done = ['Monopatin -Vic'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      var person = prompt("Digita el nombre", "");

      if (person != null) {
        if (person != '') {
          event.previousContainer.data[event.previousIndex]
            = event.previousContainer.data[event.previousIndex] + " - " + person;

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


  selectedThing = '';
  userName = '';

  submit() {
    console.log('La cosa seleccionada es:', this.selectedThing);
    console.log('El nombre del usuario es:', this.userName);
  }

}
