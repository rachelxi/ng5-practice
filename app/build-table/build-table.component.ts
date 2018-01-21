import { Component } from '@angular/core';

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
    public tableContent: any[][] = [['test']];

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
    }
    /**
     * @description
     * @param limit {number}
     * @param header {boolean}
     * @returns {number[]}
     */
    public initCount(limit: number, header?: boolean): number[] {
      const resultingCount = [];
      for(let i = 0; i < limit; i++){
        (header) ? resultingCount.push(i+1) : resultingCount.push(i);
      }
      return resultingCount;
    }
}
