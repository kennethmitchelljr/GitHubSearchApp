import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  { 

    user: any;
    repos: any[];
    username: string;

    constructor(private _github : GithubService){ 
        this.user = false;
    }

    searchUser(){
        this._github.updateUser(this.username)
          
        this._github.getUser().subscribe(user => {
            this.user = user;
        });

         this._github.getRepos().subscribe(repos => {
            this.repos = repos;
        });

    }
}
