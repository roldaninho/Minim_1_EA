import { Injectable } from '@angular/core';
import {Environment} from "./environment";
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {

  url: Environment;

  constructor(private http: HttpClient) {
    this.url = new Environment();
  }

  createUser(user: User){
    return this.http.post(this.url.urlUser, user);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url.urlUser);
  }

  deleteUser(user: User){
    return this.http.post(this.url.urlUser + '/delete/', user);
  }

}