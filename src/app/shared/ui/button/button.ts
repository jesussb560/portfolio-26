import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
        type="button"
        [class]="classes"
      >
        <ng-content></ng-content>
    </button>
    `,
  styleUrl: './button.scss',
})
export class Button {

  @Input() variant: 'primary' | 'ghost' | 'icon' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get classes(): string {
    const base =
      'inline-flex items-center justify-center gap-2 transition ' +
      'disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'rounded-lg bg-dark-top transition-all duration-200 hover:-translate-y-0.5 hover:bg-dark-top-hover',
      ghost: 'rounded-md text-white/80 ',
      icon: 'rounded-full border border-white/20 hover:bg-white/10'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base'
    };

    const iconSize = this.variant === 'icon' ? 'size-11 p-0' : sizes[this.size];

    return `${base} ${variants[this.variant]} ${iconSize}`;
  }

}
