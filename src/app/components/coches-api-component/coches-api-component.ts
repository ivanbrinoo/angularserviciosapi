import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Coches } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
[x: string]: any;
  @ViewChild("cajaid") cajaid!: ElementRef;
  car!: Coches;
  async buscarCoche(): Promise<void> {
    let idcoche = parseInt(this.cajaid.nativeElement.value);
    this.car = await this._service.buscarCochesAsync(idcoche);
    this._cdr.detectChanges();
  }


  arraycoches: Coches[] = [];

  constructor(
    private _service: ServiceCoches,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.arraycoches = await this._service.verCochesAsync();
    this._cdr.detectChanges();
    }

    
}
