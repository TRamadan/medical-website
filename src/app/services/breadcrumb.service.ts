import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<any[]>([]);
  public breadcrumbs$: Observable<any[]> =
    this.breadcrumbsSubject.asObservable();

  setBreadcrumbs(breadcrumbs: any[]) {
    this.breadcrumbsSubject.next(breadcrumbs);
  }
}
