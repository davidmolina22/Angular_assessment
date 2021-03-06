import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCommunicationModule } from './component-communication/component-communication.module';
import { CrudModule } from './crud/crud.module';
import { DisplayHideModule } from './display-hide/display-hide.module';
import { GraphsModule } from './graphs/graphs.module';
import { InicioModule } from './inicio/inicio.module';
import { LightSwitchModule } from './light-switch/light-switch.module';
import { SearchOnTypeModule } from './search-on-type/search-on-type.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InicioModule,
    DisplayHideModule,
    SearchOnTypeModule,
    ComponentCommunicationModule,
    CrudModule,
    LightSwitchModule,
    GraphsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
