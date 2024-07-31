import {Injectable} from '@angular/core';

@Injectable(
  // {
  //   providedIn: 'root' //si je retire cette propriété d'ici, il faut que je spécifie cette classe dans le providers de app.module.ts
  // }
)
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Aloe',
      email: 'aloe@vera.com',
      message: 'Hello World'
    });
    this.insert({
      name: 'Aloca',
      email: 'alocasia@vera.com',
      message: 'Hello World'
    });
    this.insert({
      name: 'Oxa',
      email: 'oxalis@triangularis.com',
      message: 'Hello World'
    });
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }
}
