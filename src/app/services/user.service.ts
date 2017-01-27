/**
 * Created by Elmer on 27-1-2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  usersString: Array<any>;
  usersObj: Array<any>;


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

}
