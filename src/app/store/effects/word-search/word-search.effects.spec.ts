import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WordSearchEffects } from './word-search.effects';

describe('WordSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: WordSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordSearchEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WordSearchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
