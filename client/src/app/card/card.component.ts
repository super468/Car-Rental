import { Component, Input } from '@angular/core';
import { CARES } from '../car';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() public car;

}
