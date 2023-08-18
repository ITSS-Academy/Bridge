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

}