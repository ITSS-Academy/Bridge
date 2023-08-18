import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tuiSum } from '@taiga-ui/cdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';


  constructor(private http: HttpClient){
  }

  private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly sum = tuiSum(...this.value);
 
    getValue(index: number): number {
        return Number.isNaN(index) ? this.sum : this.value[index];
    }
 
    getLabel(index: number): string {
        return Number.isNaN(index) ? 'Total' : this.labels[index];
    }

}