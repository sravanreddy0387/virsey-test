import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WordSearchComponent } from '../../components/word-search/word-search.component';

@NgModule({
  declarations: [
    WordSearchComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [WordSearchComponent]
  
})
export class WordSearchModule { }