import { Component, OnInit } from '@angular/core';
import {ToyService} from '../toy.service';
import { Toy } from '../model/toy';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  toys;
  constructor(private service: ToyService) { }

  ngOnInit(): void {
    this.toys=this.service.getToys();
  }

}
