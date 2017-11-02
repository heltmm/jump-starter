import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { FilteredComponent } from './filtered/filtered.component';
import { AuthGuardService } from './auth-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'add',
    component: NewProjectComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit/:id',
    component: EditProjectComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'my-projects',
    component: FilteredComponent,
    canActivate: [AuthGuardService]
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
