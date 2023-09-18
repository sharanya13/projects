import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { AuthorsListComponent } from "./Authors-list.component";
import { AuthorsService } from "./Authors.service";
import { FormsModule } from '@angular/forms';


 
@NgModule({

    declarations:[AuthorsListComponent],

    imports:[CommonModule,HttpClientModule,FormsModule],

    exports:[AuthorsListComponent],

    providers:[AuthorsService]

})

export class AuthorsModule
{
 
}