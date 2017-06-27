import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  { 

    constructor(private _github : GithubService){
        this._github.getUser().subscribe(user => {
            console.log(user);
        });

    }
}
