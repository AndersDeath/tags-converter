import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsConverterHeaderComponent } from './tags-converter-header.component';

describe('TagsConverterHeaderComponent', () => {
  let component: TagsConverterHeaderComponent;
  let fixture: ComponentFixture<TagsConverterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsConverterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsConverterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
