import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, inject } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PruebaModel } from '../models/prueba-model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-regalos',
  templateUrl: './listar-regalos.component.html',
  styleUrls: ['./listar-regalos.component.css']
})
export class ListarRegalosComponent implements OnInit {

  displayedColumns: string[] = ['nombreInvitado', 'regalo', 'url'];


  

  dataSource = new MatTableDataSource<PruebaModel>();
  private coleccionV : CollectionReference<DocumentData> | undefined ;// | undefined;
  
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
    
  users$: Observable<PruebaModel[]> | undefined;

    
    public todo  : PruebaModel []  = [];

    public done : PruebaModel []  = [];

    
constructor(){
 
  // this.coleccionV = collection(this.firestore, 'VictorEsteban');

  // const userProfileCollection = collection(this.firestore,
  //    'VictorEsteban');

  // this.users$ = collectionData(userProfileCollection
  //   , {
  //     idField: 'id',
  //   }) as Observable<PruebaModel[]>;
  
  // this.users$.forEach(element => {
  //   this.todo = [];
  //   this.done = [];
  //   console.log(element);

  //   element.forEach(ele =>
  //     {          
  //       if(ele.nombreInvitado  == ''){
  //         this.todo.push(ele);        
  //       }else{
  //         //this.done.push(ele);        
  //       }
  //     } 
  //     );

  // });
  // var result = this.users$.subscribe();
  

}

public item$: Observable<PruebaModel[]> | undefined;


ngOnInit(){  
    
  this.coleccionV = collection(this.firestore, 'VictorEsteban');

  this.users$ = collectionData(this.coleccionV
    , {
      idField: 'id',
    }) as Observable<PruebaModel[]>;

    this.users$.forEach(element => {
      this.todo = [];
      
      element.forEach(ele =>{          
        
          //console.log(ele);    

          if(ele.nombreInvitado  == ''){
          }else{
          }               
          this.todo.push(ele);    
          //this.dataSource.data.push(ele);
        }
      );  
      this.dataSource.data = this.todo;
      
       
    });


  // this.dataSource.data = this.todo;
}





}


