import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderfinishedPage } from './orderfinished.page';

const routes: Routes = [
  {
    path: '',
    component: OrderfinishedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderfinishedPage]
})
export class OrderfinishedPageModule {}
