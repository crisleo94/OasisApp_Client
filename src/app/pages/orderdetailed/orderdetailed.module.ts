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
    RouterModule.forChild(routes)
  ],
  declarations: [OrderdetailedPage]
})
export class OrderdetailedPageModule {}
