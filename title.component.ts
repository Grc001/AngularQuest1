import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
title : string

constructor(){
  this.title = 'Bienvenue sur le site de Tristelstan , suivez-moi sur Twitch les copains vous êtes les bests!'
}
}
