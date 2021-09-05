import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordSearchComponent } from './components/word-search/word-search.component';


const routes: Routes = [
  {path: 'home', component: WordSearchComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
