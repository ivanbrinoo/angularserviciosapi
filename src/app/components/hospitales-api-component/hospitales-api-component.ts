import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-hospitales-api-component',
  standalone: false,
  styleUrl: './hospitales-api-component.css',
  templateUrl: './hospitales-api-component.html',
})
export class HospitalesApiComponent implements OnInit {
  @ViewChild("cajaid") cajaid!: ElementRef
  arrayhospitales: Hospital[] = []
  hospitalencontrado!: Hospital

  constructor(
    private _service: ServiceHospitales,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arrayhospitales = await this._service.getHospitalesAsync();
    this._cdr.detectChanges();
  }

  async buscarHospital():Promise<void> {
    let idhospital = parseInt(this.cajaid.nativeElement.value);
    this.hospitalencontrado = await this._service.findHospitalAsync(idhospital);
    this._cdr.detectChanges();
  }
}
