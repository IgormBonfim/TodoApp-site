import { Component } from '@angular/core';

import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public iconeMenu = faBars;
  public iconeUsuario = faUser;

}
