import { Component } from '@angular/core';
import { CustomerAccountService } from './customer-account.service';


@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css'],
  providers:[CustomerAccountService]
})
export class CustomerAccountComponent 
{
  customerList:any;
  BooksList : any[] = [];

  constructor(private customerAccountService : CustomerAccountService){}
    
  edit()
  {
    
  }
  ngOnInit(): void 
  {
      this.customerAccountService.getCustomerDetails().subscribe((data)=> this.customerList = data);

  }
}
