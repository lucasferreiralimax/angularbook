import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navleft',
  templateUrl: './navleft.component.html',
  styleUrls: ['./navleft.component.sass']
})
export class NavleftComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
