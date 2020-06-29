import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "";

  todoArray=[];

  addTodo(value){
  	this.todoArray.push(value);
  }

  deleteItem(value){
  	for(let i=0 ;i<= this.todoArray.length ;i++)
  		{    if(value== this.todoArray[i])
  			{     this.todoArray.splice(i,1)    }
  		}  
  }


  todoSubmit(value:any)
  {     if(value!=="")
  {    this.todoArray.push(value.todo)     //this.todoForm.reset()   
   }else{      alert('Field required **')    }      }
}
