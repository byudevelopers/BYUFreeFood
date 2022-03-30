import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLzJSpvoM9wB10qAvRvZ7Vms6KUQx8GU",
  authDomain: "byufreefood.firebaseapp.com",
  projectId: "byufreefood",
  storageBucket: "byufreefood.appspot.com",
  messagingSenderId: "1095050794872",
  appId: "1:1095050794872:web:d2dcc3e76eaa3b03241a8d",
  measurementId: "G-0SP7ZK635Y"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

//export { firestore };