import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coches } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-menu-coches-component',
  standalone: false,
  styleUrl: './menu-coches-component.css',
  templateUrl: './menu-coches-component.html',
})
export class MenuCochesComponent implements OnInit{
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
