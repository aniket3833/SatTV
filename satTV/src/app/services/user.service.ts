import { Injectable } from '@angular/core';
import { Package, Transaction, Plan } from '../model/subscription';
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
  userDB = environment.collection.user;
  txDB = environment.collection.transaction;

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  
  }

  public get CurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getUser(email: string, phone: number) {
    return this.firestore.collection(this.userDB).snapshotChanges();
  }

  loggedOut() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  addUser(user: any) {
    return this.firestore.collection(this.userDB).add(user);
  }

  updateUser(user: any) {
    return this.firestore.doc(this.userDB + '/' + user.id).update(user);
  }

  subscribePackage(pack: Package) {

  }

  rechargeAccount(plan: Plan) {
    let tx = new Transaction(this.CurrentUserValue.email, plan, 'tx_' + Math.floor(100000000 + Math.random() * 900000000), new Date());
    tx = JSON.parse(JSON.stringify(tx));
    return this.firestore.collection(this.txDB).add(tx);
  }

  getUserSession(): Observable<boolean> {
    if(this.isLogin !== null){
      return of(this.isLogin);
    } else {
      return of(false);
    }
  }

}
