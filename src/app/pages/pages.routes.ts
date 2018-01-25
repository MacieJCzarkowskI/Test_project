import { Routes } from '@angular/router';
import { AllQuestionComponent } from './all-question/all-question.component';
import { MenuComponent } from '../menu/menu.component';
import { SingleQuestionComponent } from '../pages/single-question/single-question.component';
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'all-question'
    },
    {
        path: 'all-question',
        component: AllQuestionComponent
    },
    {
        path: 'single-question/:id',
        component: SingleQuestionComponent
    }
]