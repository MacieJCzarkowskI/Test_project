import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/services/question.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.scss']
})
export class AllQuestionComponent implements OnInit {
  public rows: any[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.questionService.getQuestionListMock()
      .first()
      .subscribe(res => this.rows = res);
  }
}
