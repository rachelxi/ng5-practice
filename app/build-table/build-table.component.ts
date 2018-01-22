import { Component } from '@angular/core';
import { retry } from 'rxjs/operator/retry';

const columnNumber = 5;
const rowNumber = 5;

@Component({
  templateUrl: './build-table.component.html',
  styleUrls: ['./build-table.component.css'],
})
export class BuildTableComponent {
    public columnCount: number[];
    public rowCount: number[];
    public columnHeaders = ['A', 'B', 'C', 'D', 'E'];
    public rowHeaders: number[];
    public tableContent: any[][];

    constructor() {
      this.initTable();
    }
    /**
     * @description
     */
    public initTable(): void {
      this.columnCount = this.initCount(columnNumber);
      this.rowCount = this.initCount(rowNumber);
      this.rowHeaders = this.initCount(rowNumber, true);
      this.tableContent = this.initTableContent(rowNumber, columnNumber);
    }
    /**
     * @description Initialize column/row count and row headers.
     * @param limit The limit of count. 
     * @param header Whether the result for headers.
     * @returns {number[]} Resulting count.
     */
    public initCount(limit: number, header?: boolean): number[] {
      const resultingCount = [];
      for(let i = 0; i < limit; i++){
        (header) ? resultingCount.push(i+1) : resultingCount.push(i);
      }
      return resultingCount;
    }
    /**
     * @description
     * @param rowLimit 
     * @param columnLimit 
     * @returns {any[][]}
     */
    public initTableContent(rowLimit: number, columnLimit: number): any[][]{
      let tableContent = [];
      for(let i = 0; i < rowLimit; i++) {
        tableContent.push(Array(columnLimit).fill(null));
      }
      return tableContent;
    }
}
