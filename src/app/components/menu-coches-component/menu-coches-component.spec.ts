import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCochesComponent } from './menu-coches-component';

describe('MenuCochesComponent', () => {
  let component: MenuCochesComponent;
  let fixture: ComponentFixture<MenuCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCochesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCochesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
