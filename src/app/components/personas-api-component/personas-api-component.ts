import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  person!: Persona

  arraypersonas: Persona[] = []

  constructor(
    private _service: ServicePersonas,
    private _cdr: ChangeDetectorRef
  ) {}

  async cargarPersonas(): Promise<void> {
    this.arraypersonas = await this._service.getPersonasAsync();
    this._cdr.detectChanges();
  }

  async buscarPersona(): Promise<void> {
    let idpersona =  parseInt(this.cajaid.nativeElement.value)
    this.person = await this._service.findPersonaAsync(idpersona);
    this._cdr.detectChanges();
  }
}
