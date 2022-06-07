import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // public parts: string[] = ['Integrated Circuits'];

  public parts: string[] = [
    'Capacitors',
    'Diodes',
    'LEDs',
    'Integrated Circuits',
    'DIP Sockets',
    'DIP Switches',
    'Boost Converters',
    'Resistors',
    'Relays',
    'Crystals',
    'Switches',
    'Buttons',
    'Audio Jacks',
    'Block Connectors',
    'Bridge Rectifiers',
    'Buzzers',
    'Capacitors (Ceramic Disc)',
    'Capacitors (Mylar)',
    'Capacitors (Other)',
    'Laser Diodes',
    '7-Segment Displays',
    'Fuses',
    'Inductors & Coils',
    'Infrared Receivers',
    'Microphones',
    'DC Motors',
    'Potentiometers',
    'Resistors (Light Dependent)',
    'Speakers',
    'Transformers',
    'Transistors',
    'Capacitors (Variable)',
    'Microcontroller Boards'

  ].sort();

  constructor() { }

  ngOnInit(): void {
  }

}
