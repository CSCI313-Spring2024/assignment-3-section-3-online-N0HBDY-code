import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-houseing-location',
  imports: [],
  templateUrl: './houseing-location.component.html',
  styleUrl: './houseing-location.component.css'
})
export class HouseingLocationComponent {

  @Input() housingLocation!: HousingLocation;
  
}
