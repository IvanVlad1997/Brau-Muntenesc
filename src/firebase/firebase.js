import { firebaseConfig } from './config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firebaseauth = firebase.auth;


export const firestore = firebase.firestore();

export const firebasestore = firebase.firestore;
export const storage = firebase.storage()