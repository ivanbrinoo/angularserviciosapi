import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Coches } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-detalle-coche-component',
  standalone: false,
  styleUrl: './detalle-coche-component.css',
  templateUrl: './detalle-coche-component.html',
})
export class DetalleCocheComponent implements OnInit{
  mensaje!: string
  car!: Coches

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: ServiceCoches,
  ) {}
  
  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async(params: Params) => {
      let idcoche = params['idcoche'];
      this.mensaje = "Soy el coche nº " + idcoche;
      this.car = await this._service.buscarCochesAsync(idcoche);
      this._cdr.detectChanges();

    });
  };
}
