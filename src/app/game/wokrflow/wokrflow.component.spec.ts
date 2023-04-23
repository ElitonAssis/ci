import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WokrflowComponent } from './wokrflow.component';

describe('WokrflowComponent', () => {
  let component: WokrflowComponent;
  let fixture: ComponentFixture<WokrflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WokrflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WokrflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
