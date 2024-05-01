import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardSellComponent } from './component/dashboard-sell/dashboard-sell.component';
import { SummaryComponent } from './component/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InventoryComponent,
    DashboardComponent,
    DashboardSellComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
