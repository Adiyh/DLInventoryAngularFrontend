import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetViewComponent } from './asset-view.component';

describe('AssetViewComponent', () => {
  let component: AssetViewComponent;
  let fixture: ComponentFixture<AssetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
