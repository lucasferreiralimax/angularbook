import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor() { }

  @HostListener('blur', ['$event.target']) onBlur(el) {
    el.value = el.value.trim()
  }

}
