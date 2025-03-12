import { Component } from '@angular/core';
import { HouseingLocationComponent } from '../houseing-location/houseing-location.component';
import {HousingLocation} from '../housinglocation';
@Component({
  selector: 'app-home',
  imports: [HouseingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
  id: 9999,
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: `${this.baseUrl}/example-house.jpg`,
  availableUnits: 99,
  wifi: true,
  laundry: false,
  };
  
}
