import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/services/question.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.scss']
})
export class AllQuestionComponent implements OnInit {
  public rows: any[];
  public activityRow;
  constructor(private questionService: QuestionService) { }


  ngOnInit() {
    this.loadData();
    
  }

  openPopup(row){
    this.activityRow = row;
    
  }
  private loadData() {
    this.questionService.getQuestionListMock()
      .first()
      .subscribe(res => this.rows = res);
  }
}
