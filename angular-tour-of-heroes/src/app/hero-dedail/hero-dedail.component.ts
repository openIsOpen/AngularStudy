import { Component, OnInit, Input } from '@angular/core';
import { Hero} from '../hero'
import {HeroService } from '../hero.service'
import {ActivatedRoute } from '@angular/router'
import { Location} from '@angular/common'

@Component({
  selector: 'app-hero-dedail',
  templateUrl: './hero-dedail.component.html',
  styleUrls: ['./hero-dedail.component.css']
})
export class HeroDedailComponent implements OnInit {

  @Input() hero:Hero;

  constructor(
    private heroService:HeroService,
    private location :Location,
    private activetedRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    const id = this.activetedRoute.snapshot.paramMap.get('id');
    this.heroService.getHeroe(Number.parseInt( id)).subscribe(hero=>this.hero=hero);
  }

  goBack():void
  {
    this.location.back();
  }

}
