import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthorsService
{
    constructor(private httpClient:HttpClient) { }
    
    public getAllAuthorsDetails() : Observable<any>
    {
        return this.httpClient.get('http://localhost:8087/authors/');
    }

    public insertAuthorDetails(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/authors/',data);
    }
    
}

 