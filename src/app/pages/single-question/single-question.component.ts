import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  @Input() row;

  constructor(
    private router: ActivatedRoute
  ) {
    console.log(this.router)
  }

  ngOnInit() {
  }

}
