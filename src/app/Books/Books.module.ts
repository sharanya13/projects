import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from "./Books-list.component";
import { BooksService } from "./Books.service";
import { CartComponent } from "./Cart.component";
import { InsertBooksComponent } from "./insert-books.component";
@NgModule({
    declarations:[BooksListComponent,CartComponent,InsertBooksComponent],
    imports:[CommonModule,HttpClientModule],
    exports:[BooksListComponent,CartComponent,InsertBooksComponent],
    providers:[BooksService]
})

export class BooksModule
{

}

 