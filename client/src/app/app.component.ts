import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
})
export class AppComponent {
  title = 'client';
  collapsed = true;
}
