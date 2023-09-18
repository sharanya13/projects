import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from "./payment.component";


 
@NgModule({

    declarations:[PaymentComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[PaymentComponent],

    providers:[]

})

export class PaymentModule
{
 
}