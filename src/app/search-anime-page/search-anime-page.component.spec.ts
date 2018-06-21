import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnimePageComponent } from './search-anime-page.component';

describe('SearchAnimePageComponent', () => {
  let component: SearchAnimePageComponent;
  let fixture: ComponentFixture<SearchAnimePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAnimePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
