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
      for (let i = 0; i < offcanvasBackdrops.length; i++) {
        offcanvasBackdrops[i].classList.remove('show'); // Remove the class that shows the offcanvas for each backdrop element
      } // Optionally, you can add more logic to hide the offcanvas using Bootstrap's methods, e.g., offcanvas.hide() if you're using Bootstrap's JS API
    }
  }
}
