import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/reducer/word-search/word-search.reducer';
import * as Actions from '../../store/actions/word-search.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface searchResult {
  word: String;
  result: string;
}

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.scss']
})


export class WordSearchComponent implements OnInit, OnDestroy {
  public gridData: Array<string>[];
  public searchWords: string[];
  public serachResults: searchResult[] = []; 
  public ROW: number = 0;
  public COL: number = 0;
  private onDestroy$: Subject<void> = new Subject<void>();
  
  constructor(private store$: Store<{ state: State }>) { }

  ngOnInit(): void {
    this.store$.dispatch(Actions.WordSearchGetGridData());
    this.store$.dispatch(Actions.WordSearchGetWords());
    this.store$.pipe(select(state => state.state))
    .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        this.gridData = data.gridData;
        this.searchWords = data.searchWords;
        this.ROW = this.gridData.length;
        this.COL = this.gridData[0] && this.gridData[0].length;
      })
  }

  public findWords() {
    this.searchWords.map((item) => {
      for (let i = 0; i < this.ROW; ++i) {
        for (let j = 0; j < this.COL; ++j) {
          if (this.gridData[i][j] == item[0]) {
            this.search(this.gridData, i, j, -1, -1, item, "", 0, item.split('').length - 1);
          }
        }
      }
    })
  }

  private isCharValid(row, col, prevRow, prevCol) {
    return (row >= 0) && (row < this.ROW) &&
      (col >= 0) && (col < this.COL) &&
      !(row == prevRow && col == prevCol);
  }

  public search(grid, row, col, prevRow, prevCol, word, path, index, n) {

    const rowNum = [-1, -1, -1, 0, 0, 1, 1, 1];

    const colNum = [-1, 0, 1, -1, 1, -1, 0, 1];

    if (index > n || grid[row][col] != word[index])
      return;

    if (index === 0) {
      path += (word ) + " found at [" + (row).toString() + ", " + (col).toString() + "] ";
    }

    if (index === n) {
      path += " to [" + (row).toString() + ", " + (col).toString() + "] ";
      const found = this.serachResults.some(el => el.word === word);
      if (!found) this.serachResults.push({word, result:path});
      return ;
    }
    
    for (let k = 0; k < 8; ++k)
      if (this.isCharValid(row + rowNum[k], col + colNum[k], prevRow, prevCol))
            this.search(grid, row + rowNum[k], col + colNum[k], row, col, word, path, index + 1, n);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
