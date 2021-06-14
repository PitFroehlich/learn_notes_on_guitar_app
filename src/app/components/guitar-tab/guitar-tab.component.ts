import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, GuitarTab } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guitar-tab',
  templateUrl: './guitar-tab.component.html',
  styleUrls: ['./guitar-tab.component.scss'],
})
export class GuitarTabComponent implements OnInit, OnDestroy {

  string: GuitarTab;
  subscription: Subscription;


  constructor(private data: DataService) {
    // console.log(this.data.guitarTab);
   }

  ngOnInit() {
    this.subscription = this.data.tabs.subscribe(s => this.string = s)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
