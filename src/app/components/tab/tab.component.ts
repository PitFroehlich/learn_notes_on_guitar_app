import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import Vex from 'vexflow';
import { DataService, GuitarTab } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  svg: any;

  tabs: GuitarTab;
  subscription: Subscription;
  group = null;
  VF;
  renderer;

  constructor(private data: DataService) {
    this.VF = Vex.Flow;
    
   }

   ngOnInit() {
    var div = document.getElementById("boo");
    this.renderer = new this.VF.Renderer(div, this.VF.Renderer.Backends.SVG);
    this.subscription = this.data.tabs.subscribe(s => this.updateTabs(s))
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   updateTabs(s: GuitarTab){
    this.tabs = s;
    if (this.tabs.fret < 0) return;

        // Size our SVG:
    this.renderer.resize(500, 500);

    // And get a drawing context:
    var context = this.renderer.getContext();
    var stave = new this.VF.TabStave(10, 40, 400).addClef("tab");
    if (this.group == null) {
      stave.setContext(context).draw();
    } else {
      context.svg.removeChild(this.group);
      
    }

    var notes = [
      new this.VF.TabNote({
        positions: [{str: this.tabs.string, fret: this.tabs.fret}],
        duration: "h"})
    ];
    this.group = context.openGroup();
    this.VF.Formatter.FormatAndDraw(context, stave, notes);
    context.closeGroup();
        
   }

}
