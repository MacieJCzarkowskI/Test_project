import { Routes } from '@angular/router';
import { AllQuestionComponent } from './all-question/all-question.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'all-question'
    },
    {
        path: 'all-question',
        component: AllQuestionComponent
    }
]