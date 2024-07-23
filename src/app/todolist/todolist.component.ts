import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
taskArray = [{taskName: 'Brush Teeth', isCompleted: false}];

  onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
    
  }

  onDelete(index: number) {
    console.log('delete task', index);
    
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log("CHECKED", index);
    
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}
