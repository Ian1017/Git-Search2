import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.getUser = new User('', '', '', '', 0, 0, 0, '', new Date());
    this.getRepo =  new Repo('', '', '', new Date(),'');

  }
}
