import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RoutingModule} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./notfound/notfound.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserService} from "./services/user.service";


const AWS_COMPONENTS = [
  HomeComponent,
  NotFoundComponent,
  UserListComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...AWS_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
