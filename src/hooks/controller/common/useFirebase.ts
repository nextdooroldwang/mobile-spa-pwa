import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
const firebaseConfig = {
  apiKey: 'AIzaSyDheGPreK8EQG4scUbFrBZK8rOXW_QmFs4',
  authDomain: 'carillon-dev.firebaseapp.com',
  projectId: 'carillon-dev',
  storageBucket: 'carillon-dev.appspot.com',
  messagingSenderId: '50911812616',
  appId: '1:50911812616:web:d8f4605e0200fc857905bd',
  measurementId: 'G-CB45VCWF1R',
};
self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
const app = initializeApp(firebaseConfig);
//分析
const analytics = getAnalytics(app);
//性能监测
const perf = getPerformance(app);

logEvent(analytics, 'login', { method: 'Google' });

export default function useFirebase() {
  return {};
}
