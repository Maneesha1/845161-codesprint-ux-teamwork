import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaceOrder } from './Model/place-order';
import { Observable } from 'rxjs';
const Requestheaders={headers:new HttpHeaders({
    'Content-Type':'application/json',
  })}
@Injectable({
  providedIn: 'root'
})
export class GiftCardService {
  url:string='http://localhost:3000/giftcard'
  constructor(public http : HttpClient) { }

  public AddPlaceOrder(placeorder:PlaceOrder):Observable<any>
  {
    return this.http.post<any>(this.url,JSON.stringify(placeorder),Requestheaders);
  }
  public ViewOrder():Observable<any>
  {
    return this.http.get<any>(this.url,Requestheaders);
  }
}


