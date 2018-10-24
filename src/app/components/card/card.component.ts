import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('name') name:string;
  @Input('img') img:string;
  @Input('size') size:string;
  @Input('price') price:string;


  constructor() { }

  ngOnInit() {
  }

}
