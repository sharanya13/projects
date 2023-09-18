import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CustomerAccountService
{
    constructor(private httpClient:HttpClient) { }
    
    public getCustomerDetails() : Observable<any>
    {
        return this.httpClient.get('http://localhost:8087/customers/id');
    }
}