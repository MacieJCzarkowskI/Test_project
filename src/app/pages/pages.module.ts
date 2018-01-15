import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllQuestionsBaseComponent } from './all-questions-base/all-questions-base.component';
import { ProfileBaseComponent } from './profile-base/profile-base.component';
import { ProfileMobileComponent } from './profile-mobile/profile-mobile.component';
import { ProfileTabletComponent } from './profile-tablet/profile-tablet.component';
import { SingleQuestionBaseComponent } from './single-question-base/single-question-base.component';
import { SingleQuestionMobileComponent } from './single-question-mobile/single-question-mobile.component';
import { SingleQuestionTabletComponent } from './single-question-tablet/single-question-tablet.component';
import { StoryRwdComponent } from './story-rwd/story-rwd.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AllQuestionsBaseComponent, ProfileBaseComponent, ProfileMobileComponent, ProfileTabletComponent, SingleQuestionBaseComponent, SingleQuestionMobileComponent, SingleQuestionTabletComponent, StoryRwdComponent]
})
export class PagesModule { }
