import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Opendata } from '../opendata';

@Component({
  selector: 'app-air-stations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './air-stations.html',
})
export class AirStations implements OnInit {
  api = inject(Opendata);
  stations: any = signal(null);

  constructor() {}

  ngOnInit() {
    
    this.api.stations().subscribe((data: any) => {
      
      const mappedStations = data.features?.map((f: any) => ({
        id: f.properties.id.toString(),
        izena: f.properties.name
      })) || [];
      
      this.stations.set(mappedStations);  
    });
  }
}