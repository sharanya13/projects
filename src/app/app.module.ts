import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsModule } from './Authors/Authors.module'
import { AdminsModule } from './Admin/Admin.module';
import { CommonModule } from '@angular/common';
import { BooksModule } from './Books/Books.module';
import { CustomersModule } from './Customers/Customers.module';
import { HomePageModule } from './HomePage/HomePage.module';
import { OrdersModule } from './Orders/Orders.module';
import { PopularBookModule } from './PopularBooks/PopularBooks.module';
import { LogoutComponent } from './Logout.component';
import { CustomerAccountModule } from './customer-account/customer-account.module';
import { PaymentModule } from './payment/payment.module';
import { AdminPageModule } from './Admin-page/Admin-page.module';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthorsModule,
    AdminsModule,
    BooksModule,
    CustomersModule,
    HomePageModule,
    OrdersModule,
    PopularBookModule,
    CustomerAccountModule,
    PaymentModule,
    AdminPageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
