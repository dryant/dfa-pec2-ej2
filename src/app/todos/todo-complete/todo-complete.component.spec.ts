import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompleteComponent } from './todo-complete.component';

describe('TodoCompleteComponent', () => {
  let component: TodoCompleteComponent;
  let fixture: ComponentFixture<TodoCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCompleteComponent]
    });
    fixture = TestBed.createComponent(TodoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
