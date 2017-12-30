/* import libraries */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
/* import component */
import { BuildTableComponent } from './build-table/build-table.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: 'build-table',
        component: BuildTableComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { useHash: true }
        // { enableTracing: true } // <-- debugging purposes only
        ),
    ],
    exports: [
        RouterModule,
    ],
    declarations: [
        HomeComponent,
        BuildTableComponent,
    ]
})
export class AppRoutingModule { }
