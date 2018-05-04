import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavMenuComponent } from './header-nav-menu.component';

describe('HeaderNavMenuComponent', () => {
  let component: HeaderNavMenuComponent;
  let fixture: ComponentFixture<HeaderNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
