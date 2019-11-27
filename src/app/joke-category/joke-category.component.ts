import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-joke-category',
  templateUrl: './joke-category.component.html',
  styleUrls: ['./joke-category.component.css']
})
export class JokeCategoryComponent implements OnInit {
  joke = {};
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getJokeByCategory(this.route.snapshot.params['id']);
  }
  getJokeByCategory(id) {
    this.api.getJoke(id)
      .subscribe(data => {
        this.joke = data;
      });
  }

}
