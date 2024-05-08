// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private activeRowsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  private isActiveSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  activeRows$: Observable<number[]> = this.activeRowsSubject.asObservable();
  isActive$: Observable<boolean> = this.isActiveSubject.asObservable();

  constructor() {}

  setActiveRows(activeRows: number[]): void {
    this.activeRowsSubject.next(activeRows);
  }

  toggleActive(): void {
    const currentValue = this.isActiveSubject.getValue();
    this.isActiveSubject.next(!currentValue);
    localStorage.setItem('isActive', JSON.stringify(!currentValue));
  }
  
}
