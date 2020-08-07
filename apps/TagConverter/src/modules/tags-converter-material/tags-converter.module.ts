import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TagsConverterMaterialComponent } from './components/tags-converter-material/tags-converter-material.component';
import { TagsConverterHeaderComponent } from './components/tags-converter-header/tags-converter-header.component';
import { TagsConverterInputComponent } from './components/tags-converter-input/tags-converter-input.component';
import { TagsConverterCoreService } from '../tags-converter-core-service';
import { TagsConverterSelectorComponent } from './components/tags-converter-selector/tags-converter-selector.component';
import { TagsConverterExpansionPanelComponent } from './components/tags-converter-expansion-panel/tags-converter-expansion-panel.component';

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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
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
