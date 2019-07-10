import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  user: UsuarioModel;

  constructor() { }

  registerUser(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(
        res => resolve(res),
        err => reject(err));
    });
   }

   loginUser(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(
        res => resolve(res),
        err => reject(err));
    });
   }

   logoutUser() {
     return new Promise((resolve, reject) => {
       if (firebase.auth().currentUser) {
         firebase.auth().signOut()
         .then(() => {
           console.log('LOG Out');
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     });
   }

   userDetails() {
     return firebase.auth().currentUser;
   }
}
