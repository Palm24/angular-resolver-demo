import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  displayData: any;

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ data }) => {
      // console.log(data);
      this.displayData = data;
    });
  }
}
