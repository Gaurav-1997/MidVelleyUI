import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiBaseUPl ="https://localhost:44312/api/PlayerTables"
  constructor(private http:HttpClient) { }

  getPlyers():Observable<Player[]>
  {
    console.log("Player Service called");
    return this.http.get<Player[]>(this.apiBaseUPl);
  }

  addPlayer(player:Player)
  {
    this.http.post(this.apiBaseUPl,player);
  }
}
