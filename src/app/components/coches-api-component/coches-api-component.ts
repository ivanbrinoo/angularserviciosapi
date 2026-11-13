import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
