import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesection',
  templateUrl: './homesection.component.html',
  styleUrls: ['./homesection.component.scss']
})
export class HomesectionComponent implements OnInit {
  songs: any[];
  cards: any[];

  constructor() { }

  ngOnInit(): void {
    this.array()
  }
array(){
  this.songs=[
    { 
      heading:'Shows to try',
      subheader: `Podcasts we think you'ii get hooked on.`
     },
    {
      heading:'Stress free ambient'   
    },
  ]
  this.cards=[
    {
      img: 'assets/img/song1.png',
      songtitle: 'First Day Back',
      bandname: 'Stitcher and Tally Abecassis'
    },
    {
      img: 'assets/img/song2.png',
      songtitle: 'Resistance',
      bandname: 'Gimlet'
    },
    {
      img: 'assets/img/song3.png',
      songtitle: 'In the Dark',
      bandname: 'APM Reports'
    },
    {
      img: 'assets/img/song4.png',
      songtitle: 'Natal',
      bandname: 'The Woodshadow, You Had Me at Blacl'
    },
  ] 
}
  
}
