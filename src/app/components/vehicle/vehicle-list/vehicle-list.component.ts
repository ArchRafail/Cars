import {Component, ViewChild} from '@angular/core';
import { Vehicle } from "../../../api/models/Vehicle";
import { VehicleHttpService } from "../../../api/services/vehicle-http.service";
import { webColors } from "../../../constants/vehicleColors";
import { vehicleTypes } from "../../../constants/vehicleTypes";
import { Table } from "primeng/table";


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  webColors = webColors;
  types = vehicleTypes;
  error: {errorCode: number, errorName: string, errorMessage: string} | undefined = undefined;
  loading = false;
  @ViewChild('datatable') datatable!: Table;

  constructor(private vehicleHttpService: VehicleHttpService) {
    this.getVehicles();
  }

  getVehicles() {
    this.loading = true;
    this.vehicleHttpService.getAll().subscribe({
      next: vehicles => {
        this.vehicles = vehicles;
        this.loading = false;
      },
      error: error => {
        this.error = {errorCode: error.status, errorName: error.name, errorMessage: error.statusText};
        this.loading = false;
      }
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

  colorFilter($event: any, field: string, matchMode: string) {
    console.log($event.target as HTMLInputElement);
    let searchValue = ($event.target as HTMLInputElement)?.value;
    for (const color of webColors) {
      if (color.text === searchValue) {
        console.log(color.hex);
        this.datatable.filter(color.hex, field, matchMode);
      }
    }
  }

}
