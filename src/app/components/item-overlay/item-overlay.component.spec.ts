import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOverlayComponent } from './item-overlay.component';

describe('ItemOverlayComponent', () => {
  let component: ItemOverlayComponent;
  let fixture: ComponentFixture<ItemOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
