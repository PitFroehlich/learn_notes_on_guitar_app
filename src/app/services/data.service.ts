import { Injectable } from '@angular/core';

interface GuitarTab {
  string: number;
  fret: number;
}

@Injectable({
  providedIn: 'root'
})



export class DataService {
  public guitarTab = {
    string: 2,
    fret: 0
  }

  public bpm: number = 0;
  public note: string;
  constructor() { }

  getGuitarTab() {
    return this.guitarTab;
  }
  setGuitarTab(guitarTab: GuitarTab){
    this.guitarTab = guitarTab;
  }


}
