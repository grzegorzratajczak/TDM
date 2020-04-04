import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAskDialogComponent } from './simple-ask-dialog.component';

describe('SimpleAskDialogComponent', () => {
  let component: SimpleAskDialogComponent;
  let fixture: ComponentFixture<SimpleAskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
