import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { arr } from 'src/mock-names';

export type CountObj = Record<string,number>

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  countObj: CountObj = {};

  countNames(): Observable<Record<string,number>>{
    return of(...arr).pipe(map(name => {
      this.countObj[name]= this.countObj[name] ? this.countObj[name] + 1 : 1;
      return this.countObj;
    }))
  }

}
