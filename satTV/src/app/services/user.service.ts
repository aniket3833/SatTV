import { Injectable } from '@angular/core';
import { Package } from '../model/subscription';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin: boolean = false;
  url = environment.firebaseConfig.databaseURL;
  db = environment.collection;

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) { }

  getAllUser() {
    return this.firestore.collection(this.db).snapshotChanges();
  }

  addUser(user: any) {
    return this.firestore.collection(this.db).add(user);
  }

  subscribePackage(pack: Package) {

  }
}
