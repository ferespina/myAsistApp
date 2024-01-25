import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pag404Page } from './pag404.page';

describe('Pag404Page', () => {
  let component: Pag404Page;
  let fixture: ComponentFixture<Pag404Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pag404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
