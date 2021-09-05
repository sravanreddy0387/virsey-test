import { createAction, props } from '@ngrx/store';
import { error } from 'protractor';

export const WordSearchGetGridData = createAction(
  '[WordSearch] Word Search Get Grid Data',
);

export const wordSearchGetGridDataSuccess = createAction(
  '[WordSearch] Word Search Get Grid Data Success',
  props<{ data: Array<string>[] }>()
);

export const wordSearchGetGridDataFailure = createAction(
  '[WordSearch] WordSearch Get Grid Data Failure',
  props<{ error: any }>()
);

export const WordSearchGetWords = createAction(
  '[WordSearch] Word Search Get Word Data',
);

export const wordSearchGetWordsSuccess = createAction(
  '[WordSearch] Word Search Get Word Data Success',
  props<{ data: string[] }>()
);

export const wordSearchGetWordsFailure = createAction(
  '[WordSearch] WordSearch Get Word Data Failure',
  props<{ error: any }>()
);
