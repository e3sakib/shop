import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  checkLogin(){



    if(this.login.username == "admin" && this.login.password == "123"){
        alert("Login Successful");
        this.router.navigate(["location"])
    }else{
      alert("Username or password not match")
    }
    

    console.log(this.login);
  }

}