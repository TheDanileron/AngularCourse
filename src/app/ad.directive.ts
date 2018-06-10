import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  // Directive changes component/element behavior
  // ViewContainerRef for getting access to view container of directive
  constructor(public viewContainerRef: ViewContainerRef) { }
}

