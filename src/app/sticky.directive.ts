import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement;
    const scrollPosition =  document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 100) {
      this.renderer.addClass(section, 'sticky');
    } else {
      this.renderer.removeClass(section, 'sticky');
    }
  }

}
