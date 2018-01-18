import { Component} from '@angular/core';

interface User{
  name:string,
  email:string,
  editing:boolean
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent{

  user:User = {
    name: '',
    email: '',
    editing: true
  };

  users:User[] = [{
    name: 'User',
    email: 'example@example.com',
    editing: true
  }];

  constructor() { }

  onSubmit(form){
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editing: this.user.editing
    });

    form.resetForm();
  }

  removeUser(i){
    this.users.splice(i, 1);
  }

  editingUser(i){
    this.users[i].editing= !this.users[i].editing;
  }

}
