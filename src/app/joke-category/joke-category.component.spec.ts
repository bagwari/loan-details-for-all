import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCategoryComponent } from './joke-category.component';

describe('JokeCategoryComponent', () => {
  let component: JokeCategoryComponent;
  let fixture: ComponentFixture<JokeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
