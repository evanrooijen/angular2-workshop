/**
 * Created by Elmer on 27-1-2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'aws-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  usersString: Array<any>;
  usersObj: Array<any>;


  subscriptions: Subscription = new Subscription();

  homeUser: any;


  constructor(private userService: UserService) {
    this.usersString = this.userService.usersString;
    this.usersObj = this.userService.usersObj;
  }

  ngOnInit() {
    this.subscriptions.add(this.userService.selectedUser$.subscribe((user: any) => {
      this.homeUser = user;
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setUser(user: any){
    this.userService.setSelectedUser(user);
  }

}
