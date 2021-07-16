import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TraitCardComponent } from './components/trait-card/trait-card.component';
import { DiceRollService } from './services/dice-roll.service';
import { FightCardComponent } from './components/fight-card/fight-card.component';
import { TraitsSectionComponent } from './components/traits-section/traits-section.component';
import { FightsSectionComponent } from './components/fights-section/fights-section.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TraitCardComponent,
    FightCardComponent,
    TraitsSectionComponent,
    FightsSectionComponent,
    GameContainerComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [DiceRollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
