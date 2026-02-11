import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Opendata } from '../opendata';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station.html',
})
export class Station implements OnInit {
  stationId: string = '';
  stationInfo: any;

  constructor(
    private route: ActivatedRoute,
    private opendata: Opendata
    data: signal(null);
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.stationId = params['id'];
      
      this.opendata.station_info(this.stationId).subscribe({
        next: (data: any) => {
          console.log('STATION INFO:', data);
          
          //if (data && data.features && data.features.length > 0) {
          //  this.stationInfo = data.features[0].properties;
          //} else {
          //  this.stationInfo = data;
          //}
          this.data.set(data)
        },
        error: (err) => {
          console.error('Error:', err);
          this.stationInfo = {
            id: this.stationId,
            name: 'Estación ' + this.stationId,
            description: 'Descripción de prueba'
          };
        }
      });
    });
  }
}