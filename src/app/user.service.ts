import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.getUser = new User('', '', '', '', 0, 0, 0, '', new Date());
    this.getRepo =  new Repo('', '', '', new Date(),'');

  
    searchUser(searchName: string) {

      interface Response {
        url: string;
        login: string;
        html_url: string;
        location: string;
        public_repos: number;
        followers: number;
        following: number;
        avatar_url: string;
        created_at: Date;
      }
  
  
      // get the username
      return new Promise((resolve, reject) => {
        this.http.get<Response>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apiKey).toPromise()
        .then((result) => {
          this.getUser = result;
          resolve();
        }, (error) => {
        console.log(error);
        reject();
        });
      });
    }
  }
}
