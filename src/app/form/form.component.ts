import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchName: string;
  @Output()  searchOutput = new EventEmitter<any>();


  constructor() {

  }

  ngOnInit() {
  }

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = '';
  }

}
