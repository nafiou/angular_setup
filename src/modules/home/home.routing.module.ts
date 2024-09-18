import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { WalletsComponent } from "./pages/wallets/wallets.component";
import { PaymentsComponent } from "./pages/payments/payments.component";
import { TransactionsComponent } from "./pages/transactions/transactions.component";
import { ApprovalsComponent } from "./pages/approvals/approvals.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
            path: '',
            component: HomePageComponent
        },
        {
            path: "wallet",
            component: WalletsComponent
        },
        {
            path: 'payment',
            component: PaymentsComponent
        },
        {
            path: 'transaction',
            component: TransactionsComponent
        },
        {
            path: 'approval',
            component: ApprovalsComponent
        }
    ]
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}