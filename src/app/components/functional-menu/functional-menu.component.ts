import { Component, OnInit } from '@angular/core';
import {VariantService} from '../../services/variant.service';

@Component({
  selector: 'app-functional-menu',
  templateUrl: './functional-menu.component.html',
  styleUrls: ['./functional-menu.component.scss']
})
export class FunctionalMenuComponent implements OnInit {
  public variant: string;

  // TODO: set defaults via configs
  selectedCountry = 'USA';
  selectedLanguage = '0';

  // TODO: set this to fill from countryList
  countries = [
    {value: 'USA', viewValue: 'United States'},
    {value: 'CAN', viewValue: 'Canada'},
    {value: 'MEX', viewValue: 'Mexico'}
  ];

  // TODO: set this to dynamically populate based on country
  languages = [
    {value: '0', viewValue: 'English'},
    {value: '1', viewValue: 'French'},
    {value: '2', viewValue: 'Spanish'}
  ];

  constructor() {
    this.variant = VariantService.CURRENT_VARIANT;
  }

  ngOnInit() {}

  public changeLocale(): void {
    // TODO: change to necessary logic.
    console.log(this.selectedCountry + ' ' + this.selectedLanguage);
  }

}
