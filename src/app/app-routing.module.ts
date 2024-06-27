import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderTableComponent } from './components/purchase-order-table/purchase-order-table.component';
import { CreatePurchaseOrderComponent } from './components/create-purchase-order/create-purchase-order.component';

const routes: Routes = [
{path: '',component:PurchaseOrderTableComponent},
{path:'createOrder',component:CreatePurchaseOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
