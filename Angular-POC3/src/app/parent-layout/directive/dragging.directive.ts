import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDragging]'
})
export class DraggingDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}