import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {UserStorageService} from "../../user-storage.service";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage : UserStorageService, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getUser()
  }

  users: User[] = [];

  getUser() {
    this.httpClient.getUsers().subscribe(users => this.users = users);
  }

  removeUser(id: number) {
    this.httpClient.removeUsers(id).subscribe(r =>{
      this.getUser();
    });
  }

}
