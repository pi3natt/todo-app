import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { element, $ } from 'protractor';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [TodoService]
})

export class MainComponent implements OnInit {
  todolistArray:any[];
  closeResult: string;
  modal: NgbModalRef;

  constructor(private todoService: TodoService,
              private modalService: NgbModal) { }

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
      this.todolistArray.sort((a,b) => {
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

  open(content){
    this.modal = this.modalService.open(content);
  }



}
