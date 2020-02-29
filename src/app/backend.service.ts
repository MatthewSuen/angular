import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})

export class BackendService implements InMemoryDbService {
  constructor() { }
  createDb(){
    const contacts = [
      {id: 1, Name: 'Apple', Email: 'a@mail.com', Age: 20},
      {id: 2, Name: 'Banana', Email: 'b@mail.com', Age: 21},
      {id: 3, Name: 'Cat', Email: 'c@mail.com', Age: 22},
      {id: 4, Name: 'Dog', Email: 'd@mail.com', Age: 23}
    ];
    return {contacts};
  }
}
