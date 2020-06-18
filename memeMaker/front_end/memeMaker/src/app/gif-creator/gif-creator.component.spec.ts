import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCreatorComponent } from './gif-creator.component';

describe('GifCreatorComponent', () => {
  let component: GifCreatorComponent;
  let fixture: ComponentFixture<GifCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
