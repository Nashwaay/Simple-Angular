import { Injectable } from '@angular/core';
import { Toy } from './model/toy';

export const TOYS : any =[
  {id: 1,
  title:"Cloth book",
  description: "your baby will enjoy the soft texture presenting rich visuals",
  category: "infant"},
  {id: 2,
  title:"duplo blocks",
  description: "spark your child's creativity with these blocks that are perfect to hold in those little hands",
  category: "toddler"},
  {id: 3,
  title:"magna tiles",
  description: "endless possibilities, even adults will enjoy playing with it!",
  category: "toddler"}    ,
  {id: 4,
  title:"grimm's wooden toys",
  description: "you will be surprised the ways the kids will play with them",
  category: "toddler",}
  ]

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  updatedToy: Toy;
  constructor( ) { }

  getToys(): Toy[] {
    return TOYS;
  }

  getToyById(id: number): Toy{
    for(let toy of TOYS){
      if(id==toy.id)
      return toy;
    }
  }

  updateToy(id: number, toy:Toy){
    this.updatedToy=this.getToyById(id);
    this.updatedToy.title=toy.title;
    this.updatedToy.description=toy.description;
  }

  deleteToy(id: number){

      TOYS.splice(id-1, 1);
    }
  
}




