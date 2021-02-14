import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {
  
  constructor() { }
  showImage:boolean = false;
  toggleImage():void{
    this.showImage = ! this.showImage
    console.log(this.showImage)
  }

  ngOnInit(): void {
  }

}
