import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-selector',
  templateUrl: './tags-converter-selector.component.html',
  styleUrls: ['./tags-converter-selector.component.scss']
})
export class TagsConverterSelectorComponent implements OnInit {
  @Output() modelChange = new EventEmitter();

  public options: any = {
    left: 'space',
    right: 'hash'
  };

  private optionsChangingRules = [
    {
      from: 'space',
      to: 'comma'
    },
    {
      from: 'comma',
      to: 'space'
    },
    {
      from: 'hash',
      to: 'comma'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public optionsChange(event, side) {
    side = side === 'left' ? 'right' : 'left';
    this.optionsChangingRules.forEach((e) => {
      this.options[side] = this.getRule(e, event, this.options[side]);
    });
    this.modelChange.emit(this.options.left + '_' + this.options.right);
  }

  private getRule(e, event, option?) {
    if (event === e.from && event === option) {
      option = e.to;
    }
    return option;
  }

}
