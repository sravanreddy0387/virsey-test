import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WordSearchService } from '../..//../services/word-search\/word-search.service';
import * as WordSearchActions from '../../actions/word-search.actions';



@Injectable()
export class WordSearchEffects {

  loadGridData$ = createEffect(() => this.actions$.pipe(
    ofType(WordSearchActions.WordSearchGetGridData),
    mergeMap(() => this.wordSearchService.getGridData().pipe(
      map(data => WordSearchActions.wordSearchGetGridDataSuccess({ data }),
      catchError((err) => of(WordSearchActions.wordSearchGetGridDataFailure({error: err})))
      ),
    ))
  ));

  getWords$ = createEffect(() => this.actions$.pipe(
    ofType(WordSearchActions.WordSearchGetWords),
    mergeMap(() => this.wordSearchService.getWords().pipe(
      map(data => WordSearchActions.wordSearchGetWordsSuccess({ data }),
      catchError((err) => of(WordSearchActions.wordSearchGetWordsFailure({error: err})))
      )
    ))
  ));

  constructor(private actions$: Actions, private wordSearchService: WordSearchService) {

  }

}
