import { Routes } from '@angular/router';
import { AllQuestionComponent } from './pages/all-question/all-question.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        loadChildren: 'app/pages/pages.module#PagesModule'
    }
]