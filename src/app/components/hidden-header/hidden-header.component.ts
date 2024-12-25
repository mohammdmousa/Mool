import { Component } from '@angular/core';

@Component({
  selector: 'app-hidden-header',
  templateUrl: './hidden-header.component.html',
  styleUrl: './hidden-header.component.css',
})
export class HiddenHeaderComponent {
  closeOffcanvas() {
    const offcanvas = document.getElementById('fixedHeader');
    const offcanvasBackdrops =
      document.getElementsByClassName('offcanvas-backdrop');
    if (offcanvas) {
      offcanvas.classList.remove('show'); // Remove the class that shows the offcanvas
      while (offcanvasBackdrops.length > 0) {
        offcanvasBackdrops[0].classList.remove('show'); // إزالة صنف العرض
        offcanvasBackdrops[0].remove(); // حذف العنصر من DOM
      }
    }
  }
}
