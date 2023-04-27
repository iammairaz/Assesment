import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment-Shyamsteel';
  activeLink:boolean = true;
  constructor(private activatedRoute:ActivatedRoute){
    console.log(activatedRoute);
  }
}
