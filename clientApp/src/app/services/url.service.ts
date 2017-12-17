import { Injectable } from '@angular/core';

@Injectable()
export class UrlService{

    url: string = "https://localhost"
    
    constructor() { }

    getUrl(){
	return this.url;
    }
}
