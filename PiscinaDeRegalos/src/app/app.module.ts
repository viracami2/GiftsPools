import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AgregarRegaloComponent } from './agregar-regalo/agregar-regalo.component';
import { ListarRegalosComponent } from './listar-regalos/listar-regalos.component';
import { AsignarRegalosComponent } from './asignar-regalos/asignar-regalos.component';

import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './AngularMaterialModule';


@NgModule({
  declarations: [
    AppComponent,
    AgregarRegaloComponent,
    ListarRegalosComponent,
    AsignarRegalosComponent
  ],
  imports: [
    //CommonModule,
    FormsModule,
    DragDropModule,    
    BrowserModule,
    AppRoutingModule,


    AngularMaterialModule,

    ReactiveFormsModule,
    HttpClientModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),    
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
