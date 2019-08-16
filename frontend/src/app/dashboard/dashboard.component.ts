import { Component, OnInit } from '@angular/core';
import { TodoService } from '../main/shared/todo.service';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TodoService]
})
export class DashboardComponent implements OnInit {
  todolistArray:any[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.todolistArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.todolistArray.push(x);
      })
      //sort array isChecked
      this.todolistArray.sort((a,b)=>{
        return a.isChecked - b.isChecked;
      })
    })
  }

  onAdd(itemTitle){
    this.todoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  cheacked($key,isChecked){
    this.todoService.checkOrUncheckTitle($key,!isChecked);

  }

  delete($key){
    this.todoService.removeTitle($key);

  }


}
