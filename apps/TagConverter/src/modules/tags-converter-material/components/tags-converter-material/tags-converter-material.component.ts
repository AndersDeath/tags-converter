import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TagsConverterCoreService } from '../../../tags-converter-core-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-converter-material',
  templateUrl: './tags-converter-material.component.html',
  styleUrls: ['./tags-converter-material.component.scss']
})
export class TagsConverterMaterialComponent implements OnInit {

  public version = 'v.0.0.1';
  public tags: any = {
    input: '',
    output: '',
  };

  private modes = this.tagsCore.modes;

  public options: any = {
    left: 'space',
    right: 'hash'
  };

  public convertOption: string = this.options.left + '_' + this.options.right;

  public history: any = [];
  public collections: any = [];

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

  constructor(
    private clipboard: ClipboardService,
    private translate: TranslateService,
    private snackBar: MatSnackBar,
    private tagsCore: TagsConverterCoreService
  ) {
  }

  public ngOnInit(): void {
    // // this.tags.input = 'sdsd sdsd2 wqeew1';
    // this.tags.input = '#sdsd #sdsd2 #wqeew1';
    // // this.tags.input = 'sdsd ,sdsd2, wqeew1';
    this.getHistory();
    this.getCollections();
  }

  public convert(): void {
    this.modes.forEach((mode) => {
      this.tags.output = this.convertOption === mode ? this.tagsCore.convertationHandler(mode, this.tags.input) : this.tags.output;
    });
    this.tagsCore.setData('history', { input: this.tags.input, output: this.tags.output, date: new Date() });
    this.getHistory();
  }

  public clear(type) {
    this.tags[type] = '';
  }

  public addCollection() {
    this.tagsCore.setData('collections', {
      id: this.tagsCore.getId(),
      output: this.tags.output,
      date: new Date()
    });
    this.getCollections();
  }

  public removeCollection(id) {
    this.tagsCore.removeCollectionById(id);
    this.getCollections();
  }


  public tagsChange(data, type) {
    this.tags[type] = data;
  }

  public getCollections() {
    this.collections = this.tagsCore.getData('collections').reverse();
  }

  public copyToClipboard(text) {
    this.clipboard.copyFromContent(text);
    this.openSnackBar('Text is copied to clipboard');
  }

  public selectorChange(event) {
    this.convertOption = event;
  }

  public optionsChange(event, side) {
    side = side === 'left' ? 'right' : 'left';
    this.optionsChangingRules.forEach((e) => {
      this.options[side] = this.getRule(e, event, this.options[side]);
    });
    this.convertOption = this.options.left + '_' + this.options.right;
  }

  private getRule(e, event, option?) {
    if (event === e.from && event === option) {
      option = e.to;
    }
    return option;
  }

  private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  private getHistory() {
    this.history = this.tagsCore.getData('history').reverse();
  }
}
