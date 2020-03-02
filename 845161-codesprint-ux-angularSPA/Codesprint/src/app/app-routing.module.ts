import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacegiftcardorderComponent } from './placegiftcardorder/placegiftcardorder.component';
import { ViewgiftcardordersComponent } from './viewgiftcardorders/viewgiftcardorders.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  {path:"landingpage",component:LandingpageComponent},
  {path:"placegiftcardorder",component:PlacegiftcardorderComponent},
  {path:"viewgiftcardorders",component:ViewgiftcardordersComponent},
  {path:"contactus",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
