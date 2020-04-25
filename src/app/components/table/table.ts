export interface TableDto {
  rowData?: any[];
  columnDefs?: columnDefsDto[];
  rowClicked?: any;
}

export interface columnDefsDto {
  headerName?: string;
  field?: string;
}
