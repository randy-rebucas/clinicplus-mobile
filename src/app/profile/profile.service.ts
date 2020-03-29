import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  get(patientId: string) {
    return this.http.get<any>(BACKEND_URL + '/' + patientId);
  }

  update(updatedPatient: any) {
    return this.http.put<any>(BACKEND_URL + '/' + updatedPatient._id, updatedPatient);
  }
}
