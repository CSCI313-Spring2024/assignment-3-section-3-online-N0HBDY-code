import {Component, inject} from '@angular/core';
import {HousingService} from '../housing.service';
import { HouseingLocationComponent } from '../houseing-location/houseing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HouseingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor(){
  //setting housingLocationlist to the data array in HousingService
  this.housingLocationList = this.housingService.getAllHousingLocations();
  //setting initial filteredLocationList to the housingLocationList.
  this.filteredLocationList = this.housingLocationList;
  }
  //method to filter the housinglocations based on the search term.
  filterResults(text:string){
  if (!text) {
  this.filteredLocationList = this.housingLocationList;
  return;
  }
  this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
  housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
  );
  }
  }
