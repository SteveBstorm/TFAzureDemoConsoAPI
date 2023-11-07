import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent {

  list! : User[]
  constructor(private _service : UserService){}

  ngOnInit(){
    this._service.getAll().subscribe({
      next : (info : User[]) =>  {
        console.log(info)
        this.list = info
      }
    })
  }
}
