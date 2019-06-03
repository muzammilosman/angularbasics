import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { } from '@angular/forms';

@Component({
  selector: 'app-callers',
  templateUrl: './callers.component.html',
  styleUrls: ['./callers.component.css']
})
export class CallersComponent implements OnInit {
  callertodo: any;
  addLead: boolean = false;
  name: string;
  id: number;
  task: string;

  selectedTask: any;

  sampleMessage: string;
  mymessage: string;

  uservalue: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCallerTask().subscribe((tasks) => {
      this.callertodo = tasks;
    });
  }

  openaddLead() {
    this.addLead = !this.addLead;
  }

  createNewTask() {
    console.log(this.name);
    console.log(this.id);
    console.log(this.task);
    this.dataService.addTaskDetails(this.name, this.id, this.task);
  }

  isTask(task) {
    this.selectedTask = task;
  }

  onNotifyClick(message: string) {
    this.sampleMessage = message;
  }

  updateUserValue() {
    console.log('this is uservalue in callers component' + this.uservalue);
    this.dataService.updateUser(this.uservalue);
  }


}
