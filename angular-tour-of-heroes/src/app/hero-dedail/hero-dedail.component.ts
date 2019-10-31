import { Component, OnInit, Input } from '@angular/core';
import { Hero} from '../hero'

@Component({
  selector: 'app-hero-dedail',
  templateUrl: './hero-dedail.component.html',
  styleUrls: ['./hero-dedail.component.css']
})
export class HeroDedailComponent implements OnInit {

  @Input() hero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
