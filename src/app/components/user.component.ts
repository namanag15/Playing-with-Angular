import { Component } from '@angular/core';

@Component({
selector: 'user',
template: `
<h1>{{name}}</h1>
<p><strong>Email:</strong> {{email}} </p>
<p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p> 
<h3>Hobbies</h3>
<button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
<div *ngIf="showHobbies">
	<ul>
	    <li *ngFor="let hobby of hobbies;let i=index">
	        {{hobby}} <button (click)="removeHobby(i)">X</button>
	    </li>
	</ul>
	<form (submit)=addHobby(hobby.value)>
        <label>Name: </label> <br>
        <input type="text" #hobby  /> <br>
    </form>
</div>
<hr>
<h3> Edit User </h3>
<form>
    <label>Name: </label> <br>
    <input type="text" name="name" [(ngModel)]="name" /> <br>
    <label>Email: </label> <br>
    <input type="text" name="email" [(ngModel)]="email" /> <br>
    <label>Street: </label> <br>
    <input type="text" name="address.street" [(ngModel)]="address.street" /> <br>
    <label>City: </label> <br>
    <input type="text" name="address.city" [(ngModel)]="address.city" /> <br>
    <label>State: </label> <br>
    <input type="text" name="address.state" [(ngModel)]="address.state" /> <br>
</form>
       `,
   })
export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;


    constructor(){
        this.name = 'John Doe'; 
        this.email= 'johndoe@gmail.com'
        this.address= {
          street: 'Bakers Street',
          city: 'Los Angeles',
          state: 'California'
       }
        this.hobbies= ['Music', 'Movies', 'Sports']
        this.showHobbies= false
    }

    toggleHobbies(){
       if(this.showHobbies == true){
           this.showHobbies= false
       }
       else{
           this.showHobbies= true
       }
    }

    addHobby(hobby){
       this.hobbies.push(hobby)
    }

    removeHobby(i){
       this.hobbies.splice(i,1)
    }

}

interface address {
	street: string;
	city: string;
	state: string;
}

