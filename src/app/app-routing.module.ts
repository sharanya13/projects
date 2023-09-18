import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsListComponent } from './Authors/Authors-list.component';
import { AdminListComponent } from './Admin/Admin-list.component';
import { BooksListComponent } from './Books/Books-list.component';
import { CustomerListComponent } from './Customers/Customer-list.component';
import { CustomerSignUpComponent } from './Customers/CustomerSignUp.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { AdminSignUpComponent } from './Admin/AdminSignUp.component';
import { CartComponent } from './Books/Cart.component';
import { OrdersListComponent } from './Orders/Orders.component';
import { PopularBookComponent } from './PopularBooks/PopularBooks.component';
import { LogoutComponent } from './Logout.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminPageComponent } from './Admin-page/Admin-page.component';
import { InsertBooksComponent } from './Books/insert-books.component';
import { ViewReportsComponent } from './PopularBooks/view-reports.component';

const routes: Routes = [
  {path:"",redirectTo:"Homepage",pathMatch:"full"},
  {component: AuthorsListComponent, path:'Authorslist'},
  {component: AdminListComponent, path:'Adminlist'},
  {component:AdminSignUpComponent,path:'AdminSignUp'},
  {component:BooksListComponent, path:'Booklist'},
  {component: CustomerListComponent, path:'Customerlist'},
  {component:CustomerSignUpComponent, path:'customersignup'},
  {component:HomePageComponent, path:'Homepage'},
  {component:CartComponent,path:'Cart'},
  {component:OrdersListComponent,path:'OrdersList'},
  {component:PopularBookComponent,path:'PopularBooks'},
  {component:LogoutComponent,path:'Logout'},
  {component:CustomerAccountComponent,path:'CustomerAccount'},
  {component:PaymentComponent,path:'Payment'},
  {component:AdminPageComponent,path:'AdminPage'},
  {component:InsertBooksComponent,path:'InsertBooks'},
  {component:ViewReportsComponent,path:'ViewReports'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
