import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-expansion-panel',
  templateUrl: './tags-converter-expansion-panel.component.html',
  styleUrls: ['./tags-converter-expansion-panel.component.scss']
})
export class TagsConverterExpansionPanelComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;
}
