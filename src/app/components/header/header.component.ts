import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isConnected! : boolean
  constructor(private _service : UserService){}

  ngOnInit() {
    this._service.observableSubject.subscribe({
      next : (info : boolean) => this.isConnected = info
    })
  }
}
