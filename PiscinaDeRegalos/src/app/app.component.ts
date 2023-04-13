import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiscinaDeRegalos';
  things = ['paños humedos', 'cosa2', 'cosa3', 'cosa4'];
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];


  selectedThing = '';
  userName = '';

  submit() {
    console.log('La cosa seleccionada es:', this.selectedThing);
    console.log('El nombre del usuario es:', this.userName);
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

  drop(event: CdkDragDrop<string[]>) {
    // Obtenemos información sobre el elemento arrastrado
    const item = event.item.data;
    
    // Obtenemos información sobre el destino del elemento arrastrado
    const targetList = event.container.data;
    const targetIndex = event.currentIndex;
    
    // Realizamos las operaciones necesarias con la información obtenida
    // ...
  }
  

}
