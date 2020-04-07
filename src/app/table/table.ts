export interface TableDto {
  rowData?: any[];
  columnDefs?: columnDefsDto[];
}

export interface columnDefsDto {
  headerName?: string;
  field?: string;
}
