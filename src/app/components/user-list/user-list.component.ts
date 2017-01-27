/**
 * Created by Elmer on 27-1-2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'aws-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

    @Input()
    userlist: Array<any>;

    @Output()
    selectedUser: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }


    selectUser(index: number){

      const user = this.userlist[index];
      this.selectedUser.emit(user);

    }

}
