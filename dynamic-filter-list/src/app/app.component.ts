import { Component } from '@angular/core';
import { DynamicFilterListComponent } from './dynamic-filter-list/dynamic-filter-list.component';

@Component({
  selector: 'app-root',
  imports: [DynamicFilterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
