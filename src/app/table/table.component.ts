import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dtOptions: any = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
}
}
