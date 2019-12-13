import { Injectable } from '@angular/core';
import { Package } from '../model/subscription';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable, of, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  isLogin: boolean = null;
  url = environment.firebaseConfig.databaseURL;
  db = environment.collection;

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  
  }

  public get CurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getUser(email: string, phone: number) {
    return this.firestore.collection(this.db).snapshotChanges();
  }

  loggedOut() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  addUser(user: any) {
    return this.firestore.collection(this.db).add(user);
  }

  subscribePackage(pack: Package) {

  }

  getUserSession(): Observable<boolean> {
    if(this.isLogin !== null){
      return of(this.isLogin);
    } else {
      return of(false);
    }
  }

}
