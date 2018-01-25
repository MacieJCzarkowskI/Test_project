import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/services/question.service';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

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

  public amountOfQuestion = 3;
  public singleQuestion;
  constructor(
    private questionService: QuestionService,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();
    
  }

  openPopup(data, elementCount, rows){
    let dialogRef = this.dialog.open(ProfileComponent, {
      width: '550px',
      data: { data, elementCount, rows }
    });
  }

  changePageToSingleQuestion(row){
  this.singleQuestion=row;
  }

  loadMore(){
    if(this.rows.length === this.amountOfQuestion+1){
      this.amountOfQuestion=this.amountOfQuestion +1;
    }else if(this.rows.length === this.amountOfQuestion+2){
      this.amountOfQuestion=this.amountOfQuestion +2;
    }else if(this.rows.length>this.amountOfQuestion){
    this.amountOfQuestion=this.amountOfQuestion +3;
    }
  }
  
  private loadData() {
    this.questionService.getQuestionListMock()
      .first()
      .subscribe(res => this.rows = res);
  }
}
