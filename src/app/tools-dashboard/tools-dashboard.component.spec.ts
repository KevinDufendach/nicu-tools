
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDashboardComponent } from './tools-dashboard.component';

describe('ToolsDashboardComponent', () => {
  let component: ToolsDashboardComponent;
  let fixture: ComponentFixture<ToolsDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
