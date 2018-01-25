import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePopupLeft(){
    if(this.data.elementCount>0){
     this.data.data = this.data.rows[this.data.elementCount-1];
     this.data.elementCount=this.data.elementCount-1;
    }
  }

  changePopupRight(){
    if(this.data.elementCount<this.data.rows.length){
     this.data.data = this.data.rows[this.data.elementCount+1];
     this.data.elementCount = this.data.elementCount+1;
    }
  }
  ngOnInit() {

  }

}
