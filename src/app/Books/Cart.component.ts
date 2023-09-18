import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BooksService } from "./Books.service";

@Component({
    selector :'Books-list',
    templateUrl: './Cart.component.html',
    providers : []
})

export class CartComponent implements OnInit
{
    total : number = 0;
    length : number = 0;
    BooksCartList:any[]=[];
    BooksCartList1:any[]=[];
    constructor(private booksService : BooksService,private router:Router){}
    DecrementQuantity(i : number , id : number , price : number)
    {
        if(this.BooksCartList[i].quantity>1)
        {
            this.BooksCartList[i].quantity = this.BooksCartList[i].quantity - 1;
            console.log(this.BooksCartList[i].quantity)
            const data={
                "bookId" : id,
                "quantity": this.BooksCartList[i].quantity
            }
            this.booksService.UpdateCart(data).subscribe((result)=> {});
            window.location.reload();
            this.total = this.total - price;
        }
        
    }

    IncrementQuantity(i : number , id : number,  price : number)
    {
        this.BooksCartList[i].quantity = this.BooksCartList[i].quantity + 1;
        const data={
            "bookId" : id,
            "quantity": this.BooksCartList[i].quantity
        }
        this.booksService.UpdateCart(data).subscribe((result)=> {});
        window.location.reload();
        this.total = this.total + price;
    }

    remove(id:number,i :number)
    {
        this.total = this.total - (this.BooksCartList[i].price * this.BooksCartList[i].quantity);
        this.booksService.deleteItem(id).subscribe((result)=> {});  
        window.location.reload();
    }
    searching(search:string)
    {
        if(search.length!=0)
        {
            this.booksService.getAllCartDetails(search).subscribe((data)=> this.BooksCartList = data);
        }
        else
        {
            this.booksService.getAllCartDetails('').subscribe((data)=> this.BooksCartList = data);
        }
    };
    makepayment()
    {
        const data={
            "totalAmount" : this.total
        }
        this.booksService.InsertPaymentdetails(data).subscribe(()=>{});
        alert("Payment Successful..!!");
        localStorage.setItem('amount',this.total+'');
        this.router.navigate(['Payment']);
    }
    

    ngOnInit(): void
    {
        this.booksService.getAllCartDetails('').subscribe((data)=>{ this.BooksCartList = data;
        for(const i of this.BooksCartList)
        {
            this.total = this.total + (i.quantity * i.price);
        }
        this.length = this.BooksCartList.length;
        });
    }
}
