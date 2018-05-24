import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-dashboard',
  templateUrl: './tools-dashboard.component.html',
  styleUrls: ['./tools-dashboard.component.css']
})
export class ToolsDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
