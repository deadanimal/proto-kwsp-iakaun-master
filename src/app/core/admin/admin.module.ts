import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper";

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewNominationStatusComponent } from './view-nomination-status/view-nomination-status.component';
import { NominationWebFormComponent } from './nomination-web-form/nomination-web-form.component';
import { SimpananShariahStatusComponent } from './simpanan-shariah-status/simpanan-shariah-status.component';
import { ApplicationHistoryComponent } from './application-history/application-history.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { SubmitEnquiryComponent } from './submit-enquiry/submit-enquiry.component';
import { InvestmentComponent } from './investment/investment.component';
import { EPengeluaranComponent } from './e-pengeluaran/e-pengeluaran.component';
import { ECancellationComponent } from './e-cancellation/e-cancellation.component';
import { WithdrawalHistoryComponent } from './withdrawal-history/withdrawal-history.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    MyProfilComponent,
    ChangePasswordComponent,
    ViewNominationStatusComponent,
    NominationWebFormComponent,
    SimpananShariahStatusComponent,
    ApplicationHistoryComponent,
    ViewStatementComponent,
    SubmitEnquiryComponent,
    InvestmentComponent,
    EPengeluaranComponent,
    ECancellationComponent,
    WithdrawalHistoryComponent,
    InboxComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    AccordionModule.forRoot(),
    MatStepperModule,
    CdkStepperModule,
  ]
})
export class AdminModule { }
