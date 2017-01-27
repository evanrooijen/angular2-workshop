/**
 * Created by Elmer on 27-1-2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {AWSUser} from "../../models/user.model";

@Component({
  selector: 'aws-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  userlist: Array<AWSUser>;

  @Output()
  selectedUser: EventEmitter<AWSUser> = new EventEmitter<AWSUser>();

  constructor() {
  }

  ngOnInit() {
  }


  selectUser(user: AWSUser): void {

    this.selectedUser.emit(user);

  }

}
