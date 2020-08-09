import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-input',
  templateUrl: './tags-converter-input.component.html',
  styleUrls: ['./tags-converter-input.component.scss']
})
export class TagsConverterInputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() model: NgModel;
  @Output() modelChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  change(e) {
    this.modelChange.emit(e);
  }

}