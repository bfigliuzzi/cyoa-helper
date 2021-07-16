import { Component, OnInit } from '@angular/core';
import { GamesStore } from './stores/games.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  hasCurrentGame = false;

  constructor(private gamesStore: GamesStore) {}
  
  ngOnInit(): void {
    this.gamesStore.currentGame.subscribe(
      (game) => (this.hasCurrentGame = game != null)
    );
  }
}
