import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouteItemComponent } from './route-item/route-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { WalletsComponent } from './pages/wallets/wallets.component';



@NgModule({
  declarations: [
    HomeComponent,
    RouteItemComponent, 
    HomePageComponent,
    ApprovalsComponent,
    PaymentsComponent,
    TransactionsComponent,
    WalletsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
