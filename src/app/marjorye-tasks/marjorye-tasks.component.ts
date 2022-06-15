import { Component, OnInit } from '@angular/core';
import { MarjoryeTasksService } from '../marjorye-tasks.service';

@Component({
  selector: 'app-marjorye-tasks',
  templateUrl: './marjorye-tasks.component.html',
  styleUrls: ['./marjorye-tasks.component.css'],
})
export class MarjoryeTasksComponent implements OnInit {
  task = '';
  constructor(private marjoryeService: MarjoryeTasksService) {}

  ngOnInit() {}

  cadastrarTarefa() {
    this.marjoryeService.adicionar(this.task);
  }

  removerTarefa(index: number) {
    this.marjoryeService.remover(index);
  }

  listarTarefas() {
    return this.marjoryeService.mostrarLista();
  }
}
