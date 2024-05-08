import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSuerComponent } from './table-suer.component';

describe('TableSuerComponent', () => {
  let component: TableSuerComponent;
  let fixture: ComponentFixture<TableSuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSuerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
