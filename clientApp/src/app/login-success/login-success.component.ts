import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

    constructor(auth: AuthService,
		private route: ActivatedRoute) { }

    ngOnInit() {
	this.route.queryParams.subscribe((params: Params) => {
            const token = params['token'];
            console.log(token);
	    auth.setToken(token);
	});
    }

}
