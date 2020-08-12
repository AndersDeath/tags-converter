import { Injectable } from '@angular/core';
import { MODES, STORAGE } from '../interfaces';


@Injectable()
export class TagsConverterCoreService {
  public modes = Object.keys(MODES);

  private correspondenceTable = {
    space : ' ',
    comma: ',',
    hash: '#'
  };

  private defaultTable = { collections: [], history: [] };

  constructor() {
    this.checkSearchTbl();
  }


  public checkSearchTbl(): void {
    const cleanTbl = this.defaultTable;
    const tbl = localStorage.getItem(STORAGE.TAGS);
    if (tbl === null) {
      localStorage.setItem(STORAGE.TAGS, JSON.stringify(cleanTbl));
    }
  }

  public getData(type: string) {
    const tbl = localStorage.getItem(STORAGE.TAGS);
    if (type === 'all') {
      return JSON.parse(tbl);
    } else {
      return JSON.parse(tbl)[type];
    }
  }

  public setData(type, obj) {
    let tbl: any;
    tbl = this.getData('all');
    if (tbl[type].length >= 5) {
      tbl[type].splice(0, 1);
    }
    tbl[type].push(obj);
    localStorage.setItem(STORAGE.TAGS, JSON.stringify(tbl));
  }

  public updateCollections(data) {
    const storage = this.getData('all');
    storage.collections = data;
    localStorage.setItem(STORAGE.TAGS, JSON.stringify(storage));
  }

  public cleanAll(): void {
    localStorage.setItem(STORAGE.TAGS, JSON.stringify(this.defaultTable));
  }

  public getId(): string {
    return `id${Date.now() + Math.random() * (Date.now() - 0) + 0}`;
  }

  public removeCollectionById(id): void {
    let data = this.getData('collections');
    let k = '';
    data = data.filter((item, key) => {
      if (id !== item.id) {
        return item;
      } else {
        k = key;
      }
    });
    this.updateCollections(data);
  }

  public convertationHandler(option, input: string): string {
    const from = this.correspondenceTable[option.split('_')[0]];
    const to = this.correspondenceTable[option.split('_')[1]];
    let newString = '';
    if (to === '#' && input.trim().search((to === ',' ? ', ' : to)) !== -1) {
      return input;
    }
    if (input.trim().search(`${from}`) !== -1) {
      input.split(from).forEach(e => {
        if (e.trim() !== '') {
          newString += this.outputStringPrepare(e, to);
        }
      });
      return this.prepareStringToReturn(newString, to);
    }
    return input;
  }

  private outputStringPrepare(e: string, to: string): string {
    return (to !== ',' ? ' ' : '') + (to !== ' ' ? to : '') + (to === ',' ? ' ' : '') +
      e
        .trim()
        .replace(/ +/g, '')
        .toLowerCase();
  }

  private prepareStringToReturn(newString: string, to: string): string {
    return ((to === ',' || to === ' ') ? newString.substr(1).trim() : newString.trim());
  }
}
