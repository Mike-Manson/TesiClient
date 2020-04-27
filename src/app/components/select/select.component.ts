import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ag-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options;
  @ViewChild('select') select;

  onChange() {
    console.log(this.select.nativeElement.value)
  }


}
