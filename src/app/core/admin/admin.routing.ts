import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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

import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                children: [
                    {
                        path: 'my-profil',
                        component: MyProfilComponent
                    },
                    {
                        path: 'change-password',
                        component: ChangePasswordComponent
                    }
                ]
            },
            {
                path: 'nomination',
                children: [
                    {
                        path: 'view-nomination-status',
                        component: ViewNominationStatusComponent
                    },
                    {
                        path: 'nomination-web-form',
                        component: NominationWebFormComponent
                    }
                ]
            },
            {
                path: 'simpanan-shariah',
                children: [
                    {
                        path: 'simpanan-shariah-status',
                        component: SimpananShariahStatusComponent
                    },
                    {
                        path: 'application-history',
                        component: ApplicationHistoryComponent
                    }
                ]
            },
            {
                path: 'my-account',
                children: [
                    {
                        path: 'view-statement',
                        component: ViewStatementComponent
                    },
                ]
            },
            {
                path: 'enquiry',
                children: [
                    {
                        path: 'submit-enquiry',
                        component: SubmitEnquiryComponent
                    },
                ]
            },
            {
                path: 'investment',
                component: InvestmentComponent
            },
            {
                path: 'withdrawal',
                children: [
                    {
                        path: 'e-pengeluaran',
                        component: EPengeluaranComponent
                    },
                    {
                        path: 'e-cancellation',
                        component: ECancellationComponent
                    },
                    {
                        path: 'withdrawal-history',
                        component: WithdrawalHistoryComponent
                    }
                ]
            },
            {
                path: 'inbox',
                component: InboxComponent
            },

            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]