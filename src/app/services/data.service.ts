import { Injectable } from '@angular/core';
import { Pitch } from 'opensheetmusicdisplay/build/dist/src';
//import { Pitch } from 'opensheetmusicdisplay/build/dist/src';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export interface GuitarTab {
  string: number;
  fret: number;
}

interface Guitar {
  tuning: Array<Note>;
} 

export interface Note {
  pitch: string;
  octave: number;
}


@Injectable({
  providedIn: 'root'
})



export class DataService {


  private note = new BehaviorSubject<Note>({pitch: 'E', octave: 3});
  noteObj = this.note.asObservable();

  private tab = new BehaviorSubject<GuitarTab>({string: 1, fret: 0});
  tabs = this.tab.asObservable();

  private guitar = [
    {pitch: 'E', octave: 4},
    {pitch: 'B', octave: 3},
    {pitch: 'G', octave: 3},
    {pitch: 'D', octave: 3},
    {pitch: 'A', octave: 2},
    {pitch: 'E', octave: 2},
  ]

  
  constructor() { }

  changeString(u: number) {
    this.tab.next({string: u, fret: this.calculateTab(u) })
  }
  changeNote(u: Note) {
    this.note.next({pitch: u.pitch, octave: u.octave});
    console.log(this.note.value);
    this.changeString(this.tab.getValue().string);
  
  }
  
  noteToMidi(note: Note){
    const notes = ['C','C#/Db', 'D','D#/Db','E', 'F','F#/Gb','G','G#/Ab', 'A','A#/Bb','B']
    let number = notes.indexOf(note.pitch);
    let octave = note.octave;
    let midi = number + octave * 12 + 12;
    return midi;
  }

  calculateTab(string: number){
    let midi = this.noteToMidi(this.note.getValue());
    let tuningNote = this.guitar[string - 1];
    let tuningNoteMidi = this.noteToMidi(tuningNote);
    let fret = midi - tuningNoteMidi;
    //console.log(this.note.value)
    return fret;
    

  }

}
