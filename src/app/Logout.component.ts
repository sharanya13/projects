import { Component, OnInit } from "@angular/core";
import { LogoutService } from "./Logout.service";


@Component({
    selector :'logout',
    templateUrl: './Logout.component.html',
    providers : [LogoutService ]
})

export class LogoutComponent implements OnInit
{
    constructor(private logoutService : LogoutService){}
 
    ngOnInit(): void 
    {
        this.logoutService.logout().subscribe();
    }
}
