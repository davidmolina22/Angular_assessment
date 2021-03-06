import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './component-communication/pages/communication/communication.component';
import { CrudComponent } from './crud/pages/crud/crud.component';
import { DisplayHideComponent } from './display-hide/pages/display-hide/display-hide.component';
import { GraphsComponent } from './graphs/pages/graphs/graphs.component';
import { InicioComponent } from './inicio/pages/inicio/inicio.component';
import { LightSwitchComponent } from './light-switch/pages/light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/pages/search-on-type/search-on-type.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path: 'display_hide',
    component: DisplayHideComponent,
  },
  {
    path: 'search_on_type',
    component: SearchOnTypeComponent,
  },
  {
    path: 'communication',
    component: CommunicationComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'light_switch',
    component: LightSwitchComponent,
  },
  {
    path: 'graphs',
    component: GraphsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
