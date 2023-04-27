import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  url='https://jsonplaceholder.typicode.com/posts'
  data:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res =>{
      this.data = res;
    })
  }

}
