import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTermekComponent } from './create-termek/create-termek.component';
import { ListTermekComponent } from './listTermekPage/list-termek.component';

const routes: Routes = [
    { path: 'termeks', component: ListTermekComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermekRoutingModule { }
