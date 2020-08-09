
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonMaterialModule } from '@tag-converter/common-material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TagsConverterMaterialComponent } from './components/tags-converter-material/tags-converter-material.component';
import { TagsConverterHeaderComponent } from './components/tags-converter-header/tags-converter-header.component';
import { TagsConverterInputComponent } from './components/tags-converter-input/tags-converter-input.component';
import { TagsConverterSelectorComponent } from './components/tags-converter-selector/tags-converter-selector.component';
import { TagsConverterExpansionPanelComponent } from './components/tags-converter-expansion-panel/tags-converter-expansion-panel.component';

import { TagsConverterCoreService } from '@tag-converter/tags-converter-core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    TagsConverterMaterialComponent,
    TagsConverterHeaderComponent,
    TagsConverterInputComponent,
    TagsConverterSelectorComponent,
    TagsConverterExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TagsConverterMaterialComponent,
  ],
  providers: [
    TagsConverterCoreService
  ],
  bootstrap: []
})
export class TagsConverterMaterialModule { }
