import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as WordSearchActions from '../../actions/word-search.actions';


export const wordSearchFeatureKey = 'wordSearch';

export interface State {
  gridData: Array<string>[],
  searchWords: string[],
}

export const initialState: State = {
  gridData: [],
  searchWords: []
};


export const wordSearchReducer = createReducer(
  initialState,
  on(WordSearchActions.wordSearchGetGridDataSuccess, (state, { data }) => ({...state, gridData: data})),
  on(WordSearchActions.wordSearchGetWordsSuccess, (state, { data }) => ({...state, searchWords: data})),
  on(WordSearchActions.wordSearchGetGridDataFailure, (state, { error }) => ({...state, gridData: []})),
  on(WordSearchActions.wordSearchGetWordsFailure, (state, { error }) => ({...state, searchWords: []}))
);

export function reducer(state: State, action: Action) {
  return wordSearchReducer(state, action);
}
