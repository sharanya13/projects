import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BooksService
{
    constructor(private httpClient:HttpClient) { }
    public getAllBooksDetails(search:string) : Observable<any>
    {
        return this.httpClient.get('http://localhost:8087/books/'+search);
    }


    public getAllCartDetails(data:any) : Observable<any>
    {
        return this.httpClient.get('http://localhost:8087/ordersBucket/'+data);
    }

    public InsertIntoCart(data:any) : Observable<any>
    {
        console.log(data);
        return this.httpClient.post('http://localhost:8087/ordersBucket/',data);
    }

    public UpdateCart(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/ordersBucket/insert',data);
    }

    public deleteItem(data:number) : Observable<any>
    {
        return this.httpClient.delete('http://localhost:8087/ordersBucket/'+data);
    }

    public InsertPaymentdetails(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/payment/',data);
    }

    public insertBook(data : any ) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/books/',data);
    }

    public updateStock(data : any ) : Observable<any>
    {
        return this.httpClient.put('http://localhost:8087/newStock/',data);
    }
}