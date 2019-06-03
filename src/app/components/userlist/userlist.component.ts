import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  posts: any;
  selectedPost: any;
  mymessage: any;

  userValue: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContent().subscribe((posts) => {
    this.posts = posts;
    console.log(this.posts);
    });

    this.dataService.cast.subscribe(data => {
      console.log('User value' + data);
      this.userValue  = data;
    });
  }

  isPost(post) {
    this.selectedPost = post;
    this.dataService.getDetailContent(post);
  }

  newUserValue(data) {
    this.dataService.updateUser(data);
  }

}
