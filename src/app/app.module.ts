import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import './shared/rxjs-operators';
import { QuestionService } from './shared/services/question.service';
import { MenuComponent } from './menu/menu.component';
import { AppMaterialModule } from './material.module';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    AppMaterialModule
  ],
  providers: [
    QuestionService
  ],
  entryComponents: [
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
