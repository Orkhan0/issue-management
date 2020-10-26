import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent} from "./_layout";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {ProjectModule} from "./pages/project/project.module";
import {IssueModule} from "./pages/issue/issue.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule, PaginationModule} from "ngx-bootstrap";
import {ToastNoAnimationModule} from "ngx-toastr";
import {ApiService} from "./services/api.service";
import {ProjectService} from "./services/shared/project.service";
import {IssueService} from "./services/shared/issue.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NotfoundComponent} from "./shared/notfound/notfound.component";
import {UserService} from "./services/shared/user.service";
import {IssueHistoryService} from "./services/shared/issue.history.service";

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DashboardModule,
    ProjectModule,
    IssueModule,
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastNoAnimationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],

  providers: [
    ApiService,
    ProjectService,
    IssueService,
    UserService,
    IssueHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// imports: [
//   BrowserModule,
//   AppRoutingModule,
//   DashboardModule,
//   ProjectModule,
//   IssueModule,
//   NgxDatatableModule,
//   BrowserModule,
//   HttpClientModule,
//   AppRoutingModule,
//   BrowserAnimationsModule,
//   CollapseModule.forRoot(),
//   BsDropdownModule.forRoot(),
//   ModalModule.forRoot(),
//   PaginationModule.forRoot(),
//   BsDatepickerModule.forRoot(),
//   ToastNoAnimationModule,
//   TranslateModule.forRoot({
//     loader: {
//       provide: TranslateLoader,
//       useFactory: createTranslateLoader,
//       deps: [HttpClient]
//     }
//
//   }),
//   ToastrModule.forRoot({
//     toastComponent: ToastNoAnimation,
//     maxOpened: 1,
//     autoDismiss: true
//   }),
// ],
