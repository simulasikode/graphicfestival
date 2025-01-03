// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionala
// firebase id: Festival Seni Cetak Grafis - festivaltrilogia
const firebaseConfig = {
  apiKey: "AIzaSyB77bMOq_9dUJgZa1mxNC_aCu82mrpaFUM",
  authDomain: "festivaltrilogia.firebaseapp.com",
  projectId: "festivaltrilogia",
  storageBucket: "festivaltrilogia.firebasestorage.app",
  messagingSenderId: "65358007381",
  appId: "1:65358007381:web:8bfccc48858d1ba10818dc",
  measurementId: "G-QDM6XHWBR7",
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
