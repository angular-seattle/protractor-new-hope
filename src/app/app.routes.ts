import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";

import { HomeComponent } from "./home/home.component";
import { TractorControlComponent } from "./tractor-control/tractor-control.component";
import { PrisonerManifestComponent } from "./prisoner-manifest/prisoner-manifest.component";
import { FiringFormComponent } from "./firing-form/firing-form.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tractor',
        component: TractorControlComponent
    },
    {
        path: 'prisoners',
        component: PrisonerManifestComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'firing',
        component: FiringFormComponent,
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {useHash: true});
