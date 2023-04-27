import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) {
    console.log(route);
   }

  url = 'https://jsonplaceholder.typicode.com/todos';
  data:any
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }

}
