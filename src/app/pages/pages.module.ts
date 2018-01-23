import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AllQuestionComponent } from './all-question/all-question.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { ROUTES } from './pages.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    AllQuestionComponent,
    ProfileComponent,
    SingleQuestionComponent,
  ],
  exports: [
    ProfileComponent
  ]
})
export class PagesModule {}

