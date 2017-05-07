
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavItemComponent implements OnInit {

myList = [
{
  id:1,
  txt: 'item 1' 
},
{
  id:2,
  txt: 'item 2' 
},
{
  id:3 ,
  txt: 'item 3'
},
{
  id:4,
  txt: 'item 4' 
}
];

  constructor() { }

  ngOnInit() {
  }

}