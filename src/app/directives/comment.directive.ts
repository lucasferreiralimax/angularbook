import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appComment]'
})
export class CommentDirective {

  constructor() { }

  text: String = '';

  @HostBinding('class.active') private isComment: boolean;

  @HostListener('input', ['$event.target']) onInput(el) {
    this.testContent(el)
  }

  @HostListener('blur', ['$event.target']) onBlur(el) {
    if(!el.textContent) {
      el.textContent = this.text;
      this.text = '';
      this.isComment = false;
    }
  }

  @HostListener('focus', ['$event.target']) onFocus(el) {
    this.testContent(el)
  }

  testContent(el) {
    if(!this.text) {
      this.text = el.textContent;
      el.textContent = '';
    }
    this.isComment = true;
  }

}
