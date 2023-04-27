import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DndModule } from 'ngx-drag-drop';
import { HttpClientModule } from '@angular/common/http';

import {DragDropModule} from '@angular/cdk/drag-drop';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgxDragDropModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent
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
    // DndModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
