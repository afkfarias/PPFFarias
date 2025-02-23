import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PPFFarias';

  showFiller = false;

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
