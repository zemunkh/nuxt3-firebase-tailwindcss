import { initializeApp } from "firebase/app";
// import { useRuntimeConfig } from '#app'
// const config = useRuntimeConfig()

const firebaseConfig = {
  apiKey: 'AIzaSyBtiqRPpcNFM9dkyukLFtzhzYmOtGk-saY', //process.env.FIREBASE_API_KEY,
  authDomain: 'nuxt3-zemunkh.firebaseapp.com', //process.env.FIREBASE_AUTH_DOMAIN,
  projectId: 'nuxt3-zemunkh', //process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;