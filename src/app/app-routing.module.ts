import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'infos', component: InfosComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'contributions', component: ContributionsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
