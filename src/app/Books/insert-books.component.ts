import { Component, OnInit } from "@angular/core";
import { BooksService } from "./Books.service";
import { Router } from "@angular/router";

@Component({
    selector :'insert-books',
    templateUrl: './insert-books.component.html',
    providers : [BooksService]
})

export class InsertBooksComponent implements OnInit
{
    constructor(private router : Router, private booksService  : BooksService){}
    Author()
    {
        //this.router.navigate(['Authorslist'])
    }
    insertBooks(title: string,authorid : any, isbn:any, category:string ,publicationyear : any ,price : any,stock : any)
    {
        if(title=='' || authorid==''|| isbn=='' || category=='' || publicationyear=='' || price=='' || stock=='' )
        {
            alert("Enter all details");
        }
        else
        {
            const data =
            {
                "authorId" : authorid,
                "title" : title,
                "isbn" : isbn,
                "category" : category,
                "publicationYear" : publicationyear,
                "price" : price
            }
            this.booksService.insertBook(data).subscribe();

            const data1 =
            {
                "stock" : stock
            }
            this.booksService.updateStock(data).subscribe();
        }
    }
    ngOnInit(): void 
    {
        
    }
}