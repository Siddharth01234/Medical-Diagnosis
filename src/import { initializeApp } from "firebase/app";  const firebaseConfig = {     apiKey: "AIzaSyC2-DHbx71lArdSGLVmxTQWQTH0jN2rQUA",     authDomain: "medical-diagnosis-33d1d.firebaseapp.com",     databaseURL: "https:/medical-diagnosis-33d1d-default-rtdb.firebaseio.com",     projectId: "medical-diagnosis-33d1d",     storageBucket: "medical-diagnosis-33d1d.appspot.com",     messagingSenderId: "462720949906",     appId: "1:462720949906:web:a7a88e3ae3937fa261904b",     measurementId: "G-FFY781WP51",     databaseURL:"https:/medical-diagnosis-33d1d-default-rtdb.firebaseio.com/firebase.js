import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC2-DHbx71lArdSGLVmxTQWQTH0jN2rQUA",
    authDomain: "medical-diagnosis-33d1d.firebaseapp.com",
    databaseURL: "https://medical-diagnosis-33d1d-default-rtdb.firebaseio.com",
    projectId: "medical-diagnosis-33d1d",
    storageBucket: "medical-diagnosis-33d1d.appspot.com",
    messagingSenderId: "462720949906",
    appId: "1:462720949906:web:a7a88e3ae3937fa261904b",
    measurementId: "G-FFY781WP51",
    databaseURL:"https://medical-diagnosis-33d1d-default-rtdb.firebaseio.com/",
  };

  export const app = initializeApp(firebaseConfig);
