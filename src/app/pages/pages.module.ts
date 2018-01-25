import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AllQuestionComponent } from './all-question/all-question.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { ROUTES } from './pages.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    AllQuestionComponent,
    SingleQuestionComponent,
  ]
})
export class PagesModule {}

