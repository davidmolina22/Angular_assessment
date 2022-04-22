import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayHideModule } from './display-hide/display-hide.module';
import { InicioModule } from './inicio/inicio.module';
import { SearchOnTypeModule } from './search-on-type/search-on-type.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InicioModule,
    DisplayHideModule,
    SearchOnTypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
