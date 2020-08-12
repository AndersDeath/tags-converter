import { Component, Input } from '@angular/core';

/**
 * Tahs converter expantion panel
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-expansion-panel',
  templateUrl: './tags-converter-expansion-panel.component.html',
  styleUrls: ['./tags-converter-expansion-panel.component.scss']
})
export class TagsConverterExpansionPanelComponent {
  /**
   * Panel icon
   */
  @Input() icon: string;
  /**
   * Panel title
   */
  @Input() title: string;
  /**
   * Panel description
   */
  @Input() description: string;
}
