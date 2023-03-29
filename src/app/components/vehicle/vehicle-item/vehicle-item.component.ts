import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleHttpService } from "../../../api/services/vehicle-http.service";
import { Vehicle } from "../../../api/models/Vehicle";
import { webColors } from "../../../constants/vehicleColors";
import { vehicleTypes } from "../../../constants/vehicleTypes";


@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss']
})
export class VehicleItemComponent {
  vehicle: Vehicle = {
    id: 0,
    manufacturer: '',
    model: '',
    type: '',
    color: '',
    year: ''
  };
  webColors = webColors;
  selectedColor = {hex: "", text: ""};
  types = vehicleTypes;
  selectedType: string | undefined;
  filteredTypes: string[] = [];
  currentDate= new Date();
  submitDisable = false;

  constructor(private route: ActivatedRoute, private vehicleHttpService: VehicleHttpService, private router: Router) {
    this.selectedType = this.types[0];
    let {id} = route.snapshot.params;

    if(id) {
      this.getVehicle(id);
    }
  }

  getVehicle(id: number) {
    this.vehicleHttpService.get(id).subscribe({
      next: vehicle => {
        this.vehicle = vehicle;
        this.getColorFromHex().then(color => this.selectedColor=color);
        this.selectedType = vehicle.type;
      },
      error: error => console.error(error)
    })
  }

  async getColorFromHex() : Promise<{ hex: string; text: string }> {
    let colors: Array<{hex:string, text: string}> = [];
    for (const color of webColors) {
      if(color.hex === this.vehicle.color)
        colors.push(color);
    }
    return colors[0];
  }

  onClickSubmit() {
    this.submitDisable = true;
    this.vehicle.color = this.selectedColor.hex;
    this.vehicle.type = this.selectedType!;
    if(this.vehicle.id) {
      this.vehicleHttpService.update(this.vehicle).subscribe({
        next: () => this.router.navigate([""]),
        error: error => console.error(error)
      });
    } else {
      this.vehicleHttpService.create(this.vehicle).subscribe({
        next: () => this.router.navigate([""]),
        error: error => console.error(error)
      });
    }
  }

  toBoolean(value: boolean | null) :boolean {
    return value === true;
  }

  filterTypes(event: any) {
    let filtered: string[] = [];
    let query = event.query;

    for (let i = 0; i < this.types.length; i++) {
      let type = this.types[i];
      if (type.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(type);
      }
    }
    this.filteredTypes = filtered;
  }

  typeValidate() {
    if (!this.selectedType) {
      return false;
    }
    return this.types.includes(this.selectedType);
  }

}
