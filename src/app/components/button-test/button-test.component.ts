import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, GuitarTab } from 'src/app/services/data.service';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss'],
})
export class ButtonTestComponent implements OnInit, OnDestroy, OnDestroy {

  guitarTab: GuitarTab;
  subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.tabs.subscribe(s => this.guitarTab = s)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateNote() {
    let pitch = (<HTMLInputElement>document.getElementById('pitch')).value;
    let octave = parseInt((<HTMLInputElement>document.getElementById('octave')).value);
    this.data.changeNote({pitch: pitch, octave: octave})
    console.log(this.guitarTab)
  }

}
