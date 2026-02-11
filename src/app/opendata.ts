import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Opendata {
  private http = inject(HttpClient);
  private baseUrl = "https://api.euskadi.eus";
  page = 1;
  elements = 20;

  stations(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/air-quality/stations` + `?_elements=${this.elements}&_page=${this.page}`);
  }

  station_info(stationId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/air-quality/stations/${stationId}?_elements=${this.elements}&_page=${this.page}`);
  }
}