import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playerList : Player[];

  constructor(private playerSerice: PlayerService) { }

  ngOnInit(): void {
    this.playerSerice.getPlyers().subscribe(res =>{
      this.playerList = res;
      console.log(res);
    })
  }

}
