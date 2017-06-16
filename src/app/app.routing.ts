import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { AboutComponent } from './about/about.component';

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
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'members/:id/update',
    component: MemberDetailComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
