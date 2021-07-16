import { Component, Input, OnInit } from '@angular/core';
import { Trait } from 'src/app/models/trait';
import { HtmlHelperService } from 'src/app/services/html-helper.service';

@Component({
  selector: 'trait-card',
  templateUrl: './trait-card.component.html',
})
export class TraitCardComponent implements OnInit {
  @Input()
  trait!: Trait;

  points = 1;

  inputId: string;

  constructor(private _htmlHelper: HtmlHelperService) {
    this.inputId = _htmlHelper.getRandomId();
  }

  ngOnInit(): void {}
}
