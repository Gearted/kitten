import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KistKittenComponent } from './kist-kitten.component';

describe('KistKittenComponent', () => {
  let component: KistKittenComponent;
  let fixture: ComponentFixture<KistKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KistKittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KistKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
