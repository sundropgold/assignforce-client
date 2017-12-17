import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

    url = 'https://localhost';

    constructor() { }

    getUrl() {
      return this.url;
    }
}
