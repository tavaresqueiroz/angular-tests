import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  getImage() {
    return "http://lorempixel.com/500/500/nightlife/";
  }  

  ngOnInit() {
  }

}
