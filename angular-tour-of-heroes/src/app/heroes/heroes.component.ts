import { Component, OnInit } from '@angular/core';
//import {HEROES} from '../sock-heroes'
import {Hero} from '../hero'
import {HeroService} from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroes:Hero[];

  getHeroes()
  {
    this.heroService.getHeroes().subscribe(
      heroes=>this.heroes = heroes
    );
  }


  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }





}
