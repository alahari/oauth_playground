import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedisApiComponent } from './redis-api.component';

describe('RedisApiComponent', () => {
  let component: RedisApiComponent;
  let fixture: ComponentFixture<RedisApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedisApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedisApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
