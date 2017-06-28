import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '31900be7da8c9117b1f4';
    private client_secret = 'a66148210a37df143169990a472d9727293af5a8';

    constructor(private _http : Http){
        console.log('Github Service Ready.');
        this.username = 'kennethmitchelljr';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    
    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }
}