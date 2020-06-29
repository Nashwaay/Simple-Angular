import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Toy} from '../model/toy';
import {ToyService} from '../toy.service';


@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.scss']
})

export class EditcardComponent implements OnInit {

  id: number;
  edit: Toy;
  toy: Toy;
  


  constructor(private route: ActivatedRoute, private service: ToyService, public router: Router) { }

  ngOnInit(): void {
      this.id=this.route.snapshot.params.id;
      this.edit=this.service.getToyById(this.id);
    }

    Update(id){
      this.service.updateToy(this.id, this.edit);
      this.router.navigate(['']);
    }

}
