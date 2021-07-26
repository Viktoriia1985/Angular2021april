import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {User2Service} from "./services/user2.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HELLO Angular! Hello';

  // constructor(private userService: UserService, private user2Service: User2Service)  {
  //   this.userService.doSomeStuff();
  //   this.user2Service.doAnotherStuff();
  //
  // }

  constructor() {

  }

}
