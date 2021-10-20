import { Component } from '@angular/core';

interface MenuItem {
  txt: string;
  rt: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    { txt: 'Basics', rt: './template/basics' },
    { txt: 'Dinamics', rt: './template/dinamics' },
    { txt: 'Switchs', rt: './template/switchs' },
  ];
  reactiveMenu: MenuItem[] = [
    { txt: 'Basics', rt: './reactive/basics' },
    { txt: 'Dinamics', rt: './reactive/dinamics' },
    { txt: 'Switchs', rt: './reactive/switchs' },
  ];
  authMenu: MenuItem[] = [
    { txt: 'Registry', rt: './auth/registry' },
    { txt: 'Login', rt: './auth/login' },
  ];  
}
