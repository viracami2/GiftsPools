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
import { AgregarRegaloComponent } from './VictorEsteban/agregar-regalo/agregar-regalo.component';
import { ListarRegalosComponent } from './VictorEsteban/listar-regalos/listar-regalos.component';
import { AsignarRegalosComponent } from './VictorEsteban/asignar-regalos/asignar-regalos.component';

import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './AngularMaterialModule';
import { AdminLayoutComponent } from './Game/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './Game/layouts/auth-layout/auth-layout.component';
import { ComponentsModule } from './Game/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AgregarRegaloComponent,
    ListarRegalosComponent,
    AsignarRegalosComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    
  ],
  imports: [
    //CommonModule,
    FormsModule,
    DragDropModule,    
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,

    NgbModule,


    ReactiveFormsModule,
    HttpClientModule,
    
    ComponentsModule,

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
