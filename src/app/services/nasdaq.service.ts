import { Injectable } from '@angular/core';
import { nasdaqData } from '../../../data/nasdaq';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NasdaqService {
  // public observablePuzzle = this.behavior.asObservable();
  public data = nasdaqData;
  private behavior: BehaviorSubject<any> = new BehaviorSubject(this.data);
  public observableData = this.behavior.asObservable();
  constructor() {

    //this.behavior.next(this.data);
  }
}
