import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4DZaJ_l_2TGy_mrCOTpTb2nNEtwp3Pc8",
  authDomain: "d-design-studio-33bca.firebaseapp.com",
  projectId: "d-design-studio-33bca",
  storageBucket: "d-design-studio-33bca.firebasestorage.app",
  messagingSenderId: "413109287484",
  appId: "1:413109287484:web:d64c493fcb3e7e7a366139",
  measurementId: "G-VTYFPS4EWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;
