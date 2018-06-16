import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardoComponent } from './anime-cardo.component';

describe('AnimeCardoComponent', () => {
  let component: AnimeCardoComponent;
  let fixture: ComponentFixture<AnimeCardoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeCardoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeCardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
