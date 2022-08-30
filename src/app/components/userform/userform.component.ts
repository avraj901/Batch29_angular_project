import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  title = "Fill the forms below";

  user: User = new User();

  users: User[] = [];

  // userDatails = {
  //   firstName: "",
  //   lastName: "",
  //   age:0
  // }
  save() {
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {
      console.log(response);
    },
      function (error) {
        console.log(error);
        alert("Something went wrong please try again");
      }
    )
    // console.log(this.userDatails.firstName+" "+this.userDatails.lastName+" "+this.userDatails.age);
    console.log(this.user.firstname, this.user.lastname, this.user.gender, this.user.age);
  }

  deleteRow(user, index) {
    const observable = this.userService.deleteuser(user);
    observable.subscribe((response: any) => {
      console.log(response);
      this.users.splice(index, 1);
    })
  }
  
  constructor(public userService: UserService) { }
  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.users = response as User[];
    })
  }
 
}
