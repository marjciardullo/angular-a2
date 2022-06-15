import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarjoryeHomeComponent } from './marjorye-home/marjorye-home.component';
import { MarjoryeTasksComponent } from './marjorye-tasks/marjorye-tasks.component';
import { MarjoryeTasksService } from './marjorye-tasks.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MarjoryeHomeComponent },
      { path: 'tasks', component: MarjoryeTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MarjoryeHomeComponent,
    MarjoryeTasksComponent,
  ],
  providers: [MarjoryeTasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
