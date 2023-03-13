import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {
  tasks:{title:string;completed:boolean;}[]=
  [
    {title:"Tender la cama", completed:false},
    {title:"Lavar los platos", completed:false},
    {title:"Hacer deberes", completed:false}
  ]
  newTask = '';

  addTask(){
    if(this.newTask.trim().length===0){
      return;
    }
    this.tasks.push({title:this.newTask,completed:false})
    this.newTask='';
  }
  deleteTask(task: {title:string;completed:boolean;}){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
  getProgress(){
    const totalTasks = this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.completed).length
    return completedTasks / totalTasks;
  }
  constructor() {}

}
