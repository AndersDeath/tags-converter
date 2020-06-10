import { Injectable } from '@angular/core';
@Injectable()
export class TagsService {
  defaultTable = { collections: [], history: [] };

  constructor() {
    this.checkSearchTbl();
  }

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
      if(id !== item.id) {
        return item;
      } else {
        k = key;
      }
    });
    this.updateCollections(data);
  }

}
