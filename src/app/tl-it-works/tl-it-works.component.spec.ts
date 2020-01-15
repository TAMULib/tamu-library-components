import { TestBed, async } from '@angular/core/testing';
import { TamuItWorksComponent } from './tl-it-works.component';

describe('TamuItWorksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TamuItWorksComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(TamuItWorksComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'tamu-components'`, () => {
  //   const fixture = TestBed.createComponent(TamuItWorksComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('tamu-components');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(TamuItWorksComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('tamu-components app is running!');
  // });
});
