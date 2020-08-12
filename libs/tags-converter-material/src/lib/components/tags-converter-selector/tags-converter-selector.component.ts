import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';


/**
 * TODO: Add types for this module
 */

/**
 * Tags converter main selector
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-selector',
  templateUrl: './tags-converter-selector.component.html',
  styleUrls: ['./tags-converter-selector.component.scss']
})
export class TagsConverterSelectorComponent implements OnInit {
  /**
   * Selector output event
   */
  @Output() modelChange = new EventEmitter();

  /**
   * Selection options collection
   */
  public options: any = {
    left: 'space',
    right: 'hash'
  };

  /**
   * Options changing rules
   */
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

  /**
   * Class constructor
   */
  constructor() { }

  /**
   * Angular lifecycle method
   */
  ngOnInit(): void { }

  /**
   * Option change handler
   * @param event
   * @param side
   */
  public optionsChange(event: any, side: any) {
    side = side === 'left' ? 'right' : 'left';
    this.optionsChangingRules.forEach((e) => {
      this.options[side] = this.getRule(e, event, this.options[side]);
    });
    this.modelChange.emit(this.options.left + '_' + this.options.right);
  }

  /**
   * Rule getter
   * @param e
   * @param event
   * @param option
   */
  private getRule(e: any, event: any, option?: any) {
    if (event === e.from && event === option) {
      option = e.to;
    }
    return option;
  }

}
