import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Toy} from '../model/toy';
import {ToyService} from '../toy.service';


@Component({
  selector: 'app-toy-card',
  templateUrl: './toy-card.component.html',
  styleUrls: ['./toy-card.component.scss']
})
export class ToyCardComponent implements OnInit {

  @Input()
  toy: Toy;

  constructor(public router: Router, private service: ToyService) { }



ngOnInit() {

}

  cardClasses(){
  	if(this.toy.category=='infant')
      return 'infants';
    else if(this.toy.category=='toddler')
      return 'infants';
  }

  onToyViewed(id: number){
    this.router.navigate(['view',id]);
  }

  onToyEdit(id: number){
    this.router.navigate(['edit',id]);
  }

  onToyDelete(id: number){
    this.service.deleteToy(id);
    this.router.navigate(['']);   
  }

  

}
