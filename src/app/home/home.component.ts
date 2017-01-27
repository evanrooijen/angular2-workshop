/**
 * Created by Elmer on 27-1-2017.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'aws-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  usersString: Array<any>;
  usersObj: Array<any>;

  homeUser: any;


  constructor() {

    this.usersString = [
      'Elmer',
      'Jeroen',
      'Jelle',
      'Martijn',
      'Ariska',
      'Sebastian'
    ];

    this.usersObj = [
      {name: "Elmer", age: 25},
      {name: "Jeroen", age: 24}
    ];

  }

  ngOnInit() {
  }

  setUser(user: any){
    this.homeUser = user;
  }

}
