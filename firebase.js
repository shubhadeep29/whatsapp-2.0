import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDqvD2l1e7QjSVLXokDlextMHBY2ILqN6g',
  authDomain: 'whatsapp-2-dc52d.firebaseapp.com',
  projectId: 'whatsapp-2-dc52d',
  storageBucket: 'whatsapp-2-dc52d.appspot.com',
  messagingSenderId: '857568334638',
  appId: '1:857568334638:web:75cf30e0f2cc2f30f120bf',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
