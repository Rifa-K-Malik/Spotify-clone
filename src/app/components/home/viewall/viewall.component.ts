import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.scss']
})
export class ViewallComponent implements OnInit {
cards: any[];
  constructor() { }

  ngOnInit(): void {
    this.array()
  }
  array(){
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
        {
          img: 'assets/img/song5.png',
          songtitle: 'First Day Back',
          bandname: 'Stitcher and Tally Abecassis'
        },
        {
          img: 'assets/img/song6.png',
          songtitle: 'Resistance',
          bandname: 'Gimlet'
        },
        {
          img: 'assets/img/song7.png',
          songtitle: 'In the Dark',
          bandname: 'APM Reports'
        },
        {
          img: 'assets/img/song8.png',
          songtitle: 'In the Dark',
          bandname: 'APM Reports'
        },
        {
          img: 'assets/img/song9.png',
          songtitle: 'Natal',
          bandname: 'The Woodshadow, You Had Me at Blacl'
        }
      ] 
  }

}
