import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }


  // doSomeStuff() {
  //   console.log('суету навести охота');
  // }
  // doAnotherStuff() {
  //   console.log('Hello Angular');
  // }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
