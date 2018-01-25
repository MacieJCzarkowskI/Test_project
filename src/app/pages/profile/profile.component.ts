import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() data;
  @Input() elementCount;
  @Input() rows;
  
  constructor() { }

  changePopupLeft(){
    
    if(this.elementCount>0){
     this.data = this.rows[this.elementCount-1];
     this.elementCount=this.elementCount-1;
    }
  }

  changePopupRight(){
    
    if(this.elementCount<this.rows.length){
     this.data = this.rows[this.elementCount+1];
     this.elementCount=this.elementCount+1;
    }
  }
  ngOnInit() {
  
  }

}
