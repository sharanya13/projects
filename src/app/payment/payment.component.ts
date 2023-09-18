import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: [],
  providers:[PaymentService]
})
export class PaymentComponent implements OnInit
{
  PaymentList : any[] = [];
  data : string | null ='';
  constructor(private paymentService : PaymentService, private route :Router){}
  orders()
  {
    this.route.navigate(['OrdersList']);
  }

  ngOnInit(): void 
  {
    console.log("payment");
      this.data = localStorage.getItem('amount');
      console.log(this.data);
      this.paymentService.getPaymentDetails().subscribe((data)=> this.PaymentList = data); 
  }
}
