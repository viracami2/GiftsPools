import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiscinaDeRegalos';
  things = ['paños humedos', 'cosa2', 'cosa3', 'cosa4'];
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];


  newItems = [
    'Item 5',
    'Item 6',
    'Item 7',
  ]
  todo = ['Paños etapa 2','Paños etapa 2','Kit de lavado','Bodys', 'Paños etapa 1', 'Paños etapa 1', 'Paños etapa 2'];

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
    
      if ( person != null   ) {
        if  ( person != ''){
          event.previousContainer.data[event.previousIndex]
          = event.previousContainer.data[event.previousIndex] + " - "+person;
          
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
            );
        }}
    }
  }


  selectedThing = '';
  userName = '';

  submit() {
    console.log('La cosa seleccionada es:', this.selectedThing);
    console.log('El nombre del usuario es:', this.userName);
  }

}