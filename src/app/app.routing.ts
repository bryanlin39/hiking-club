import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
	{
  	path: '',
  	component: HomeComponent
  }, {
    path: 'members',
  	component: MembersComponent
  }, {
    path: 'members/:id',
		component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
