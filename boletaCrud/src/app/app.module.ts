import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { BoletaComponent } from './component/boleta/boleta.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    BoletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
