import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordSearchService {

  constructor(private http: HttpClient) { }
  public getGridData(): Observable<Array<string>[]> {
    return this.http.get<Array<string>[]>('Grid')
  }

  public getWords(): Observable<string[]> {
    return this.http.get<string[]>('Word')
  } 
}
