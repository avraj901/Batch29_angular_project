import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:5000/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return this.http.get(BASE_URL);
  }

  createUser(user: { firstname: string; lastname: string; gender: string }) {
    return this.http.post(BASE_URL, user);
  }

  deleteuser(user: any) {
    return this.http.delete(BASE_URL, user.id);
  }
  constructor(public http: HttpClient) { }
}
