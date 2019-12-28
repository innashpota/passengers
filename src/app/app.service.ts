import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  submit(): Observable<{ status: string }> {
    return of({status: 'OK'});
  }
}
