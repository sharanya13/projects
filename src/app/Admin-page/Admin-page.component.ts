import { Component, OnInit } from "@angular/core";


@Component({
    selector :'Authors-list',
    templateUrl: './Admin-page.component.html',
    providers : [ ]
})

export class AdminPageComponent implements OnInit
{
    authorsList:any[]=[];

 
    ngOnInit(): void 
    {
       // this.authorservice.getAllAuthorsDetails().subscribe((data)=> this.authorsList = data);

        console.log(this.authorsList.length);
    }
}