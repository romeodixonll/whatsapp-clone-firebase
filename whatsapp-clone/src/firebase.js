import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaLkHxvQoc5v5LnOYL1RSgD9SMBfNRKKc",
  authDomain: "whatsapp-clone-a1a30.firebaseapp.com",
  projectId: "whatsapp-clone-a1a30",
  storageBucket: "whatsapp-clone-a1a30.appspot.com",
  messagingSenderId: "859289404429",
  appId: "1:859289404429:web:6f1ba07cd3f22ed5f98144",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
