/**
 * Created by Elmer on 27-1-2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {AWSUser} from "../models/user.model";

@Component({
  selector: 'aws-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  users: Array<AWSUser>;

  subscriptions: Subscription = new Subscription();

  homeUser: AWSUser;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.subscriptions.add(this.userService.selectedUser$.subscribe((user: AWSUser) => {
      this.homeUser = user;
    }));

    this.subscriptions.add(this.userService.userlist$.subscribe((users: Array<AWSUser>) => {
      this.users = users;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setUser(user: AWSUser) {
    this.userService.setSelectedUser(user);
  }

}
