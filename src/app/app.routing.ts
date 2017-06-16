import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

const appRoutes: Routes = [
	{
  	path: '',
  	component: HomeComponent
  }, {
    path: 'members',
  	component: MembersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
