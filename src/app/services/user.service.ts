/**
 * Created by Elmer on 27-1-2017.
 */
import {Injectable} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class UserService {

  usersString: Array<any>;
  usersObj: Array<any>;

  selectedUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedUser$: Observable<any>;


  constructor() {

    this.selectedUser$ = this.selectedUserSubject.asObservable();


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

  setSelectedUser(user: any) {
    this.selectedUserSubject.next(user);
  }

}
