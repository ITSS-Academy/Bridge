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

  open = false;
 
    onClick(): void {
        this.open = !this.open;
    }
 
    onObscured(obscured: any): void {
        if (obscured) {
            this.open = false;
        }
    }
 
    onActiveZone(active: any): void {
        this.open = active && this.open;
    }

}