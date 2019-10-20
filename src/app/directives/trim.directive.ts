import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(private el: ElementRef, private control : NgControl) { }

  @HostListener('blur', ['$event.target']) onBlur(el) {
    let trim = this.el.nativeElement.value.trim()
    this.control.control.setValue(trim)
  }

}
