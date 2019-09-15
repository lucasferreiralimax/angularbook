import { Component, OnInit, ViewEncapsulation } from '@angular/core'

import { AmigosService } from '@services/amigos.service'

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.sass'],
  encapsulation: ViewEncapsulation.None
})

export class AmigosComponent implements OnInit {

  constructor(private amigosService:AmigosService) { }

  amigos = []

  getAmigos(): void {
    this.amigosService.getAmigos()
        .subscribe(amigos => this.amigos = amigos)
  }

  ngOnInit() {
    this.getAmigos()
  }

}
