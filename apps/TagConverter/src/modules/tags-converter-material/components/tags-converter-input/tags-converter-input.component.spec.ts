import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsConverterInputComponent } from './tags-converter-input.component';

describe('TagsConverterInputComponent', () => {
  let component: TagsConverterInputComponent;
  let fixture: ComponentFixture<TagsConverterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsConverterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsConverterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
