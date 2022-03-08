import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './httpclient.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NewCmpComponent,
    HttpclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService, HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
