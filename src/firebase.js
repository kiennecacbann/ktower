import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYywzjnavQ29MdFaMLXi8Dnwwr-7-KWwY",
  authDomain: "ktower-c54ba.firebaseapp.com",
  projectId: "ktower-c54ba",
  storageBucket: "ktower-c54ba.appspot.com",
  messagingSenderId: "22437762092",
  appId: "1:22437762092:web:3d3d333470b79946452d89"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();