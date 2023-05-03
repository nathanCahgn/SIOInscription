import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    
    apiKey: "AIzaSyAspm8VaWAEf9D5yaR4vA7KGORCuDw_mfg",

    authDomain: "inscriptionsio-8c17c.firebaseapp.com",
  
    projectId: "inscriptionsio-8c17c",
  
    storageBucket: "inscriptionsio-8c17c.appspot.com",
  
    messagingSenderId: "330468350572",
  
    appId: "1:330468350572:web:e133bacfc18bc0f70cd649",
  
    measurementId: "G-NX6GCR56VE"
  

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
