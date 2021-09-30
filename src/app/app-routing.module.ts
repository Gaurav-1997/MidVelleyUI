import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerRegistrationComponent } from './components/player-registration/player-registration.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';

const routes: Routes = [
  {path:'registerPlayer',component:PlayerRegistrationComponent},
  {path:'playerTable', component:PlayersTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
