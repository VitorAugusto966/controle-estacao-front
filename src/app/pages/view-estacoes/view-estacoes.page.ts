import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/api/station.service';

@Component({
  selector: 'app-view-estacoes',
  templateUrl: './view-estacoes.page.html',
  styleUrls: ['./view-estacoes.page.scss'],
})
export class ViewEstacoesPage implements OnInit {

  public estacoes:any[] = [];
  constructor(private http:HttpClient,private stationService: StationService) {
    this.get();
     }

  ngOnInit() {
  }

  get()
  {
    
   this.stationService.getAll()
    .then((estacoes:[]) =>
    {
      
      this.estacoes = estacoes;
      
      console.log(estacoes);
    })
    .catch((erro) =>
    {
      console.log("deu ruim");
     
      console.log(erro);
    })

  }

}
