import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSingleComponent } from './wiki-single.component';

describe('WikiSingleComponent', () => {
  let component: WikiSingleComponent;
  let fixture: ComponentFixture<WikiSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
