import { Component, Input } from '@angular/core';

/**
 * Tags converter header
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-header',
  templateUrl: './tags-converter-header.component.html',
  styleUrls: ['./tags-converter-header.component.scss']
})
export class TagsConverterHeaderComponent {
  /**
   * Tags converter header title
   */
  @Input() title: string;
  /**
   * Tags converter header subtitle
   */
  @Input() subtitle: string;
}
