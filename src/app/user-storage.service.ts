import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  private users: User[] = [
    {id:1, login: 'login1', email: 'aaa@aa.aa', age: 22, country: 'Polska', active: true},
    {id:2, login: 'login2', email: 'bbb@aa.aa', age: 36, country: 'Polska', active: false},
    {id:3, login: 'login3', email: 'ccc@aa.aa', age: 87, country: 'USA', active: true}
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  removeUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(userIndex, 1);
  }

  private idCount: number = 4;

  saveUser(user: User) {
    if (user.id){
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number) {
    const userIndex =  this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }

}
