import { Component } from '@angular/core';

const columnNumber = 5;
const rowNumber = 5;
/**
 * @description Build excel like table. Allows input with mouse click/keyboard access
 */
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
     * @description Initialize table count, headers and content.
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
     * @description Initialize table content.
     * @param rowLimit The limit of rows.
     * @param columnLimit The limit of columns.
     * @returns {any[][]} Resulting table matrix.
     */
    public initTableContent(rowLimit: number, columnLimit: number): any[][]{
      let tableContent = [];
      for(let i = 0; i < rowLimit; i++) {
        tableContent.push(Array(columnLimit).fill(null));
      }
      return tableContent;
    }
    /**
     * @description Assign user input value
     * @param rowIndex 
     * @param columnIndex 
     */
    public assignValue($event: any, rowIndex: number, columnIndex: number): void{
      // todo: add debounce time when editing finishes after 1300ms
      this.tableContent[rowIndex][columnIndex] = $event.target.value;
    }

    public isExpression(value: string):boolean{
      // use regex to see whether the value is an expression
      return false;
    }

    public processExpression(): any {
      // for expression, extract the cell out, check cell value whether is a number
      // then return with operation value or NOT_VALID (Make as a const)
    }

    public handleKeydownEvents(): void {
      // case: Tab / Up / Down / Left / Right in table and change focus of table
      // element
    }

    public loadTableContent(): void{
      // load table content from local storage if any, or otherwise init content
    }

    public storeTableContent(tabelContent: any[][]): void{
      // store table content to local storage for nex loading
    }
}
