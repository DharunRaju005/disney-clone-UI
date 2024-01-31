
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyANd8y1nbULSWjYzjEPUY9nwTy4Q269RVA",
    authDomain: "disney-clone-3335f.firebaseapp.com",
    projectId: "disney-clone-3335f",
    storageBucket: "disney-clone-3335f.appspot.com",
    messagingSenderId: "326633441437",
    appId: "1:326633441437:web:11c1a3c9ab9a9c14ecec74",
    measurementId: "G-79BPJ1E947"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  
  export { auth, provider, storage };
  export default db;
  




