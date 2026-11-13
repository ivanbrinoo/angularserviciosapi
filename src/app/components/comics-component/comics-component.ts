import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  mensaje!: string;
  comic!: Comic;
  arraycomics!: Comic[]

  constructor(
    private _service: ServiceComics,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.mensaje = this._service.getSaludo();
    this.comic = this._service.getComic();
    this.arraycomics = await this._service.getComicsAsync();
    this._cdr.detectChanges();
  }
}
