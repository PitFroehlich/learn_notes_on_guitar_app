import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-button-test',
  providers: [DataService],
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss'],
})
export class ButtonTestComponent implements OnInit {

  constructor(private data: DataService) { }

  changeString() {    
    this.data.guitarTab.string += 1;
    console.log(this.data.guitarTab);
    
  }

  ngOnInit() {}

}
