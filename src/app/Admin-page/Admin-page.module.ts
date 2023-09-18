import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from "./Admin-page.component";


 
@NgModule({

    declarations:[AdminPageComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[AdminPageComponent],

    providers:[]

})

export class AdminPageModule
{
 
}