import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import Vex from 'vexflow';
import { DataService, GuitarTab, Note } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
//import { count } from 'console';
//import { Note } from 'opensheetmusicdisplay/build/dist/src';
//import { Note, OpenSheetMusicDisplay, Pitch } from "opensheetmusicdisplay";

@Component({
  selector: 'app-note-tab',
  templateUrl: './note-tab.component.html',
  styleUrls: ['./note-tab.component.scss'],
})

export class NoteTabComponent implements OnInit, OnDestroy { 
  svg: any;
  score: Note;
  tabs: GuitarTab;
  subscription: Subscription;
  subscriptionN: Subscription;
  key: string = "c/4";
  isNote: number = 0;
  VF;
  renderer;
  

  constructor(private data: DataService) {
    this.VF = Vex.Flow;
    
   }

   ngOnInit() {
    

    var div = document.getElementById("score"); //ID sollte sich nicht doppeln 
    this.renderer = new this.VF.Renderer(div, this.VF.Renderer.Backends.SVG);
    //this.subscription = this.data.tabs.subscribe(s => this.updateTabs(s)); // s ist Eingabeparamet und => entspricht dem, was mit diesem passiert 
    this.subscriptionN = this.data.noteObj.subscribe(s => this.updateNote(s)); // hier noch mal eine neue Fkt schreiben

  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   updateNote(s: Note){
    
    

    //console.log(s.pitch);
    //console.log("test")
    
    this.score = s;
    this.key = this.score.pitch + "/" + this.score.octave;
    console.log(this.key);
    //if (this.tabs.fret < 0) return;

        // Size our SVG:
    this.renderer.resize(500, 500);

    // And get a drawing context:
    
    var context = this.renderer.getContext();
    var stave = new this.VF.Stave(10, 40, 400).addClef("treble");
    stave.setContext(context).draw();
    var notes = [
        new this.VF.StaveNote({clef: "treble", keys: [this.key], duration: "h" }), 
    ]; 
    
    const svgNoteGroups = notes.map(staveNote => {
      const group = context.openGroup();
      this.VF.Formatter.FormatAndDraw(context, stave, notes);
      staveNote.setContext(context).draw();
      context.closeGroup();
      this.isNote += 1;
    return group;
});

    console.log(this.data);
    console.log(svgNoteGroups[0] + 'Hello');
    //soll die Note eigentlich verschwinden lassen
    if (this.isNote > 1){
      context.svg.removeChild(svgNoteGroups[0]);
    }
    
    
   }

}