import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  
  constructor() { }


nav_arr=[
    {
      id : '1',
      txt: 'home'
    },
    {
      id : '2',
      txt: 'my project'
    },
    {
      id : '3',
      txt:'help'
    },
    {
      id : '4',
      txt:'setting'
    }
  ];

  ngOnInit() {
  }

}
