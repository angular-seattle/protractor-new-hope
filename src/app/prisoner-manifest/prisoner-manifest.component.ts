import { Component, OnInit } from '@angular/core';

const PRISONERS = [
  {name: "Zarel Corrino"},
  {name: "Drake McConnell"},
  {name: "Jar-Tan  Hamasaki" },
  {name: "Archlonus Fury"},
  {name: "Leia Organa" },
  {name: "Iris Aboleth"},
  {name: "Carth Burkan"},
  {name: "Ubinaarisan Helkosh"},
  {name: "Yvan Renarus"},
  {name: "Anolo Benten"},
  {name: "Warryk Triblen"},
  {name: "Dexen Klakk"},
  {name: "Juntah Bele"},
  {name: "Zolar Aasa"},
  {name: "Viera Danigo"},
  {name: "Mai Tobian"},
  {name: "Arani Harkor"},
  {name: "Zentoo Damar"},
  {name: "Dahn Triblen"},
  {name: "Jarvis Cata"},
  {name: "Xiarr Tendoora"},
  {name: "Dietrich Marshall"},
  {name: "Padalynn Arrel"},
  {name: "Calla Annix"}
]

@Component({
  selector: 'app-prisoner-manifest',
  templateUrl: './prisoner-manifest.component.html',
  styleUrls: ['./prisoner-manifest.component.css']
})
export class PrisonerManifestComponent implements OnInit {
  prisoners = PRISONERS;

  constructor() { }

  ngOnInit() {
  }
}
