import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';

import {DragDropModule} from '@angular/cdk/drag-drop';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
//import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgxDragDropModule } from 'ngx-drag-drop';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AgregarRegaloComponent } from './agregar-regalo/agregar-regalo.component';
import { ListarRegalosComponent } from './listar-regalos/listar-regalos.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarRegaloComponent,
    ListarRegalosComponent
  ],
  imports: [
    FormsModule,
    DragDropModule,
    //NgxDragDropModule,
    // FlexLayoutModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    // DndModule,
    
    
    
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
