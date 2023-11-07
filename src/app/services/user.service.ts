import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = environment.url

  constructor(
    private client : HttpClient
  ) { }

  getAll() : Observable<User[]> {
    return this.client.get<User[]>(this.url + "user")
  }

  isConnected! : boolean

  observableSubject : Subject<boolean> = new Subject<boolean>()

  login() {
    this.isConnected = true;
    this.observableSubject.next(this.isConnected)
  }

  logout() {
    this.isConnected = false;
    this.observableSubject.next(this.isConnected)

  }
}
