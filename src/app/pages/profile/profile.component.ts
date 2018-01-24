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
      console.log(this.rows);
      console.log(":LO:")
     this.data = this.rows[this.elementCount-1];
     this.elementCount=this.elementCount-1;
    }
  }

  ngOnInit() {
  
  }

}
