import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirtualInfiniteScrollComponent } from './virtual-infinite-scroll.component';

describe('VirtualInfiniteScrollComponent', () => {
  let component: VirtualInfiniteScrollComponent;
  let fixture: ComponentFixture<VirtualInfiniteScrollComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VirtualInfiniteScrollComponent],
        imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(VirtualInfiniteScrollComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
