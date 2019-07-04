import { Component, OnInit } from '@angular/core';
import { NasdaqService } from 'src/app/services/nasdaq.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  data;
  last;



  constructor(private nasdaqService: NasdaqService) { }

  ngOnInit() {
    this.nasdaqService.observableData.subscribe(data => {
      this.data = data;

      for (let i = 0; i < this.data.length; i++) {

        this.data[i].Difference = this.data[i].Open - this.data[i].Close;

      }

    })
  }

  sort(col) {
    if (col == this.last) {
      this.data.sort(function (a, b) { return a[col] - b[col] });
      this.last = 1;

    }

    else {
      this.data.sort(function (a, b) { return b[col] - a[col] });
      this.last = col;
    }



  }


}
