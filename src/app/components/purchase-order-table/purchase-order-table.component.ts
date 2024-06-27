import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-table',
  templateUrl: './purchase-order-table.component.html',
  styleUrls: ['./purchase-order-table.component.css']
})
export class PurchaseOrderTableComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'DATE', 'PURCHASE_ORDERS', 'REFERENCES', 'VENDOR', 'AMOUNT', 'DUE_DATE', 'WAREHOUSE', 'FRIEGHT_FORWARDERS'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedFilter: string = 'all';

router:Router=inject(Router)

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    // Implement your filter logic here
    // You can use this.selectedFilter and the input value to filter your dataSource
  }



  createNewField() {
 this.router.navigate(['createOrder']);
    console.log('Creating new field');
  }



}

export interface PeriodicElement {
  DATE: string;
  PURCHASE_ORDERS: string;
  REFERENCES: string;
  VENDOR: string;
  AMOUNT: number;
  DUE_DATE: string;
  WAREHOUSE: string;
  FRIEGHT_FORWARDERS: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, DATE:'13/03/2024', PURCHASE_ORDERS:'p1', REFERENCES:'ref1', VENDOR:'v1', AMOUNT:1000, DUE_DATE:'13/03/2024', WAREHOUSE:'Sharjha Warhouse', FRIEGHT_FORWARDERS:'FWD NAME'},
  {position: 2, DATE:'13/03/2024', PURCHASE_ORDERS:'p1', REFERENCES:'ref1', VENDOR:'v1', AMOUNT:1000, DUE_DATE:'13/03/2024', WAREHOUSE:'Sharjha Warhouse', FRIEGHT_FORWARDERS:'FWD NAME'},
  {position: 3, DATE:'13/03/2024', PURCHASE_ORDERS:'p1', REFERENCES:'ref1', VENDOR:'v1', AMOUNT:1000, DUE_DATE:'13/03/2024', WAREHOUSE:'Sharjha Warhouse', FRIEGHT_FORWARDERS:'FWD NAME'},
  {position: 4, DATE:'13/03/2024', PURCHASE_ORDERS:'p1', REFERENCES:'ref1', VENDOR:'v1', AMOUNT:1000, DUE_DATE:'13/03/2024', WAREHOUSE:'Sharjha Warhouse', FRIEGHT_FORWARDERS:'FWD NAME'},
  {position: 5, DATE:'13/03/2024', PURCHASE_ORDERS:'p1', REFERENCES:'ref1', VENDOR:'v1', AMOUNT:1000, DUE_DATE:'13/03/2024', WAREHOUSE:'Sharjha Warhouse', FRIEGHT_FORWARDERS:'FWD NAME'},
];