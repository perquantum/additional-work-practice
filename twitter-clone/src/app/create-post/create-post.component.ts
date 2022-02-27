import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postContent = "";
  flagForPost = false;
  giveFlagForPost(postContent:string){
    alert(postContent);
    if(postContent.length!=0){
      alert(5);
    }
    else{
      alert(10);
    }
  }

}
