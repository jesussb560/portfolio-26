import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  template: `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-10 lg:px-12">
      <ng-content></ng-content>
    </div>
  `,
})
export class Container {

}
