import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionExampleComponent } from './expansion-example.component';

describe('ExpansionExampleComponent', () => {
  let component: ExpansionExampleComponent;
  let fixture: ComponentFixture<ExpansionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
