import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repo: Repo;
  constructor(public repService: UserService) { }

  repoSearch(searchName) {
    this.repService.getRepos(searchName).then(
      (results) => {
        this.repo = this.repService.getRepo;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
