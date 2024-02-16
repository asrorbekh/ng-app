import {Component, OnInit} from '@angular/core';
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";
import {TaskService} from "../../task/task.service";
import {MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatIconButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatListItem,
    MatList,
    MatIcon,
    MatLine,
    MatListItemTitle,
    MatListItemLine,
    MatExpansionPanelTitle,
    MatIconButton,
    FormsModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: any[] | undefined;
  newTask: any = {};
  selectedTask: any;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((response) => {
      // @ts-ignore
      this.tasks = response["hydra:member"];
    });
  }

  addTask(newTask: any): void {
    this.taskService.addTask(newTask).subscribe(() => {
      this.loadTasks();
      this.newTask = {}; // Clear the form
    });
  }

  editTask(task: any): void {
    this.selectedTask = { ...task }; // Make a copy to avoid two-way binding issues
  }

  updateTask(updatedTask: any): void {
    this.taskService.updateTask(updatedTask['@id'], updatedTask).subscribe(() => {
      this.loadTasks();
      this.selectedTask = null; // Clear the selected task
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
