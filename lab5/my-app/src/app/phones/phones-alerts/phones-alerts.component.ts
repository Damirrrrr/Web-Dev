import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '../phones';
@Component({
  selector: 'phones-alerts',
  templateUrl: './phones-alerts.component.html',
  styleUrls: ['./phones-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Phone | undefined;
  @Output() notify = new EventEmitter();
}