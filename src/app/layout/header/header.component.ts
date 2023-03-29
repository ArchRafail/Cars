import {Component, OnInit} from '@angular/core';
import { MenuItem } from "primeng/api";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/vehicles', routerLinkActiveOptions: { exact: true } },
      { label: 'Add vehicle', icon: 'pi pi-fw pi-plus-circle', routerLink: '/vehicles/item', routerLinkActiveOptions: { exact: true } }
    ];

    this.activeItem = this.items[0];
  }

}
