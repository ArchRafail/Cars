import {Injectable} from "@angular/core";
import {API_URL} from "../../constants/dbUrl";
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "../models/Vehicle";

@Injectable({ providedIn: 'root' })
export class VehicleHttpService {
  private readonly URL = `${API_URL}/vehicles`;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Vehicle[]>(this.URL);
  }

  get(id: number) {
    return this.http.get<Vehicle>(`${this.URL}/${id}`)
  }

  create(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.URL, vehicle);
  }

  update(vehicle: Vehicle) {
    return this.http.put<Vehicle>(`${this.URL}/${vehicle.id}`, vehicle);
  }

  delete(id: number) {
    return this.http.delete<Vehicle>(`${this.URL}/${id}`);
  }

}
