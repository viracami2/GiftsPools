import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PruebaModel } from './models/prueba-model';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


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
    element.forEach(ele =>
      {   
        this.todo.push(ele.regalo);
        console.log(
          ele.nombreInvitado );
        console.log(ele.regalo);
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
//this.store.collection();
//var data = collection(this.store,'VictorEsteban');
//console.log( data);


//var item$ = collectionData(data);

//var ok = //data2.subscribe();

var dat = new PruebaModel();
dat.nombreInvitado ="ines";
dat.regalo ="coche";

//console.log( item$ );


//addDoc(data,dat);


//debugger;

}


  title = 'PiscinaDeRegalos';
  things = ['paños humedos', 'cosa2', 'cosa3', 'cosa4'];
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];


  newItems = [
    'Item 5',
    'Item 6',
    'Item 7',
  ]
  todo = ['Paños etapa 2', 'Paños etapa 2', 'Kit de lavado', 'Bodys', 'Paños etapa 1', 'Paños etapa 1', 'Paños etapa 2'];

  done = ['Monopatin -Vic'];
  // dropped(event: CdkDragDrop<string[]>) {
  //   if (event.item.data === 'Try to move me') {
  //     console.log("this isn't happening today");
  //     return;
  //   }



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