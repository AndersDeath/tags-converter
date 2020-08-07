import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-header',
  templateUrl: './tags-converter-header.component.html',
  styleUrls: ['./tags-converter-header.component.scss']
})
export class TagsConverterHeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;
}
