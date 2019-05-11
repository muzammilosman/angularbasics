import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: any;
  isEdit: boolean = false;


  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.name = "Muzammil";
    this.age = 23;
    this.email = "muz.osm@gmail.com" ;
    this.address = {
      street: 'abc street',
      city: 'Kochi',
      state: 'Kerala'
    };
    this.hobbies = ["Leads", "Companies", "Users"];

    this.dataService.getContent().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  addtolist(listitem) {
    this.hobbies.push(listitem);
    return false;
  }

  addSidebar(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

