import { Component, Input } from '@angular/core';
import {Car} from "../class/car";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() public car: Car;

}
