import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LogoutService
{
    constructor(private httpClient:HttpClient) { }
    
    public logout() :  Observable<any>
    {
        return this.httpClient.delete('http://localhost:8087/session/');
    }
}
