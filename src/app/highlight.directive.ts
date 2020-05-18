import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostBinding('style.backgroundColor')backgroundColor = 'transparent';

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'Red';
    this.elem.nativeElement.style.color = 'White';
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'transparent';
    this.elem.nativeElement.style.color = 'Black';
}

  gnOninit() {
    this.elem.nativeElement.style.backgroundColor = 'red';
    this.elem.nativeElement.style.color = 'white';
  }

}
