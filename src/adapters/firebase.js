import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { firebaseConfig } from '@config/';

class Firebase {
  constructor() {
    const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
    this.firestore = app.firestore();
  }
  getColletion = (name) => {
    return this.firestore.collection(name);
  };
}

export const fromAPI = () => {
  const FirebaseService = new Firebase();
  const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      const usersArray = [];
      FirebaseService.getColletion('users')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const user = {
              nombres: data.nombres,
              apellidos: data.apellidos,
              email: data.email,
              user_id: data.user_id,
            };
            usersArray.push(user);
          });
          resolve(usersArray);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  const getUser = (user_id) => {
    return new Promise((resolve, reject) => {
      FirebaseService.getColletion('users')
        .doc(user_id)
        .get()
        .then((res) => {
          resolve(res.data());
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return { getAllUsers, getUser };
};

export const toAPI = () => {};
