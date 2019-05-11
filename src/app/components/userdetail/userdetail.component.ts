import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  @Input() post: any;
  @Input() taskdetail: any;

  @Output() notify: EventEmitter <string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.notify.emit('Message From Child Component');
  }

}
