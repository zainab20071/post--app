import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {getAuth,
createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import {getDatabase,
set,
ref,
push,
onChildAdded}
 from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js"
  const firebaseConfig = {
    apiKey: "AIzaSyAaML2wdM0nEOeSfwIU-hHxKPwEr_Upwj0",
    authDomain: "blog-app-1b595.firebaseapp.com",
    projectId: "blog-app-1b595",
    storageBucket: "blog-app-1b595.firebasestorage.app",
    messagingSenderId: "859752842911",
    appId: "1:859752842911:web:f85c64b8240644cbf184aa"
  };
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);
  const database = getDatabase(app);
export {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
  onAuthStateChanged,
  push,
  onChildAdded
};