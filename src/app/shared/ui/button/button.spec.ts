import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Button } from './button';

@Component({
  standalone: true,
  imports: [Button],
  template: `
    <app-button [href]="href" [variant]="variant" [size]="size">
      <span class="inner">Contenido</span>
    </app-button>
  `,
})
class HostComponent {
  href?: string;
  variant: 'primary' | 'ghost' | 'icon' = 'primary';
  size: 'sm' | 'md' | 'lg' = 'md';
}

describe('Button', () => {

  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    // Remove fixture.detectChanges() from here
  });

  it('renders button when no href is defined', () => {
    fixture.detectChanges(); // Run it here instead

    const btn = fixture.debugElement.query(By.css('button'));
    const a = fixture.debugElement.query(By.css('a'));

    expect(btn).toBeTruthy();
    expect(a).toBeFalsy();
  });

  it('renders a when href is defined', () => {
    host.href = 'https://example.com';
    fixture.detectChanges(); // Now this is the first change detection

    const a = fixture.debugElement.query(By.css('a'));
    const btn = fixture.debugElement.query(By.css('button'));

    expect(a).toBeTruthy();
    expect(btn).toBeFalsy();

    expect(a.attributes['href']).toBe('https://example.com');
    expect(a.attributes['target']).toBe('_blank');
    expect(a.attributes['rel']).toBe('noopener noreferrer');
  });

});
