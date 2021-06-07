import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-guitar-tab',
  providers: [DataService],
  templateUrl: './guitar-tab.component.html',
  styleUrls: ['./guitar-tab.component.scss'],
})
export class GuitarTabComponent implements OnInit {

  private guitarTab = {
    string: 2,
    fret: 0
  }
  constructor(private data: DataService) {
    console.log(this.data.guitarTab);
   }

  ngOnInit() {}

}
