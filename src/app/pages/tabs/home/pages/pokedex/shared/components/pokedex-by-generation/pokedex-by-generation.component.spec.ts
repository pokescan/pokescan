import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokedexByGenerationComponent } from './pokedex-by-generation.component';

describe('PokedexByGenerationComponent', () => {
  let component: PokedexByGenerationComponent;
  let fixture: ComponentFixture<PokedexByGenerationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexByGenerationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexByGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
