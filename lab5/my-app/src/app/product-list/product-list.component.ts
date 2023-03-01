import { Component } from '@angular/core';

import { laptops } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...laptops];

  share(url: string) {
    var message = window.prompt()
    var link = "https://t.me/share/url?url="+url+"&text="+message;
    window.open(link);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/