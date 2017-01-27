/**
 * Created by Elmer on 27-1-2017.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";

@Component({
  selector: 'aws-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  usersString: Array<any>;
  usersObj: Array<any>;

  homeUser: any;


  constructor(private userService: UserService) {
    this.usersString = this.userService.usersString;
    this.usersObj = this.userService.usersObj;
  }

  ngOnInit() {
  }

  setUser(user: any){
    this.homeUser = user;
  }

}
