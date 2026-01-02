import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactActions } from './contact-actions';

describe('ContactActions', () => {
  let component: ContactActions;
  let fixture: ComponentFixture<ContactActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
