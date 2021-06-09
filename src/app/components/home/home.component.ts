import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {devServerTargetSpec} from '@angular-devkit/build-angular/src/test-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  xAll = 8735448;
  yAll = 8663684;

  xNat = 8634251;
  yNat = 8462967;

  xInt = 101197;
  yInt = 200717;

  dInt = this.xInt - this.yInt;
  dNat = this.xNat - this.yNat;
  dAll = this.xAll - this.yAll;

  pInt = 100;
  pNat = 99.84;
  pAll = 99.70;

  // lastUpd?: Date;
  date = new Date(new Date().getTime());
  lastUpd = `${this.date.getHours()}:${this.date.getMinutes()}`;

  countries: any[] = [];

  constructor( private http: HttpClient) {

    console.log('Here!');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data: any) => {
      console.log(data);
      this.countries = data;
    });

  }

  ngOnInit(): void {
  }


}
