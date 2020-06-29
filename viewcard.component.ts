import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ToyService} from '../toy.service';
import {Toy} from '../model/toy';

@Component({
  selector: 'app-viewcard',
  templateUrl: './viewcard.component.html',
  styleUrls: ['./viewcard.component.scss']
})
export class ViewcardComponent implements OnInit {

  id: number;
  view: Toy;

  constructor(private route: ActivatedRoute, private service: ToyService) { }

  ngOnInit(): void {
      this.id=this.route.snapshot.params.id;
      this.view=this.service.getToyById(this.id);
    }

}
