import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryComponent } from './pages/registry/registry.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
       { path: 'registry', component: RegistryComponent },
       { path: 'login', component: LoginComponent },
       { path: '**', redirectTo: 'basics' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
