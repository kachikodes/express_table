import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExpressService } from '../services/express.service';
import { filtering } from '../classes/express';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dtOptions: any = {};
  accountNo: any;
  startDate: any;
  endDate: any;
  pageNumber: any;
  pageSize: any;
  filters!: filtering;

  expressTable: any[] = []

  constructor(
    private _express: ExpressService
  ) {

  }
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
    this.accountNo = '';
    this.startDate = "2023-05-01";
    this.endDate = "2023-07-30";
    this.pageNumber = 1;
    this.pageSize = 50;


    this.filters = {
      accountNo: this.accountNo,
      startDate: this.startDate,
      endDate: this.endDate,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    }

    this._express.onGetData(this.filters)
    .subscribe({
      next: (res) => {
        console.log(res);
        return
        this.expressTable = res
      },
      error: (err) => {
        // console.log(err.error);
      },
    });
  }


}
