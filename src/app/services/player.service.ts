import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiBaseUPl ="https://localhost:44312/api"
  postId:number;
  errorMessage: string;

  constructor(private http:HttpClient) { }

  getPlyers():Observable<Player[]>
  {
    console.log("Player Service called");
    return this.http.get<Player[]>(this.apiBaseUPl+"/PlayerTables");
  }

  addPlayer(player:Player)
  {
    this.http.post<Player>(this.apiBaseUPl+"/PlayerTables",player).subscribe({
      next: data => {
        this.postId = data.id;
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
    });
  }
}
