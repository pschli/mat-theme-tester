import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExampleComponent } from './card-example.component';

describe('CardExampleComponent', () => {
  let component: CardExampleComponent;
  let fixture: ComponentFixture<CardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
