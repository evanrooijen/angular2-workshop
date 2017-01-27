/**
 * Created by Elmer on 27-1-2017.
 */
import {Injectable} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {Http, Response, URLSearchParams} from "@angular/http";
import {AWSUser} from "../models/user.model";

@Injectable()
export class UserService {

  private API_FIELDS: Array<string> = ['name', 'email'];


  selectedUserSubject: BehaviorSubject<AWSUser> = new BehaviorSubject<AWSUser>(null);
  selectedUser$: Observable<AWSUser>;

  userlistSubject: BehaviorSubject<Array<AWSUser>> = new BehaviorSubject<Array<AWSUser>>([]);
  userlist$: Observable<Array<AWSUser>>;


  constructor(private http: Http) {

    this.selectedUser$ = this.selectedUserSubject.asObservable();
    this.userlist$ = this.userlistSubject.asObservable();

    this.getUsers();


  }

  setSelectedUser(user: any): void {
    this.selectedUserSubject.next(user);
  }

  private getUsers(): void {


    let params: URLSearchParams = new URLSearchParams();
    params.set('results', '10');
    params.set('inc', this.API_FIELDS.join(','));

    this.http.get('https://randomuser.me/api/', {search: params})
      .map(this.extractData)
      .subscribe((data: Array<AWSUser>) => {
        this.userlistSubject.next(data);
      });
  }

  private extractData(res: Response): Array<AWSUser> {
    let body = res.json();
    return body.results || [];
  }

}
