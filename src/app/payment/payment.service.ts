import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PaymentService
{
    constructor(private httpClient:HttpClient) { }

    public getPaymentDetails() : Observable<any>
    {
        console.log("service");
        return this.httpClient.get('http://localhost:8087/payment/');
    }
}