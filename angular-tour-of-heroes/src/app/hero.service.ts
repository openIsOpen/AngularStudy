import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './sock-heroes';
import {of, Observable} from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) {}

  getHeroes():Observable<Hero[]>
  {
    return of( HEROES);
  }
}
