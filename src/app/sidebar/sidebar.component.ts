import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name: any
  current: any
  @Input() data:any;

  
  constructor() { }

  ngOnInit(): void {
  }

  
  ngOnChanges(data, current, changes: SimpleChanges): void {
    current = data.data.currentValue
    this.passCurrent(current)
  }

  passCurrent(current) {
    console.log(current)
    this.current = current
  }


  
  
}
