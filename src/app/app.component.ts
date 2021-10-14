import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = ""
  arraytasks: any[] = []

  delTaskFromArray(element: string) {
    this.arraytasks.forEach((value,index)=>{
        if(value==element) this.arraytasks.splice(index,1);
    });
}

  newTask(): void{
    /* ... Operador Spread 
    Crea un array a partir del array anterior añadiendole un elemento
    USO ...(array-principal), (elemento-a-añadir) */
    if (this.task != "") {
      this.arraytasks = [...this.arraytasks, this.task] 
      this.task = "";
    }
  }

  delTask(taskToDelete: string){
    this.delTaskFromArray(taskToDelete);
  }
}