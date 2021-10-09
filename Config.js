import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_bqGCrEZ4HTtu24bkwiuL01-IGxlRIzU",
  authDomain: "gsk-app-f2931.firebaseapp.com",
  projectId: "gsk-app-f2931",
  storageBucket: "gsk-app-f2931.appspot.com",
  messagingSenderId: "51733769675",
  appId: "1:51733769675:web:9a24fe414d727a12ef1a4e",
  measurementId: "G-JZEGJSNH12",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export default db;
