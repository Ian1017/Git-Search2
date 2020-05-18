import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

user: User;
repo: Repo;

constructor(public myService: UserService, private repoService: UserService) {}

searchs(searchName) {
  this.myService.searchUser(searchName).then(
    (success) => {
      this.user = this.myService.getUser;
    },
    (error) => {
      console.log(error);
    }
  );
  this.repoService.getRepos(searchName).then(
      (results) => {
        this.repo = this.repoService.getRepo;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );

}
ngOnInit() {
this.searchs('ian1017');
  }

}
