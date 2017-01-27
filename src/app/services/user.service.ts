/**
 * Created by Elmer on 27-1-2017.
 */
import {Injectable} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {Http, Response} from "@angular/http";

@Injectable()
export class UserService {

  selectedUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedUser$: Observable<any>;

  userlistSubject: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  userlist$: Observable<Array<any>>;


  constructor(private http: Http) {

    this.selectedUser$ = this.selectedUserSubject.asObservable();
    this.userlist$ = this.userlistSubject.asObservable();

    this.getUsers();


  }

  setSelectedUser(user: any) {
    this.selectedUserSubject.next(user);
  }

  private getUsers() {

    this.http.get('https://randomuser.me/api/?results=10&inc=name,email')
      .map(this.extractData)
      .subscribe((data) => {
        this.userlistSubject.next(data);
      });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || [];
  }

}
