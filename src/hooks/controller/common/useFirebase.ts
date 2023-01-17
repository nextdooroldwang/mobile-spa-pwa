import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
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
logEvent(analytics, 'login', { method: 'Google' });
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export default function useFirebase() {
  return {};
}
