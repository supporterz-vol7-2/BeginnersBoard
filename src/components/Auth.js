import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZzCuKoMnD00xAejxXsmyme82ITZeNcjA",
  authDomain: "test-b6571.firebaseapp.com",
  projectId: "test-b6571",
  storageBucket: "test-b6571.appspot.com",
  messagingSenderId: "842629946176",
  appId: "1:842629946176:web:ab9604afbc03c63c3278a5",
};
firebase.initializeApp(firebaseConfig);

const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("user", user);
  } else {
    new Auth().login();
  }
  unsubscribe();
});

export default class Auth {
  constructor() {
    this.db = firebase.firestore();
  }
  login() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
        firebase.auth().signInWithPopup(provider);
      });
  }
  async user() {
    return this.db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          return doc.data();
        } else {
          return null;
        }
      });
  }
  async boards() {
    return this.db
      .collection("boards")
      .get()
      .then(function (query) {
        //console.log(query, query.docs[0].data());
        return query.docs;
      });
  }
}
