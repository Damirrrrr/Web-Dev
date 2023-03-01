import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { PhonesComponent } from './phones/phones.component';
import { TvComponent } from './tv/tv.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'laptops', component: ProductListComponent },
      { path: 'phones', component: PhonesComponent},
      { path: 'tv', component: TvComponent},
      { path: 'keyboards', component: KeyboardsComponent},
      { path: '**', component: NotFoundComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    PhonesComponent,
    TvComponent,
    KeyboardsComponent,
    NotFoundComponent,
    MainComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/