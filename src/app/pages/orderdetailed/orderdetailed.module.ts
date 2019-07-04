import { SelectproductsPageModule } from './../selectproducts/selectproducts.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderdetailedPage } from './orderdetailed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderdetailedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [OrderdetailedPage]
})
export class OrderdetailedPageModule {}
