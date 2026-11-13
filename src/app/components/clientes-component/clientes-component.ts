import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceClientes } from '../../services/service.clientes';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes-component',
  standalone: false,
  styleUrl: './clientes-component.css',
  templateUrl: './clientes-component.html',
})
export class ClientesComponent implements OnInit {
  arrayclientes: Cliente[] = []

  constructor(
    private _service: ServiceClientes,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayclientes = await this._service.getClientesAsync();
    this._cdr.detectChanges();
  }
}
