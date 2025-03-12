import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-houseing-location',
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './houseing-location.component.html',
  styleUrl: './houseing-location.component.css'
})
export class HouseingLocationComponent {

  @Input() housingLocation!: HousingLocation;
  
}
