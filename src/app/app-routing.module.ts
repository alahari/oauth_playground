import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { OauthTestComponent } from './oauth-test/oauth-test.component';
import { RedisApiComponent } from './redis-api/redis-api.component';

const routes: Routes = [
  { path: 'home',component: AppComponent },
  {path:'oauthtest',component:OauthTestComponent},
  {path:'redis',component:RedisApiComponent},

  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
