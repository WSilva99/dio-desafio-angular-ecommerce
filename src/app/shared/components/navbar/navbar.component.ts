import { Component, OnInit } from '@angular/core';

type User = {
  username: String,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: User = {
    username: "John Doe"
  }

  // isSigned = this.user !== null;
  isSigned = false;

}
