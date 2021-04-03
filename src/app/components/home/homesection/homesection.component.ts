import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesection',
  templateUrl: './homesection.component.html',
  styleUrls: ['./homesection.component.scss']
})
export class HomesectionComponent implements OnInit {
  songs: any[];

  constructor() { }

  ngOnInit(): void {
    // this.array();
  }
// array()=[
//   this.songs()={

//   }
// ]
}
