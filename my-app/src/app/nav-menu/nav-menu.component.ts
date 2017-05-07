import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

myList = [
{
  id:1,
  txt: 'meitar 1' 
},
{
  id:2,
  txt: 'meitar 2' 
},
{
  id:3 ,
  txt: 'meitar 3'
},
{
  id:4,
  txt: 'meitar 4' 
}
];

  constructor() { }

  ngOnInit() {
  }

}
