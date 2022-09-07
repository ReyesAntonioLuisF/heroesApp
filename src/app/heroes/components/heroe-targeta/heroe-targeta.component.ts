import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  `],
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {
  @Input() heroe !: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
