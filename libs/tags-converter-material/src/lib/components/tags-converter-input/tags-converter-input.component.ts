import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * Tags converter input component
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-input',
  templateUrl: './tags-converter-input.component.html',
  styleUrls: ['./tags-converter-input.component.scss']
})
export class TagsConverterInputComponent {
  /**
   * Input placeholder
   */
  @Input() placeholder = '';
  /**
   * Input model
   */
  @Input() model: NgModel;
  /**
   * Output model chagle
   */
  @Output() modelChange = new EventEmitter();
  constructor() { }

  /**
   * Model change handler
   * @param e data
   */
  change(e) {
    this.modelChange.emit(e);
  }

}
