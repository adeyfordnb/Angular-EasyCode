import { Component} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent{

  showArticle:boolean = true;

  constructor() { }

  fireEvent(e){
    console.log(e);
  }

  toogleArticle(){
  this.showArticle = !this.showArticle;
  }

}
