import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profiles = [
    {
      "id":0,
      "name":"Nufer Varudi",
      "username":"nufervarudi",
      "followStatus":"Unfollow"
    },
    {
      "id":1,
      "name":"Rohan Singh",
      "username":"rohansingh",
      "followStatus":"Unfollow"
    },
    {
      "id":2,
      "name":"Mahesh Vala",
      "username":"maheshvala",
      "followStatus":"Unfollow"
    },
    {
      "id":3,
      "name":"Helly Hirpara",
      "username":"hellyhirpara",
      "followStatus":"Unfollow"
    }
  ]

  followFunction(index:number){
    let i = this.profiles[index].id;
    if(this.profiles[i].followStatus=="Follow"){
      this.profiles[i].followStatus = "Unfollow";
    }
    else{
      this.profiles[i].followStatus = "Follow";
    }
  }

}
