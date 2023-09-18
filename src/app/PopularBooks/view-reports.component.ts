import { Component, OnInit } from "@angular/core";
import { PopularBookService } from "./PopularBooks.service";
import { Router } from "@angular/router";

@Component({
    selector :'view-reports',
    templateUrl: './view-reports.component.html',
    providers : [PopularBookService]
})

export class ViewReportsComponent implements OnInit
{
    ngOnInit(): void 
    {
        
    }
}