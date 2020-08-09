import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsConverterMaterialComponent } from './tags-converter-material.component';

describe('TagsCoreComponent', () => {
  let component: TagsConverterMaterialComponent;
  let fixture: ComponentFixture<TagsConverterMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsConverterMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsConverterMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
