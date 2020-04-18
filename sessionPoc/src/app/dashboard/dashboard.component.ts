import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchText;
  companyData = [
    { name: 'facebook', symbol: 'FB' },
    { name: 'schwab' , symbol: 'SCH'},
    { name: 'mphasis' , symbol: 'MPH'},
    { name: 'twitter' , symbol: 'TWT' },
    { name: 'IBM' , symbol: 'IBM'},
    { name: 'Google' , symbol: 'GOG'},
    { name: 'Amazon' , symbol: 'AZN'},
    { name: 'Intel' , symbol: 'ITL'},
    { name: 'Moss Adams' , symbol: 'MA'},
    { name: 'Avalon' , symbol: 'A'}
  ];


}
