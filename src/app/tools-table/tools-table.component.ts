import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ToolsTableDataSource } from './tools-table-datasource';

@Component({
  selector: 'app-tools-table',
  templateUrl: './tools-table.component.html',
  styleUrls: ['./tools-table.component.css']
})
export class ToolsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ToolsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ToolsTableDataSource(this.paginator, this.sort);
  }
}
