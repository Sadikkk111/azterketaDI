import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() modua: boolean = false;
  @Output() modeChanged = new EventEmitter<number>();

  menuAukerak = [
    { id: 1, izena: 'Air quality', route: '/air_stations' },
    { id: 3, izena: 'Cultural events', route: '/cultural_events' },
    { id: 4, izena: 'Euskalmet', route: '/euskalmet' }
  ]

  setMode(id: number) {
    this.modeChanged.emit(id);
  }

}