import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from 'src/app/core/components/main/main.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "tarefas"
  },
  {
    path: "tarefas",
    component: MainComponent,
    loadChildren: () => import("src/app/tarefas/tarefas.module").then((m) => m.TarefasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
