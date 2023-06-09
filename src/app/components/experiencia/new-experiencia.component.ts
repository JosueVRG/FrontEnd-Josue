import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  urlE: string = '';
  aniosE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log(this.nombreE)
    console.log(this.descripcionE)
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.urlE, this.aniosE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
  cancel() {this.location.back();}
}
