import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {
  addPlayerForm: FormGroup;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.addPlayerForm = new FormGroup({
      name : new FormControl(null, [Validators.required, Validators.email]),
      country : new FormControl(null, Validators.required),
      matchPlayed : new FormControl(null, Validators.required),
      runScored : new FormControl(0),
      wickets : new FormControl(0),
      outOnDuck : new FormControl(0),
      typeOfPlayer : new FormControl(null, [Validators.required, Validators.email])

    }, );
  }

  onSubmit()
  {
    console.log(this.addPlayerForm.value);
    this.playerService.addPlayer(this.addPlayerForm.value);
  }

}
