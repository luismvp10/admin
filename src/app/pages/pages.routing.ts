import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RjxsComponent} from './rjxs/rjxs.component';



const routes: Routes = [

  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBar'}},
      { path: 'charts', component: Grafica1Component, data: { title: 'Gráficas'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes de cuenta'}},
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas'}},
      { path: 'rxjs', component: RjxsComponent, data: { title: 'RXJS'}}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
