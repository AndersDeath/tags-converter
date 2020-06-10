// This is TagsConverterCoreService.
// maybe stable version 20.03.23.12

import { Injectable } from '@angular/core';
@Injectable()
export class TagsConverterCoreService {
  public modes = ['comma_hash', 'hash_comma', 'space_comma', 'space_hash', 'hash_space', 'comma_space'];

  private correspondenceTable = {
    space : ' ',
    comma: ',',
    hash: '#'
  };

  constructor() {
    this.checkSearchTbl();
  }

  private defaultTable = { collections: [], history: [] };

  public checkSearchTbl() {
    const cleanTbl = this.defaultTable;
    const tbl = localStorage.getItem('Tags');
    if (tbl === null) {
      localStorage.setItem('Tags', JSON.stringify(cleanTbl));
    }
  }

  public getData(type: string) {
    const tbl = localStorage.getItem('Tags');
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
    localStorage.setItem('Tags', JSON.stringify(tbl));
  }

  public updateCollections(data) {
    const storage = this.getData('all');
    storage.collections = data;
    localStorage.setItem('Tags', JSON.stringify(storage));
  }

  public cleanAll() {
    localStorage.setItem('Tags', JSON.stringify(this.defaultTable));
  }

  public getId(): string {
    return `id${Date.now() + Math.random() * (Date.now() - 0) + 0}`;
  }

  public removeCollectionById(id) {
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

  private outputStringPrepare(e, to) {
    return (to !== ',' ? ' ' : '') + (to !== ' ' ? to : '') + (to === ',' ? ' ' : '') +
      e
        .trim()
        .replace(/ +/g, '')
        .toLowerCase();
  }

  private prepareStringToReturn(newString, to) {
    return ((to === ',' || to === ' ') ? newString.substr(1).trim() : newString.trim());
  }
}
