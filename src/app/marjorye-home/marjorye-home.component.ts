import { Component, OnInit } from '@angular/core';
import { MarjoryeTasksService } from '../marjorye-tasks.service';

@Component({
  selector: 'app-marjorye-home',
  templateUrl: './marjorye-home.component.html',
  styleUrls: ['./marjorye-home.component.css'],
})
export class MarjoryeHomeComponent implements OnInit {
  constructor(private marjoryeService: MarjoryeTasksService) {}

  ngOnInit() {}

  contarTasks() {
    return this.marjoryeService.contarTarefas();
  }
}
