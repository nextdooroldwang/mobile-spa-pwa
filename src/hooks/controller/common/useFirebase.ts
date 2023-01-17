// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDheGPreK8EQG4scUbFrBZK8rOXW_QmFs4',
  authDomain: 'carillon-dev.firebaseapp.com',
  projectId: 'carillon-dev',
  storageBucket: 'carillon-dev.appspot.com',
  messagingSenderId: '50911812616',
  appId: '1:50911812616:web:d8f4605e0200fc857905bd',
  measurementId: 'G-CB45VCWF1R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function useFirebase() {
  return {};
}
