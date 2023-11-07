import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService : UserService){}

  isConnected!: boolean

  ngOnInit(){
    this.userService.observableSubject.subscribe({
      next : (info : boolean) => this.isConnected = info
    })
  }

  login() {
    this.userService.login()
  }

  logout(){
    this.userService.logout()
  }
}
