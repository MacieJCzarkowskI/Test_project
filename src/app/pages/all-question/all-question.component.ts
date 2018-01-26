import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/services/question.service';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';
import { forEach } from '@angular/router/src/utils/collection';

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

  public allRows;

  public search;
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
      width: '800px',
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

  changeFilterToRecent(){
    this.rows.sort( (a,b)=>{
    return a.author.upvotes-b.author.upvotes;
    })
  }
  


  changeFilterToHot(){
    this.rows.sort( (a,b)=>{
      return a.author.activity-b.author.activity;
      })
  }

  serchByText(){
    let array:any[];
    array=[];
    for(let i=0;i<this.allRows.length;i++){
      if(this.allRows[i].title.indexOf(this.search)!==-1){
        array.push(this.allRows[i]);
      }
    }
    this.rows = array;
  }


  private loadData() {
    this.questionService.getQuestionListMock()
      .first()
      .subscribe(res => {
        this.rows = [...res];
        this.allRows = res;
      });
  }
}
