import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    token: string = ''
    
    constructor() { }

    getToken(){
	return this.token;
    }

    setToken(newToken: string){
	this.token = newToken
    }
    
}
