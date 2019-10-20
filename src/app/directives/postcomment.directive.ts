import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPostComment]'
})
export class PostCommentDirective {

  @Output() updatePostagem = new EventEmitter<boolean>();
  @Output() updatePlaceholder = new EventEmitter<String>();

  constructor() { }

  @HostListener('input', ['$event.target']) onInput(el) {
    this.checkValue(el.textContent, "input")
  }

  @HostListener('focus', ['$event.target']) onFocus(el) {
    this.updatePostagem.next(true);
    this.checkValue(el.textContent, "focus")
  }

  @HostListener('blur', ['$event.target']) onBlur(el) {
    this.checkValue(el.textContent, "blur")
  }

  checkValue(value, type) {
    if(value) {
      this.updatePlaceholder.next("disable");
    } else {
      if(type == "blur") {
        this.updatePlaceholder.next("blur");
      } else {
        this.updatePlaceholder.next("focus");
      }
    }
  }

}
