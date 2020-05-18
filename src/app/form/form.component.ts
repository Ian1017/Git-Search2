import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output()  searchOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = '';
  }
}
