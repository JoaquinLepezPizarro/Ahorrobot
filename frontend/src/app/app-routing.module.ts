import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';

const routes: Routes = [
  // { path: "", redirectTo: "/inicio", pathMatch: "full"},
  // { path: " /inicio", component: AppComponent},
  // { path: "/quienesSomos", component: QuienesSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
