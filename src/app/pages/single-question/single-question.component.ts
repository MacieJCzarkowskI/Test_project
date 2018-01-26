import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../shared/services/question.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {
  [x: string]: any;
  public rows: any[];
  public id;
  constructor(
    private questionService: QuestionService,
    public dialog: MatDialog,
    private router: ActivatedRoute
    ) 
    {
     this.id=this.router.snapshot.params.id;
  }

  ngOnInit() {
    this.loadData();

  }

  public setVote(vote: boolean, id: number) {
    this.questionService.updateMock(vote, id)
      .first()
      .subscribe(res => {
        this.rows[this.id] = res;
      });
  }

  private loadData() {
    this.questionService.getQuestionListMock()
      .first()
      .subscribe(res => this.rows = res);
  }
}
