import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	itemsList: FirebaseListObservable<any[]>;
	itemsObject: FirebaseObjectObservable<any>;;

  	title = ' forloop Uyo';

  constructor(db: AngularFireDatabase) {

  	this.itemsList = db.list('/items');
  	this.itemsObject = db.object('/items');


  }

  save(newName: string) {
    
    const addItem = this.itemsObject.set({ name: newName });
    

  }
  update(newName: string) {
    this.itemsObject.update({ name: newName });
  }
  delete() {
    
   const removedItem =this.itemsObject.remove();

   	removedItem.then(_ => console.log('success'))
  .catch(err => console.log(err, 'You dont have access!'));

  }
}
