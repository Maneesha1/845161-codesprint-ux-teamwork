import { Component, OnInit } from '@angular/core';
import { PlaceOrder } from '../Model/place-order';
import { GiftCardService } from '../gift-card.service';

@Component({
  selector: 'app-viewgiftcardorders',
  templateUrl: './viewgiftcardorders.component.html',
  styleUrls: ['./viewgiftcardorders.component.css']
})
export class ViewgiftcardordersComponent implements OnInit {
list:PlaceOrder[];

  constructor(private service:GiftCardService) { }

  ngOnInit() {

    this.service.ViewOrder().subscribe(
      res=>
      {
        this.list=res;
      }
    );
  }

}
