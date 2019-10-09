import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/classes/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http:HttpClient) { }

  getAllUnits():Observable<Unit[]>{
    return this.http.get("http://localhost:8090/unit/all") as Observable<Unit[]>;
  }

}
