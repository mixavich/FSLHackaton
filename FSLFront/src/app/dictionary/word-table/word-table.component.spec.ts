import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTableComponent } from './word-table.component';

describe('WordTableComponent', () => {
  let component: WordTableComponent;
  let fixture: ComponentFixture<WordTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
