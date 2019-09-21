import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPostComment]'
})
export class PostCommentDirective {

  @Output() updatePostagem = new EventEmitter<boolean>();
  @Output() updatePlaceholder = new EventEmitter<String>();

  constructor() { }

  @HostListener('input', ['$event.target']) onInput(el) {
    this.checkValue(el.textContent)
  }

  @HostListener('focus', ['$event.target']) onFocus(el) {
    this.updatePostagem.next(true);
    this.checkValue(el.textContent)
  }

  checkValue(value) {
    if(value) {
      this.updatePlaceholder.next("disable");
    } else {
      this.updatePlaceholder.next("focus");
    }
  }

}
