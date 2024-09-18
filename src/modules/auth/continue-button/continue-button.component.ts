import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent {
 @Input() type: 'next' | 'previous' = 'next'
}
