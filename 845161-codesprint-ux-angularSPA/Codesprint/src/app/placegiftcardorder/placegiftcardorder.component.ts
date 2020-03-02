import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceOrder } from '../Model/place-order';
import { GiftCardService } from '../gift-card.service';

@Component({
  selector: 'app-placegiftcardorder',
  templateUrl: './placegiftcardorder.component.html',
  styleUrls: ['./placegiftcardorder.component.css']
})
export class PlacegiftcardorderComponent implements OnInit {

  placeorderForm:FormGroup;
  submitted=false;
  placeorder:PlaceOrder;
  constructor(private fromBuilder:FormBuilder,private service: GiftCardService) { }

  ngOnInit() {
    this.placeorderForm=this.fromBuilder.group({
     
      inr:['',[Validators.required,Validators.pattern('^[1-9]{3}$')]],
      paisa:['',[Validators.required,Validators.pattern("^[0-9]{3}$")]],
      rfname:['',[Validators.required,Validators.minLength(4)]],
      rlname:['',Validators.required],
      saddress:['',[Validators.required,Validators.minLength(4)]],
      state:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required],
      bfname:['',[Validators.required,Validators.minLength(4)]],
      blname:['',Validators.required],
      phnnum:['',[Validators.required]],
      email:['',Validators.required],
      country:['']


    
   
    
    });



  }

  get f()
  {
    return this.placeorderForm.controls;

  }


  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.placeorderForm.valid)
    {
      alert('sucess!!!!!!');
      // console.log(JSON.stringify(this.placeorderForm.value));
    }
    this.Add();
  }

  onReset()
    {

    this.submitted=false;
    this.placeorderForm.reset();
    }

    Add()
    {

      this.placeorder=new PlaceOrder();

      this.placeorder.inr=Number(this.placeorderForm.value["inr"]);
      this.placeorder.paisa=Number(this.placeorderForm.value["paisa"]);
      this.placeorder.rfname=this.placeorderForm.value["rfname"];
      this.placeorder.rlname=this.placeorderForm.value["rlname"];
      this.placeorder.saddress=this.placeorderForm.value["saddress"];
      this.placeorder.city=this.placeorderForm.value["city"];
      this.placeorder.state=this.placeorderForm.value["state"];
      this.placeorder.country=this.placeorderForm.value["country"];
      this.placeorder.pincode=Number(this.placeorderForm.value["pincode"]);
      this.placeorder.bfname=this.placeorderForm.value["bfname"];
      this.placeorder.blname=this.placeorderForm.value["blname"];
      this.placeorder.phnnum=Number(this.placeorderForm.value["phnnum"]);
      this.placeorder.email=this.placeorderForm.value["email"];
      
      
      this.service.AddPlaceOrder(this.placeorder).subscribe 
      (
        res=>
        {
          console.log(this.placeorder)
          console.log('Record Added');
        },
        err=>
        {
          console.log(err);
        }
      )
    }
}
