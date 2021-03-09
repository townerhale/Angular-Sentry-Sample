import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentryListComponent } from './sentry-list.component';

describe('SentryListComponent', () => {
  let component: SentryListComponent;
  let fixture: ComponentFixture<SentryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
