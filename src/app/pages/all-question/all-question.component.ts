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
  public count;
  public dane;

  constructor(private questionService: QuestionService) { }


  ngOnInit() {
    this.loadData();
    
  }

  openPopup(row,cnt, data){
    this.activityRow = row;
    this.count =cnt;
    this.dane = data;
  }
  private loadData() {
    this.questionService.getQuestionListMock()
      .first()
      .subscribe(res => this.rows = res);
  }
}
