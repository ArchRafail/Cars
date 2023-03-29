import { Component } from '@angular/core';
import { Vehicle } from "../../../api/models/Vehicle";
import { VehicleHttpService } from "../../../api/services/vehicle-http.service";
import { webColors } from "../../../constants/vehicleColors";


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  webColors = webColors;

  constructor(private vehicleHttpService: VehicleHttpService) {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleHttpService.getAll().subscribe({
      next: vehicles => this.vehicles = vehicles,
      error: error => console.error(error)
    })
  }

  searchVehicle(id: number) {
    let vehicle: Vehicle[] = this.vehicles.filter((item) => item.id === id);
    const w = window.open(`https://www.google.com/search?q=${vehicle[0].manufacturer} ${vehicle[0].model} (${vehicle[0].year})`, '_blank');
    if (w) w.focus();
  }

  deleteVehicle(id: number) {
    this.vehicleHttpService.delete(id).subscribe({
      next: () => this.refresh(),
      error: error => console.error(error)
    });
  }

  refresh() {
    this.vehicles = [];
    this.getVehicles();
  }

}
