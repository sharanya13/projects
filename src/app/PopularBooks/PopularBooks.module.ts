import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { PopularBookService } from "./PopularBooks.service";
import { PopularBookComponent } from "./PopularBooks.component";
import { ViewReportsComponent } from "./view-reports.component";


 
@NgModule({

    declarations:[PopularBookComponent,ViewReportsComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[PopularBookComponent,ViewReportsComponent],

    providers:[PopularBookService]

})

export class PopularBookModule
{
 
}