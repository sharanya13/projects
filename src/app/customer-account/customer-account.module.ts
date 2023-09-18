import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { CustomerAccountComponent } from "./customer-account.component";
import { CustomerAccountService } from "./customer-account.service";



 
@NgModule({

    declarations:[CustomerAccountComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[CustomerAccountComponent],

    providers:[CustomerAccountService]

})

export class CustomerAccountModule
{
 
}