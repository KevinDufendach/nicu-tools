import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { PreEclampsiaCalcComponent } from './pre-eclampsia-calc/pre-eclampsia-calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ToolsDashboardComponent } from './tools-dashboard/tools-dashboard.component';
import { ToolsTableComponent } from './tools-table/tools-table.component';

const appRoutes: Routes = [
  {path: 'pre-e', component: PreEclampsiaCalcComponent},
  {path: 'dashboard', component: ToolsDashboardComponent},
  {path: 'table', component: ToolsTableComponent},
  {path: '', redirectTo: '/pre-e', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PreEclampsiaCalcComponent,
    MainNavComponent,
    ToolsDashboardComponent,
    ToolsTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
