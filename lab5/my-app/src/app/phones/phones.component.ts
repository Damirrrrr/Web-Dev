import { Component, Input, Output, EventEmitter } from '@angular/core';
import { phones } from './phones';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {
  products = [...phones];

  share(url: string) {
    var message = window.prompt()
    var link = "https://t.me/share/url?url="+url+"&text="+message;
    window.open(link);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}