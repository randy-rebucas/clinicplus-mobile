import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss'],
})
export class ToolbarButtonsComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }

}
