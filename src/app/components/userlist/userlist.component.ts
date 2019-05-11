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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContent().subscribe((posts) => {
    this.posts = posts;
    console.log(this.posts);
    });
  }

  isPost(post) {
    this.selectedPost = post;
    this.dataService.getDetailContent(post);
  }
}
