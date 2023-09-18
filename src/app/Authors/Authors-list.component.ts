import { Component, OnInit } from "@angular/core";
import { AuthorsService } from "./Authors.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
    selector :'Authors-list',
    templateUrl: './Authors-list.component.html',
    providers : [AuthorsService ]
})

export class AuthorsListComponent implements OnInit
{
    authorsList:any[]=[];

    constructor(private authorservice : AuthorsService, private router : Router){}

    addAuthor(name:string, country:string, email:string, phoneNumber:any)
    {
        if(name=='' || country=='' || email=='' || phoneNumber==0 )
        {
            alert("Enter all details");
        }
        else
        {
            const data =
            {
                "authorName" : name,
                "country" : country,
                "email" : email,
                "phoneNumber" : phoneNumber
            }
            this.authorservice.insertAuthorDetails(data).subscribe();
            window.location.reload();
            // this.router.navigateByUrl('/InsertBooks');
        }
    }

    
    ngOnInit(): void 
    {
        this.authorservice.getAllAuthorsDetails().subscribe((data)=> this.authorsList = data);

        console.log(this.authorsList.length);
    }
}


 