import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorVisualizerComponent } from './actor-visualizer.component';

describe('ActorVisualizerComponent', () => {
  let component: ActorVisualizerComponent;
  let fixture: ComponentFixture<ActorVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
