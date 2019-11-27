import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  jokes: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getJokes()
      .subscribe(res => {
        this.jokes = res;
      }, err => {
        console.log(err);
      });
  }

}
